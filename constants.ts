import type { TileData, Card, CardType } from './types';

export const PLAYER_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899'];
export const PLAYER_STARTING_KP = 1500;
export const PLAYER_ELIMINATION_THRESHOLD = -2000;

export const CHARACTERS_LIST = [
  { name: "Dinosaur",     img: "https://img.icons8.com/plasticine/200/dinosaur.png" },
  { name: "Zenmarx",      img: "https://img.icons8.com/color/480/karl-marx.png" },
  { name: "Comrad Bunny", img: "https://img.icons8.com/plasticine/200/rabbit.png" },
  { name: "Marxwell",     img: "https://img.icons8.com/plasticine/200/cat.png" },
];

export const CARDS_INFO: { [key in CardType]: Omit<Card, 'id'> & { icon: string } } = {
  'x2_points': {
    type: 'x2_points',
    name: 'Thẻ Cảm Hứng Sáng Tạo',
    description: 'Nhân đôi số KP nhận được từ một lần thưởng hoặc trả lời đúng câu hỏi (dùng 1 lần).',
    icon: '🌠'
  },
  'shield': {
    type: 'shield',
    name: 'Lá Chắn Biện Chứng',
    description: 'Vô hiệu hóa một lần tấn công "Phê Bình Trực Diện" từ người chơi khác (dùng 1 lần).',
    icon: '🛡️'
  },
  'point_save': {
    type: 'point_save',
    name: 'Luận Điểm Vững Chắc',
    description: 'Tránh bị trừ KP khi trả lời sai một câu hỏi (dùng 1 lần).',
    icon: '📚'
  }
};

export const CARD_COSTS: { [key in CardType]: number } = {
  'x2_points': 150,
  'shield': 250,
  'point_save': 150
};


export const TILES: TileData[] = [
  // Cạnh dưới
  { id: 1, name: "Bến Khởi Hành Cách Mạng Tri Thức 🚩", group: "Đặc Biệt", type: 'start', description: "Mỗi khi đi qua đây, bạn được tiếp thêm 200 KP (Điểm tri thức) để củng cố lập trường trên hành trình cách mạng." },
  { id: 2, name: "Diễn đàn Lý luận Mở 🌟", group: "Thưởng", type: 'reward', description: "Luận điểm của bạn được hoan nghênh! Có cơ hội nhận KP thưởng hoặc tiến nhanh hơn trên con đường tri thức." },
  { id: 3, name: "Sai lầm Tả khuynh 📉", group: "Phạt", type: 'penalty', description: "Tư tưởng quá nóng vội khiến bạn vấp ngã. Có thể bị trừ KP hoặc lùi lại vài bước để suy ngẫm." },
  { id: 4, name: "Nhà sách Chân Lý 📚", group: "Mua Thẻ", type: 'buy_card', description: "Đầu tư vào tri thức để bảo vệ thành quả. Trả lời đúng để có cơ hội mua một trong các thẻ đặc biệt." },
  { id: 5, name: "Phát kiến Bất ngờ ✨", group: "Thưởng", type: 'reward', description: "Một ý tưởng đột phá loé lên! Bạn có thể được thưởng KP hoặc được đẩy về phía trước." },
  { id: 6, name: "Hội thảo Quốc tế 🤝", group: "Cơ Hội", type: 'opportunity', description: "Cơ hội liên minh với một nhà lý luận khác. Hãy chọn một người để 'kết nối tư tưởng' cho lượt tiếp theo của họ!" },
  { id: 7, name: "Phê bình Trực diện ⚔️", group: "Tấn Công", type: 'attack', description: "Dùng lý luận sắc bén của bạn để chỉ ra sai lầm của đối thủ. Chọn một người chơi để họ phải lùi lại 5 ô." },
  { id: 8, name: "Chủ nghĩa Giáo điều 🧱", group: "Phạt", type: 'penalty', description: "Sự cứng nhắc trong tư duy kìm hãm bạn. Có nguy cơ mất KP hoặc bị đẩy lùi." },
  { id: 9, name: "Đầu tư vào Tương lai 🏦", group: "Đầu Tư", type: 'investment', description: "Mạo hiểm để bứt phá! Đặt cược KP và trả lời một câu hỏi. Đúng nhân đôi, sai mất gấp đôi tiền cược." },
  { id: 10, name: "Luận điểm Sắc sảo 💡", group: "Thưởng", type: 'reward', description: "Lập luận của bạn không thể bị bác bỏ. Nhận thưởng KP hoặc tiến thêm vài bước." },
  
  // Cạnh trái
  { id: 11, name: "Phòng Thi Giữa Kỳ 📝", group: "Đặc Biệt", type: 'midterm_exam', description: "Kiểm tra kiến thức giữa chặng đường. Trả lời 10 câu hỏi, đúng ít nhất 7 câu để nhận 300 KP, nếu không sẽ bị trừ 200 KP." },
  { id: 12, name: "Cược vào Chân lý ⚖️", group: "Đầu Tư", type: 'investment', description: "Chân lý thuộc về ai? Đặt cược KP và trả lời một câu hỏi để chứng minh. Đúng x2, sai mất x2." },
  { id: 13, name: "Lập trường Lung lay 🌪️", group: "Phạt", type: 'penalty', description: "Bạn bị ảnh hưởng bởi tư tưởng sai lệch. Nguy cơ mất KP hoặc phải lùi lại." },
  { id: 14, name: "Cảm hứng Bất chợt 💥", group: "Thưởng", type: 'reward', description: "Nguồn cảm hứng dồi dào giúp bạn tiến xa. Có thể được cộng KP hoặc tiến nhanh hơn." },
  { id: 15, name: "Cửa hàng Tri thức 🛡️", group: "Mua Thẻ", type: 'buy_card', description: "Trang bị lá chắn để bảo vệ luận điểm. Trả lời đúng để có cơ hội mua một trong các thẻ đặc biệt." },
  { id: 16, name: "Đối thoại Học thuật 💬", group: "Cơ Hội", type: 'opportunity', description: "Thách thức và hợp tác! Chọn một người chơi để 'liên kết số phận' cho lượt tiếp theo của họ." },
  { id: 17, name: "Vận dụng Sáng tạo 🚀", group: "Thưởng", type: 'reward', description: "Áp dụng lý luận vào thực tiễn thành công. Nhận phần thưởng xứng đáng là KP hoặc một cú hích về phía trước." },
  { id: 18, name: "Quỹ Khuyến học C.Mác 💰", group: "Quỹ Tri Thức", type: 'knowledge_fund', description: "Bạn nhận được tài trợ từ quỹ khuyến học. Nhận buff loại bỏ đáp án sai miễn phí trong 2 lượt tới." },
  { id: 19, name: "Chủ nghĩa Kinh nghiệm 📉", group: "Phạt", type: 'penalty', description: "Chỉ tin vào kinh nghiệm mà bỏ qua lý luận khiến bạn thụt lùi. Cẩn thận mất KP hoặc phải đi lùi." },
  { id: 20, name: "Tổng kết Thực tiễn 📈", group: "Thưởng", type: 'reward', description: "Rút ra bài học từ thực tiễn. Phần thưởng là KP hoặc một bước tiến dài." },
  
  // Cạnh trên
  { id: 21, name: "Phòng Thi Cuối Kỳ 📄", group: "Đặc Biệt", type: 'final_exam', description: "Bài kiểm tra quyết định! Trả lời 15 câu hỏi, đúng ít nhất 7 câu để nhận 500 KP, nếu không sẽ bị trừ 300 KP." },
  { id: 22, name: "Tư duy Siêu hình 🧊", group: "Phạt", type: 'penalty', description: "Cái nhìn phiến diện khiến bạn trả giá. Có thể bị trừ KP hoặc lùi bước." },
  { id: 23, name: "Liên minh Tư tưởng 🔗", group: "Cơ Hội", type: 'opportunity', description: "Đồng hành cùng một người bạn trên con đường chân lý! Chọn một người chơi để chia sẻ thành quả hoặc rủi ro trong lượt tới của họ." },
  { id: 24, name: "Tranh Luận Sai Lầm 💥", group: "Tấn Công", type: 'attack', description: "Dùng lý luận sắc bén của bạn để chỉ ra sai lầm của đối thủ. Chọn một người chơi để họ phải lùi lại 5 ô." },
  { id: 25, name: "Cửa hàng Sáng tạo 🌠", group: "Mua Thẻ", type: 'buy_card', description: "Kích hoạt tiềm năng của bạn! Trả lời đúng để có cơ hội mua một trong các thẻ đặc biệt." },
  { id: 26, name: "Vinh Danh: Nhà Lý Luận Trẻ 🏆", group: "Thưởng", type: 'reward', description: "Nỗ lực của bạn được ghi nhận! Nhận một phần thưởng KP ngẫu nhiên hoặc tiến về phía trước." },
  { id: 27, name: "Bảo thủ Trì trệ 🐌", group: "Phạt", type: 'penalty', description: "Từ chối tiếp thu cái mới khiến bạn tụt hậu. Có thể mất KP hoặc phải lùi lại." },
  { id: 28, name: "Đầu tư vào Biện chứng 💹", group: "Đầu Tư", type: 'investment', description: "Liệu bạn có nắm vững quy luật? Đặt cược KP và trả lời câu hỏi. Đúng x2, sai mất x2." },
  { id: 29, name: "Kế thừa Tinh hoa 📜", group: "Thưởng", type: 'reward', description: "Bạn đã kế thừa xuất sắc di sản của các nhà tư tưởng đi trước. Nhận thưởng KP hoặc tiến về phía trước." },
  { id: 30, name: "Thách thức Tư duy 🎲", group: "Đầu Tư", type: 'investment', description: "Bạn có dám cược vào trí tuệ của mình? Đặt cược KP, trả lời câu hỏi và nhận phần thưởng gấp đôi hoặc mất tất cả." },

  // Cạnh phải
  { id: 31, name: "Nhà Tù Nô Lệ Học 🏚️", group: "Đặc Biệt", type: 'prison', description: "Tư duy của bạn mắc kẹt trong những định kiến cũ. Phải trả lời 30 câu hỏi để được 'giải phóng' và quay về Bến Khởi Hành."},
  { id: 32, name: "Mở rộng Tầm nhìn 🔭", group: "Thưởng", type: 'reward', description: "Tiếp thu tri thức mới giúp bạn đi nhanh hơn. Thưởng KP hoặc tiến thêm vài bước." },
  { id: 33, name: "Cạm bẫy Ngụy biện 🕸️", group: "Phạt", type: 'penalty', description: "Bạn đã rơi vào một lỗi logic. Sai lầm này có thể khiến bạn mất KP hoặc lùi lại." },
  { id: 34, name: "Tài trợ của Ph.Ăng-ghen 🎁", group: "Quỹ Tri Thức", type: 'knowledge_fund', description: "Một món quà từ nhà hảo tâm! Bạn được sử dụng quyền trợ giúp 50/50 miễn phí trong 2 lượt tới." },
  { id: 35, name: "Cửa hàng Lý luận 🛡️", group: "Mua Thẻ", type: 'buy_card', description: "Gia tăng sức mạnh lý luận. Trả lời đúng để có cơ hội mua một trong các thẻ đặc biệt." },
  { id: 36, name: "Giao lưu Quốc tế 🌐", group: "Cơ Hội", type: 'opportunity', description: "Học hỏi từ bạn bè năm châu. Chọn một người để 'kết nối tư tưởng' cho lượt tiếp theo của họ." },
  { id: 37, name: "Tranh Luận Nảy Lửa 🔥", group: "Tấn Công", type: 'attack', description: "Dùng lý luận sắc bén của bạn để chỉ ra sai lầm của đối thủ. Chọn một người chơi để họ phải lùi lại 5 ô." },
  { id: 38, name: "Góc nhìn Đột phá 💎", group: "Thưởng", type: 'reward', description: "Bạn tìm ra một hướng đi mới cho lý luận. Nhận thưởng KP hoặc một bước tiến vượt bậc." },
  { id: 39, name: "Cửa hàng Đột phá 🚀", group: "Mua Thẻ", type: 'buy_card', description: "Tạo ra bước ngoặt! Trả lời đúng để có cơ hội mua một trong các thẻ đặc biệt."},
  { id: 40, name: "Cược Tri Thức 🏦", group: "Đầu Tư", type: 'investment', description: "Bạn có dám cược vào trí tuệ của mình? Đặt cược KP, trả lời câu hỏi và nhận phần thưởng gấp đôi hoặc mất tất cả." }
];