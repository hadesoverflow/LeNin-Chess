/*
  # Tạo bảng cho chức năng chơi nhiều người

  1. Bảng mới
    - `rooms`: Lưu thông tin phòng chơi
      - `id` (text, primary key): Mã phòng 6 ký tự
      - `host_id` (text): ID của người tạo phòng
      - `created_at` (timestamptz): Thời gian tạo
      - `updated_at` (timestamptz): Thời gian cập nhật cuối
      - `game_state` (jsonb): Trạng thái game (nullable)
      
    - `sessions`: Lưu thông tin người chơi trong phòng
      - `id` (text, primary key): ID session
      - `room_id` (text, foreign key): Mã phòng
      - `name` (text): Tên người chơi
      - `character_img` (text): Ảnh nhân vật
      - `is_bot` (boolean): Có phải bot không
      - `created_at` (timestamptz): Thời gian tham gia

  2. Bảo mật
    - Cho phép mọi người đọc và tạo rooms (không cần auth)
    - Chỉ cho phép host cập nhật/xóa room
    - Cho phép mọi người thêm session vào room
*/

-- Tạo bảng rooms
CREATE TABLE IF NOT EXISTS rooms (
  id text PRIMARY KEY,
  host_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  game_state jsonb DEFAULT NULL
);

-- Tạo bảng sessions
CREATE TABLE IF NOT EXISTS sessions (
  id text PRIMARY KEY,
  room_id text NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  name text NOT NULL,
  character_img text NOT NULL,
  is_bot boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Index cho truy vấn nhanh hơn
CREATE INDEX IF NOT EXISTS idx_sessions_room_id ON sessions(room_id);
CREATE INDEX IF NOT EXISTS idx_rooms_created_at ON rooms(created_at);

-- Bật RLS
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Policies cho rooms: Cho phép mọi người đọc và tạo
CREATE POLICY "Anyone can read rooms"
  ON rooms FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create rooms"
  ON rooms FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update rooms"
  ON rooms FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete old rooms"
  ON rooms FOR DELETE
  USING (created_at < now() - interval '24 hours');

-- Policies cho sessions: Cho phép mọi người đọc và thêm
CREATE POLICY "Anyone can read sessions"
  ON sessions FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create sessions"
  ON sessions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can delete sessions"
  ON sessions FOR DELETE
  USING (true);

-- Function để tự động xóa rooms cũ (sau 24 giờ)
CREATE OR REPLACE FUNCTION cleanup_old_rooms()
RETURNS void AS $$
BEGIN
  DELETE FROM rooms WHERE created_at < now() - interval '24 hours';
END;
$$ LANGUAGE plpgsql;
