import type { Question } from './types';

export const QUESTIONS: Question[] = [
  // TILE 1: Bến Khởi Hành
  {
    "type": "singlechoice",
    "content": "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử:\nChủ thể sáng tạo chân chính ra lịch sử là:",
    "answers": [
      { "content": "Quần chúng nhân dân", "correct": true },
      { "content": "Các cá nhân kiệt xuất, các vĩ nhân", "correct": false },
      { "content": "Giai cấp thống trị", "correct": false },
      { "content": "Tầng lớp tri thức trong xã hội", "correct": false }
    ],
    "explanation": "Quần chúng nhân dân là lực lượng trực tiếp tham gia lao động sản xuất và đấu tranh xã hội, do đó họ là chủ thể sáng tạo chân chính ra lịch sử."
  },
  {
    "type": "singlechoice",
    "content": "1. Xanh-ximông là đại biểu của trường phải nào?",
    "answers": [
      { "content": "Chủ nghĩa xã hội không tưởng Pháp", "correct": true },
      { "content": "Chủ nghĩa xã hội không tưởng Đức", "correct": false },
      { "content": "Triết học cổ điển Đức", "correct": false },
      { "content": "Kinh tế chính trị học Anh", "correct": false }
    ],
    "explanation": "Xanh-ximông cùng Phuriê và Ô-oen là đại biểu của chủ nghĩa xã hội không tưởng Pháp, tiền đề của chủ nghĩa xã hội khoa học."
  },
  {
    "type": "singlechoice",
    "content": "2. Quan hệ giữa người với người trong quá trình sản xuất được gọi là gì?",
    "answers": [
      { "content": "Quan hệ xã hội", "correct": false },
      { "content": "Quan hệ tổ chức quản lý", "correct": false },
      { "content": "Quan hệ sản xuất", "correct": true },
      { "content": "Quan hệ điều tiết", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất là mối quan hệ giữa người với người trong quá trình sản xuất vật chất, bao gồm quan hệ sở hữu, tổ chức quản lý và phân phối."
  },
  {
    "type": "singlechoice",
    "content": "3. Một sinh viên tóm tắt nội dung quy luật về sự phù hợp giữa quan hệ sản xuất với trình độ của như sau. Đáp án nào sau đây là đúng?",
    "answers": [
      { "content": "Quy luật này vạch rõ sự phụ thuộc khách quan của lực lượng sản xuất vào quan hệ sản xuất", "correct": false },
      { "content": "Sự hình thành, biến đổi và phát triển của quan hệ sản xuất được quyết định bởi lực lượng", "correct": true },
      { "content": "Lực lượng sản xuất và quan hệ sản xuất là hai mặt của phương thức sản xuất, chúng tồn tại", "correct": false },
      { "content": "Quy luật này chỉ tồn tại trong một vài xã hội", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất hình thành, biến đổi và phát triển phải phù hợp với trình độ của lực lượng sản xuất; nếu không sẽ trở thành lực cản."
  },
  {
    "type": "singlechoice",
    "content": "4. Tri thức nào sau đây nảy sinh một cách trực tiếp từ thực tiễn lao động sản xuất?",
    "answers": [
      { "content": "Tri thức kinh nghiệm", "correct": true },
      { "content": "Tri thức lý luận", "correct": false },
      { "content": "Tri thức lý luận khoa học", "correct": false },
      { "content": "Tri thức lý luận thực tiễn", "correct": false }
    ],
    "explanation": "Tri thức kinh nghiệm là những hiểu biết trực tiếp từ hoạt động sản xuất và đời sống, chưa khái quát thành lý luận."
  },
  {
    "type": "singlechoice",
    "content": "5. Theo V.I.Lênin. Quan điểm về đời sống, về thực tiễn phải là...của lý luận nhận thức:",
    "answers": [
      { "content": "Điểm thứ nhất", "correct": false },
      { "content": "Quan điểm đầu tiên", "correct": false },
      { "content": "Quan điểm thứ nhất và cơ bản", "correct": true },
      { "content": "Điều quan trọng", "correct": false }
    ],
    "explanation": "Lênin khẳng định: Quan điểm về thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận nhận thức, vì thực tiễn là cơ sở và tiêu chuẩn của chân lý."
  },
  {
    "type": "singlechoice",
    "content": "6. Công lao của",
    "answers": [
      { "content": "Mác và Ph.Ăngghen với nhận thức là gì?", "correct": false },
      { "content": "Phát hiện ra thế giới khách quan", "correct": false },
      { "content": "Đưa phương pháp luận vào nhận thức", "correct": true },
      { "content": "Đưa thực tiễn vào triết học", "correct": false },
      { "content": "Đề ra tư tưởng đấu tranh chống lại giai cấp tư sản", "correct": false }
    ],
    "explanation": "Mác và Ăngghen đã đưa phép biện chứng duy vật vào lý luận nhận thức, xây dựng cơ sở phương pháp luận khoa học."
  },
  {
    "type": "singlechoice",
    "content": "7. Nhận thức cảm tính được thực hiện dưới những hình thức nào?",
    "answers": [
      { "content": "Tri giác, phán đoán và suy luận", "correct": false },
      { "content": "Cảm giác, tri giác và khái niệm", "correct": false },
      { "content": "Cảm giác, tri giác và biểu tượng", "correct": true },
      { "content": "Khái niệm và phán đoán", "correct": false }
    ],
    "explanation": "Nhận thức cảm tính phản ánh trực tiếp thế giới qua ba hình thức: cảm giác, tri giác và biểu tượng."
  },
  {
    "type": "singlechoice",
    "content": "8.Đứng im, cân bằng chi xảy ra trong một số quan hệ nhất định chứ không phải trong mọi quan hệ là:",
    "answers": [
      { "content": "Thực tế", "correct": false },
      { "content": "Tuyệt đối", "correct": false },
      { "content": "Tương đối", "correct": true },
      { "content": "Thường xuyên", "correct": false }
    ],
    "explanation": "Đứng im là tương đối, vì sự vật luôn vận động, đứng im chỉ là trạng thái tạm thời trong một số quan hệ nhất định."
  },
  {
    "type": "singlechoice",
    "content": "9. A là một sinh viên có học lực kém... Căn cứ vào kiến thức ở môn Triết học, Anh/Chị hãy cho biết trường hợp bạn A thuộc 1 trong 3 quy luật nào sau đây:",
    "answers": [
      { "content": "Quy luật từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại", "correct": true },
      { "content": "Quy luật thống nhất và đấu tranh giữa các mặt đối lập", "correct": false },
      { "content": "Quy luật phủ định của phủ định", "correct": false },
      { "content": "Quy luật phát triển", "correct": false }
    ],
    "explanation": "Bạn A tích lũy dần kiến thức (biến đổi về lượng), đến một mức nhất định dẫn đến sự thay đổi về chất (từ học lực yếu thành giỏi)."
  },
  {
    "type": "singlechoice",
    "content": "10. Đâu là một phát minh vĩ đại của",
    "answers": [
      { "content": "Mác đã đem lại một cuộc cách mạng trong triết học về xã hội?", "correct": false },
      { "content": "Chủ nghĩa duy vật lịch sử", "correct": true },
      { "content": "Chủ nghĩa duy tâm khách quan", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan", "correct": false },
      { "content": "Chủ nghĩa duy vật chất phát", "correct": false }
    ],
    "explanation": "Mác đã sáng lập chủ nghĩa duy vật lịch sử, lý luận khoa học đầu tiên giải thích sự phát triển xã hội dựa trên cơ sở kinh tế."
  },
  {
    "type": "singlechoice",
    "content": "11. Sự khác biệt cơ bản nhất giữa các giai cấp là địa vị của họ trong",
    "answers": [
      { "content": "Quyền lực chính trị", "correct": false },
      { "content": "Quyền lực nhà nước", "correct": false },
      { "content": "Quyền lực quản lý kinh tế", "correct": false },
      { "content": "Quyền lực sở hữu tư liệu sản xuất", "correct": true }
    ],
    "explanation": "Sự khác biệt cơ bản nhất giữa các giai cấp là địa vị trong quan hệ sở hữu tư liệu sản xuất – yếu tố quyết định vai trò của họ trong xã hội."
  },
  {
    "type": "singlechoice",
    "content": "12. Thuyết có thể biết còn gọi là gì?",
    "answers": [
      { "content": "Thuyết nhận biết", "correct": false },
      { "content": "Thuyết khả tri", "correct": false },
      { "content": "Thuyết khả tri luận", "correct": true },
      { "content": "Thuyết nhận biết luận", "correct": false }
    ],
    "explanation": "Thuyết khả tri luận khẳng định: thế giới khách quan có thể được con người nhận thức bằng tư duy và thực tiễn."
  },
  {
    "type": "singlechoice",
    "content": "13. Nhân tố quyết định xu hướng phát triển của các hình thái kinh tế - xã hội là",
    "answers": [
      { "content": "Ý thức của gia cấp nắm quyền lực nhà nước", "correct": false },
      { "content": "Ý trí của nhân dân", "correct": false },
      { "content": "Quy luật khách quan", "correct": true },
      { "content": "Điều kiện khách quan và chủ quan của mỗi xã hội", "correct": false }
    ],
    "explanation": "Xu hướng phát triển của các hình thái kinh tế - xã hội tuân theo các quy luật khách quan, không phụ thuộc ý chí chủ quan."
  },
  {
    "type": "singlechoice",
    "content": "14. Khi nào quan hệ sản xuất được xem là phù hợp với tính chất và trình độ phát triển của lực lượng sản xuất?",
    "answers": [
      { "content": "Thúc đẩy lực lượng sản xuất phát triển", "correct": true },
      { "content": "Cải thiện đời sống nhân dân", "correct": false },
      { "content": "Tạo điều kiện thực hiện công bằng xã hội", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất phù hợp khi nó tạo điều kiện thúc đẩy lực lượng sản xuất phát triển, nếu không sẽ kìm hãm tiến bộ xã hội."
  },
  {
    "type": "singlechoice",
    "content": "15. Theo cách phân chia các hình thức vận động của Ph.Ăngghen, hình thức vận động nào là thấp nhất, đơn giản nhất?",
    "answers": [
      { "content": "Hình thức vận động cơ học", "correct": true },
      { "content": "Hình thức vận động vật lý", "correct": false },
      { "content": "Hình thức vận động hoá học", "correct": false },
      { "content": "Hình thức vận động xã hội", "correct": false }
    ],
    "explanation": "Theo Ăngghen, hình thức vận động cơ học là thấp nhất, đơn giản nhất, thể hiện qua sự thay đổi vị trí của vật thể trong không gian."
  },
  {
    "type": "singlechoice",
    "content": "16. Luận điểm sau thuộc lập trường triết học nào: Quy luật trong các khoa học là sự sáng tạo chủ quan của con người và được áp dụng vào tự nhiên và xã hội.",
    "answers": [
      { "content": "Chủ nghĩa duy vật siêu hình", "correct": false },
      { "content": "Chủ nghĩa duy tâm khách quan", "correct": false },
      { "content": "Chủ nghĩa duy vật biện chứng", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan", "correct": true }
    ],
    "explanation": "Luận điểm này phủ nhận tính khách quan của quy luật, cho rằng quy luật chỉ là sản phẩm tinh thần của con người. Đây chính là đặc trưng của chủ nghĩa duy tâm chủ quan."
  },
  {
    "type": "singlechoice",
    "content": "17. Theo quan điểm duy vật lịch sử, sự ra đời của nhà nước là để giải quyết các mâu thuẫn trong xã hội vì:",
    "answers": [
      { "content": "Xã hội có mâu thuẫn thì cần phải có lực lượng đại diện cho xã hội để giải quyết nó", "correct": false },
      { "content": "Kinh nghiệm thực tế cho thấy đúng như vậy", "correct": false },
      { "content": "Nếu mâu thuẫn có thể giải quyết được thì không cần đến sự ra đời của nhà nước, sự ra đời của nó chỉ chứng tỏ rằng mâu thuẫn đã phát triễn đến chỗ không thể giải quyết được nên cần đến sự ra đời của nhà nướ", "correct": true },
      { "content": "Tất yếu của lịch sử nhân loại", "correct": false }
    ],
    "explanation": "Theo chủ nghĩa duy vật lịch sử, nhà nước chỉ ra đời khi mâu thuẫn giai cấp đã phát triển đến mức không thể điều hòa bằng con đường thông thường, do đó cần một bộ máy đặc biệt để duy trì trật tự."
  },
  {
    "type": "singlechoice",
    "content": "18. Chủ nghĩa duy vật lịch sử cho rằng, ý thức lý luận đạt trình độ cao và mang tính hệ thống tạo thành các:",
    "answers": [
      { "content": "Hệ tư tưởng", "correct": true },
      { "content": "Hệ kiến thức", "correct": false },
      { "content": "Tri thức tổng hợp", "correct": false },
      { "content": "Hệ thống tri thức", "correct": false }
    ],
    "explanation": "Khi ý thức lý luận đạt đến trình độ khái quát cao, có hệ thống, nó hình thành nên hệ tư tưởng, phản ánh lợi ích của một giai cấp nhất định."
  },
  {
    "type": "singlechoice",
    "content": "19. Chọn câu trả lời sai: Trong một hình thái kinh tế xã hội, quan hệ sản xuất có vai trò sau đây.",
    "answers": [
      { "content": "Là quan hệ cơ bản, quyết định tất cả các quan hệ xã hội khác", "correct": false },
      { "content": "Là cơ sở kinh tế của các hiện tượng xã hội", "correct": false },
      { "content": "Thể hiện tính liên tục trong sự phát triển của xã hội loài người", "correct": true },
      { "content": "Tiêu biểu cho bộ mặt xã hội ở mỗi giai đoạn phát triển nhất định", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất không thể hiện tính liên tục trong sự phát triển xã hội mà thay đổi theo sự phát triển của lực lượng sản xuất. Do đó, phát biểu này là sai."
  },
  {
    "type": "singlechoice",
    "content": "20. Triết học có mấy vấn đề? Trong vấn đề có mấy mặt?",
    "answers": [
      { "content": "1 mặt, 2 vấn đề C", "correct": false },
      { "content": "1 vấn đề, 1 mặt", "correct": false },
      { "content": "1 vấn đề, 2 mặt", "correct": true },
      { "content": "2 mặt, 2 vấn đề", "correct": false }
    ],
    "explanation": "Triết học có một vấn đề cơ bản là mối quan hệ giữa vật chất và ý thức, nhưng gồm hai mặt: vật chất có trước hay ý thức có trước, và con người có khả năng nhận thức thế giới hay không."
  },
  {
    "type": "singlechoice",
    "content": "21. Nguyên nhân là phạm trù triết học chỉ",
    "answers": [
      { "content": "Tác động qua lại giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật khi tạo ra những biến đổi nhất định", "correct": true },
      { "content": "Quan hệ giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật kia tạo nhất định", "correct": false },
      { "content": "Sự chuyển hóa giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật k biến đổi nhất định", "correct": false }
    ],
    "explanation": "Nguyên nhân trong triết học là sự tác động qua lại giữa các yếu tố tạo nên sự biến đổi của sự vật, làm nảy sinh kết quả nhất định."
  },
  {
    "type": "singlechoice",
    "content": "22. Điều khẳng định nào sau đây đúng về mối quan hệ giữa lý luận và kinh nghiệm?",
    "answers": [
      { "content": "Lý luận được hình thành từ kinh nghiệm trên cơ sở kinh nghiệm", "correct": true },
      { "content": "Kinh nghiệm nhiều tự phát dẫn đến sự ra đời của lý luận", "correct": false },
      { "content": "Mọi lý luận đều được xuất phát từ kinh nghiệm", "correct": false },
      { "content": "Lý luận đi trước kinh nghiệm", "correct": false }
    ],
    "explanation": "Lý luận là sự khái quát hóa từ kinh nghiệm thực tiễn, dựa trên nền tảng kinh nghiệm để phát triển thành hệ thống kiến thức khoa học."
  },
  {
    "type": "singlechoice",
    "content": "23. Điều kiện cơ bản để ý thức xã hội tác động trở lại tồn tại xã hội là",
    "answers": [
      { "content": "Ý thức xã hội phải vượt trước tồn tại xã hội", "correct": false },
      { "content": "Ý thức xã hội phải phù hợp với tồn tại xã hội", "correct": false },
      { "content": "Phải có hoạt động thực tiễn của con người", "correct": true },
      { "content": "Phải có điều kiện vật chất bảo đảm", "correct": false }
    ],
    "explanation": "Ý thức xã hội chỉ có thể tác động trở lại tồn tại xã hội thông qua hoạt động thực tiễn của con người, vì thực tiễn là cầu nối giữa ý thức và hiện thực."
  },
  {
    "type": "singlechoice",
    "content": "24. Ai là người khẳng định \"cái sự hiển nhiên là trước hết con người cần phải ăn, uống, ở và hoạt động, trước khi có thể đấu tranh để giành quyền thống trị, trước khi có thể hoạt động chính trị họ ..\".",
    "answers": [
      { "content": "..\".", "correct": false },
      { "content": "Mác", "correct": false },
      { "content": "Ph.Ăngghen", "correct": true },
      { "content": "Platon", "correct": false },
      { "content": "Immanuel Kant", "correct": false }
    ],
    "explanation": "Ph.Ăngghen nhấn mạnh nhu cầu vật chất là cơ bản, trước khi con người có thể tham gia vào các hoạt động xã hội, chính trị, tinh thần."
  },
  {
    "type": "singlechoice",
    "content": "25. Quan điểm của chủ nghĩa Mác-Lênin về lãnh tụ là",
    "answers": [
      { "content": "Tất cả các đáp án đều đúng", "correct": true },
      { "content": "Những cá nhân kiệt xuất có sự gắn bó với quần chúng nhân dân", "correct": false },
      { "content": "Những cá nhân kiệt xuất được quần chúng tín nhiệm", "correct": false },
      { "content": "Những cá nhân kiệt xuất tự nguyện hy sinh bản thân mình vì lợi ích của quần chúng nhân", "correct": false }
    ],
    "explanation": "Theo Mác-Lênin, lãnh tụ là những cá nhân kiệt xuất, gắn bó với quần chúng, được tín nhiệm và sẵn sàng hy sinh lợi ích cá nhân vì lợi ích chung. Do đó, tất cả các đáp án đều đúng."
  },
  {
    "type": "singlechoice",
    "content": "26. Trên mạng xã hội hiện nay như Facebook, TikTok... đã xuất hiện nhiều nhân vật không có ch khi phát ngôn, lối sống của họ đã bị chi phối bởi những điều tiêu cực và trở nên lệch chuẩn, thuần phong mỹ tục, truyền thống văn hóa của dân tộc Việt Nam để câu View, câu lik",
    "answers": [
      { "content": "Theo Anh/chị là hiện tượng gì đã đề cập trong nội dung môn triết học mà Anh/Chị đã học và nghiên cứu qua", "correct": false },
      { "content": "Hiện tượng câu Like, câu View trên mạng xã hội", "correct": false },
      { "content": "Hiện tượng xem thường người khác", "correct": false },
      { "content": "Hiện tượng tha hóa con người", "correct": false },
      { "content": "Hiện tượng xã hội", "correct": true }
    ],
    "explanation": "Đây là một hiện tượng xã hội vì nó phản ánh những hành vi lệch chuẩn, chịu sự tác động từ môi trường xã hội và ảnh hưởng ngược lại đến cộng đồng."
  },
  {
    "type": "singlechoice",
    "content": "27. Trong quá trình nhận thức và hoạt động thực tiễn, chúng ta cần",
    "answers": [
      { "content": "Phủ nhận, gạt bỏ cái ngẫu nhiên", "correct": false },
      { "content": "Cơ bản là phải căn cứ vào cái ngẫu nhiên nhưng đồng thời phải tính tới cái tất nhiên", "correct": false },
      { "content": "Căn cứ vào cái tất nhiên và ngẫu nhiên", "correct": false },
      { "content": "Cơ bản là phải căn cứ vào cái tất nhiên nhưng đồng thời phải tính tới cái ngẫu nhiên", "correct": true }
    ],
    "explanation": "Trong nhận thức và thực tiễn, cái tất nhiên giữ vai trò quyết định, nhưng không thể bỏ qua yếu tố ngẫu nhiên vì nó có thể tác động đến kết quả."
  },
  {
    "type": "singlechoice",
    "content": "28. Theo quan điểm của triết học Mác - Lênin, \"tồn tại xã hội\" bao gồm:",
    "answers": [
      { "content": "Dân số, ý thức xã hội, kiến trúc thượng tầng", "correct": false },
      { "content": "Lực lượng sản xuất, dân số, phương thức sản xuất, ý thức xã hội", "correct": false },
      { "content": "Môi trường tự nhiên, quan hệ sản xuất, tâm lý xã hội, hệ tư tưởng", "correct": false },
      { "content": "Môi trường tự nhiên, dân số, phương thức sản xuất", "correct": true }
    ],
    "explanation": "Tồn tại xã hội bao gồm các yếu tố vật chất như môi trường tự nhiên, dân số và phương thức sản xuất, quyết định sự phát triển của xã hội."
  },
  {
    "type": "singlechoice",
    "content": "29.Đâu là một trong những trường phái của triết học duy tâm?",
    "answers": [
      { "content": "Duy tâm khách quan", "correct": true },
      { "content": "Duy tâm duy lý", "correct": false },
      { "content": "Duy tâm biện chứng", "correct": false },
      { "content": "Duy tâm tôn giáo", "correct": false }
    ],
    "explanation": "Duy tâm khách quan là một trường phái triết học duy tâm, cho rằng ý thức, tinh thần khách quan tồn tại độc lập với con người và quyết định thế giới vật chất."
  },
  {
    "type": "singlechoice",
    "content": "30. Một trong những nguồn gốc ra đời của Triết học là",
    "answers": [
      { "content": "Tự nhiên", "correct": false },
      { "content": "Lao động", "correct": false },
      { "content": "Ngôn ngữ", "correct": false },
      { "content": "Xã hội", "correct": true }
    ],
    "explanation": "Triết học ra đời từ những nhu cầu xã hội, khi con người muốn lý giải thế giới và các quan hệ xã hội."
  },
  {
    "type": "singlechoice",
    "content": "31. Một trong những nguyên nhân ra đời của triết học là:",
    "answers": [
      { "content": "Tâm lý.", "correct": false },
      { "content": "Tư tưởng.", "correct": false },
      { "content": "Nhận thức", "correct": true },
      { "content": "Tự nhiên.", "correct": false }
    ],
    "explanation": "Triết học ra đời từ sự phát triển của nhận thức, khi con người đạt đến khả năng khái quát hóa và tư duy trừu tượng."
  },
  {
    "type": "singlechoice",
    "content": "32. Hạt nhân cơ bản trong quần chúng nhân dân là",
    "answers": [
      { "content": "Những người lao động sản xuất ra của cải vật chất", "correct": true },
      { "content": "Những bộ phận dân cư chống lại giai cấp thống trị áp bức bóc lột, đối kháng với nhân dân", "correct": false },
      { "content": "Những tầng lớp xã hội khác nhau thúc đẩy sự tiến bộ của xã hội", "correct": false },
      { "content": "Những tầng lớp dân cư lao động", "correct": false }
    ],
    "explanation": "Theo quan điểm Mác-Lênin, hạt nhân cơ bản của quần chúng nhân dân là những người lao động trực tiếp sản xuất của cải vật chất nuôi sống xã hội."
  },
  {
    "type": "singlechoice",
    "content": "33. Ý thức được gọi là hình ảnh chủ quan của",
    "answers": [
      { "content": "Hiện thực khách quan", "correct": false },
      { "content": "Thế giới khách quan", "correct": true },
      { "content": "Thế giới chủ quan", "correct": false },
      { "content": "Thế giới vật chất", "correct": false }
    ],
    "explanation": "Ý thức phản ánh thế giới khách quan trong bộ óc con người, nhưng dưới dạng hình ảnh chủ quan."
  },
  {
    "type": "singlechoice",
    "content": "34.Chân lý là gì?",
    "answers": [
      { "content": "Ý kiến của những người có kinh nghiệm", "correct": false },
      { "content": "Sự phù hợp giữa tri thức với hiện thực khách quan và được thực tiễn kiểm nghiệm", "correct": true },
      { "content": "Những quan điểm thuộc về đa số", "correct": false },
      { "content": "Là những thứ đúng đắn trong khoa học", "correct": false }
    ],
    "explanation": "Chân lý là sự phù hợp giữa tri thức và hiện thực khách quan, đồng thời được thực tiễn chứng minh."
  },
  {
    "type": "singlechoice",
    "content": "35. Triết học Mác-Lênin ra đời một phần là kết quả kế thừa trực tiếp từ",
    "answers": [
      { "content": "Thế giới quan duy vật của Hêghen và phép biện chứng của Phoiobắc", "correct": false },
      { "content": "Thế giới quan duy vật của Phơ bách và phép biện chứng của Hêghen", "correct": true },
      { "content": "Thế giới quan duy vật và phép biện chúng của cả Hêghen và Phơ bách", "correct": false },
      { "content": "Chủ nghĩa duy tâm của Hồn bách và biện chứng pháp của Aristốt", "correct": false }
    ],
    "explanation": "Mác-Lênin kế thừa thế giới quan duy vật của Feuerbach và phép biện chứng của Hegel, sau đó phát triển thành chủ nghĩa duy vật biện chứng."
  },
  {
    "type": "singlechoice",
    "content": "36.Khái niệm cơ sở hạ tầng là dùng để chỉ",
    "answers": [
      { "content": "Quan hệ kinh kế của xã hội", "correct": false },
      { "content": "Kết cấu vật chất - kỹ thuật làm cơ sở để phát triển kinh tế", "correct": false },
      { "content": "Quan hệ sản xuất của xã hội", "correct": false },
      { "content": "Quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội", "correct": true }
    ],
    "explanation": "Cơ sở hạ tầng là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội."
  },
  {
    "type": "singlechoice",
    "content": "37.Điền cụm từ thích hợp vào chỗ (..): \"Không thể đem lại cho hai khái niệm ... này định nghĩa một cách chỉ rõ rằng trong hai khái niệm đó, cái nào được coi là có trước\".",
    "answers": [
      { "content": "Nhận thức luận", "correct": true },
      { "content": "Bản thể luận", "correct": false },
      { "content": "Vật chất và ý thức", "correct": false },
      { "content": "Chủ nghĩa duy tâm", "correct": false }
    ],
    "explanation": "Câu này nằm trong nội dung của nhận thức luận, khẳng định không thể tách rời tuyệt đối giữa hai mặt mà phải xem xét trong mối quan hệ biện chứng."
  },
  {
    "type": "singlechoice",
    "content": "38. Tính phổ biến của mối liên hệ được thể hiện:",
    "answers": [
      { "content": "Mọi sự vật, hiện tượng đều liên hệ với nhau và liên hệ với các sự vật hiện tượng khác", "correct": true },
      { "content": "Không có sự vật hiện tượng nào tồn tại cô lập, biệt lập, không liên hệ với sự vật hiện tượng khác", "correct": false },
      { "content": "Sự vật hiện tượng chỉ tồn tại trong mối liên hệ phổ biến", "correct": false },
      { "content": "Mọi sự vật hiện tượng vừa tồn tại độc lập vừa liên hệ phổ biến với sự vật hiện tượng khác", "correct": false }
    ],
    "explanation": "Tính phổ biến của mối liên hệ nghĩa là không sự vật nào tồn tại tách rời, tất cả đều liên hệ với nhau trong một chỉnh thể."
  },
  {
    "type": "singlechoice",
    "content": "39. Câu nào sau đây là đúng về sự phát triển của triết học Mác - Lênin?",
    "answers": [
      { "content": "Mọi giai đoạn phát triển đều gắn liền với sự phát triển của thực tiễn xã hội", "correct": true },
      { "content": "Chỉ gắn liền với sự phát triển của khoa học", "correct": false },
      { "content": "Chỉ gắn liền với sự phát triển của cách mạng xã hội", "correct": false },
      { "content": "Chỉ gắn liền với sự phát triển của sản xuất", "correct": false }
    ],
    "explanation": "Triết học Mác-Lênin luôn phát triển gắn liền với thực tiễn xã hội nói chung, bao gồm sản xuất, khoa học, và cách mạng xã hội."
  },
  {
    "type": "singlechoice",
    "content": "40. Một trong những hạn chế của chủ nghĩa duy vật trước Mác là:",
    "answers": [
      { "content": "Chưa gắn vật chất với thực tiễn xã hội", "correct": true },
      { "content": "Không giải thích được sự vận động", "correct": false },
      { "content": "Đồng nhất vật chất với ý thức", "correct": false },
      { "content": "Bỏ qua thế giới tự nhiên", "correct": false }
    ],
    "explanation": "Chủ nghĩa duy vật trước Mác tuy khẳng định tính khách quan của thế giới vật chất nhưng chưa gắn vật chất với thực tiễn xã hội, nên còn hạn chế."
  },
{
    "type": "singlechoice",
    "content": "41. Triết học nghiên cứu thế giới như thế nào?",
    "answers": [
      { "content": "Như một đối tượng vật chất cụ thể", "correct": false },
      { "content": "Như một hệ đối tượng vật chất nhất định", "correct": false },
      { "content": "Như một chỉnh thể thống nhất", "correct": true }
    ],
    "explanation": "Triết học không chỉ nghiên cứu từng bộ phận mà xem thế giới như một chỉnh thể thống nhất, trong đó các sự vật và hiện tượng có quan hệ, tác động qua lại."
  },
  {
    "type": "singlechoice",
    "content": "42. Quan điểm nào sau đây cho rằng các sự vật, hiện tượng, các quá trình khác nhau vừa tồn tại định, tác động qua lại, chuyển hóa lẫn nhau?",
    "answers": [
      { "content": "Quan điểm siêu hình", "correct": false },
      { "content": "Quan điểm biện chứng", "correct": true },
      { "content": "Quan điểm duy tâm", "correct": false },
      { "content": "Quan điểm duy vật", "correct": false }
    ],
    "explanation": "Quan điểm biện chứng khẳng định sự vật hiện tượng không tồn tại cô lập mà tác động qua lại, chuyển hóa lẫn nhau."
  },
  {
    "type": "singlechoice",
    "content": "43.Chức năng, nhiệm vụ của nhà nước xã hội chủ nghĩa biểu hiện tập trung ở việc quản lý xã hội lĩnh vực bằng.",
    "answers": [
      { "content": "Khoa học", "correct": false },
      { "content": "Công cụ tiền", "correct": false },
      { "content": "Pháp luật", "correct": true },
      { "content": "Kế hoạch", "correct": false }
    ],
    "explanation": "Nhà nước xã hội chủ nghĩa quản lý xã hội chủ yếu bằng pháp luật để đảm bảo công bằng và trật tự xã hội."
  },
  {
    "type": "singlechoice",
    "content": "44. Triết học phổ biến ở Tây Âu thời Trung cổ là Triết học gì?",
    "answers": [
      { "content": "Triết học tự nhiên", "correct": false },
      { "content": "Triết học kinh viện", "correct": true },
      { "content": "Triết học khoa học xã hội", "correct": false },
      { "content": "Triết học chính trị", "correct": false }
    ],
    "explanation": "Triết học kinh viện (scholastic) là dòng triết học gắn liền với thần học Kitô giáo, phổ biến trong thời Trung cổ Tây Âu."
  },
  {
    "type": "singlechoice",
    "content": "45. Theo quan điểm của duy vật về lịch sử, nhân tố quyết định trong lịch sử xét đến cùng là gì?",
    "answers": [
      { "content": "Lao động, tái sản xuất ra con người", "correct": false },
      { "content": "Sở hữu về tư liệu sản xuất, phân phối sản phẩm", "correct": false },
      { "content": "Kết cấu xã hội, giai cấp", "correct": false },
      { "content": "Sự sản xuất và tái sản xuất ra đời sống hiện thực", "correct": true }
    ],
    "explanation": "Theo chủ nghĩa duy vật lịch sử, xét đến cùng sự sản xuất và tái sản xuất đời sống vật chất là nhân tố quyết định sự phát triển của xã hội."
  },
  {
    "type": "singlechoice",
    "content": "46. Thuyết bất khả tri còn gọi là gì?",
    "answers": [
      { "content": "Thuyết không thể biết", "correct": true },
      { "content": "Thuyết khả tri", "correct": false },
      { "content": "Thuyết khả tri luận", "correct": false },
      { "content": "Thuyết nhận biết luận", "correct": false }
    ],
    "explanation": "Thuyết bất khả tri (agnosticism) cho rằng con người không thể biết được bản chất của thế giới."
  },
  {
    "type": "singlechoice",
    "content": "47. Điền vào dấu \"...là tổng hợp những mặt, những yếu tố trong quá trình tạo nên sự vật\":",
    "answers": [
      { "content": "Khả năng", "correct": false },
      { "content": "Hiện thực", "correct": false },
      { "content": "Nội dung", "correct": true },
      { "content": "Hình thức", "correct": false }
    ],
    "explanation": "Nội dung là tổng hợp tất cả các yếu tố, quá trình tạo nên sự vật và quyết định hình thức tồn tại của nó."
  },
  {
    "type": "singlechoice",
    "content": "48.Yếu tố chủ thể của lực lượng sản xuất là?",
    "answers": [
      { "content": "Con người với kỹ năng, kỹ xảo và tri thức được tích luỹ lại", "correct": true },
      { "content": "Tư liệu sản xuất hiện đại", "correct": false },
      { "content": "Khoa học công nghệ tiên tiến", "correct": false },
      { "content": "Các phương án trả lời đều đúng", "correct": false }
    ],
    "explanation": "Trong lực lượng sản xuất, con người là yếu tố trung tâm, giữ vai trò chủ thể sáng tạo."
  },
  {
    "type": "singlechoice",
    "content": "49. Nội dung trước tiên của cách mạng xã hội chủ nghĩa là phải giành chính quyền về tay giai cấp công nhân, nhân dân lao động, đưa những người lao động:",
    "answers": [
      { "content": "Thành người lao động tập thể", "correct": false },
      { "content": "Làm chủ tư liệu sản xuất", "correct": true },
      { "content": "Thành người quản lý xã hội", "correct": false },
      { "content": "Lên địa vị làm chủ xã hội", "correct": false }
    ],
    "explanation": "Điểm mấu chốt của cách mạng xã hội chủ nghĩa là đưa tư liệu sản xuất về tay người lao động."
  },
  {
    "type": "singlechoice",
    "content": "50. Chủ nghĩa duy vật lịch sử cho rằng sự ra đời, tồn tại của nhà nước là để duy trì trật tự xã hội mâu thuẫn giai cấp như thế nào?",
    "answers": [
      { "content": "Đi đến giải quyết", "correct": true },
      { "content": "Phải được giải quyết", "correct": false },
      { "content": "Có thể giải quyết", "correct": false },
      { "content": "Không thể điều hòa được", "correct": false }
    ],
    "explanation": "Nhà nước ra đời để duy trì trật tự xã hội và giải quyết mâu thuẫn giai cấp theo lợi ích của giai cấp thống trị."
  },
  {
    "type": "singlechoice",
    "content": "51. Hạt nhân lý luận của thế giới quan khoa học là chủ nghĩ",
    "answers": [
      { "content": "Duy vật", "correct": false },
      { "content": "Mác", "correct": false },
      { "content": "Duy vật biện chứng", "correct": true },
      { "content": "Lênin", "correct": false }
    ],
    "explanation": "Duy vật biện chứng là hạt nhân lý luận của thế giới quan khoa học."
  },
  {
    "type": "singlechoice",
    "content": "52. Chủ nghĩa Mác-Lênin ra đời dựa trên bao nhiêu tiền đề?",
    "answers": [
      { "content": "Ba tiền đề", "correct": true },
      { "content": "Bốn tiền đề", "correct": false },
      { "content": "Năm tiền đề", "correct": false },
      { "content": "Sáu tiền đề", "correct": false }
    ],
    "explanation": "Chủ nghĩa Mác-Lênin ra đời dựa trên ba tiền đề: triết học cổ điển Đức, kinh tế chính trị học Anh và chủ nghĩa xã hội không tưởng Pháp."
  },
  {
    "type": "singlechoice",
    "content": "Điều kiện cần và đủ để sinh ra ý thức là do.",
    "answers": [
      { "content": "Nghiên cứu khoa học", "correct": false },
      { "content": "Lao động, ngôn ngữ", "correct": true },
      { "content": "Bộ óc người", "correct": true },
      { "content": "Các sự vật, hiện tượng trong thế giới khách quan", "correct": true }
    ],
    "explanation": "Ý thức chỉ có thể hình thành khi có đầy đủ 3 điều kiện: bộ óc người, thế giới khách quan tác động và lao động cùng ngôn ngữ."
  },
  {
    "type": "singlechoice",
    "content": "55. Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?",
    "answers": [
      { "content": "Cộng sản nguyên thủy", "correct": false },
      { "content": "Tư bản chủ nghĩa", "correct": false },
      { "content": "Phong kiến", "correct": false },
      { "content": "Chiếm hữu nô lệ", "correct": true }
    ],
    "explanation": "Sự phân chia giai cấp xuất hiện từ hình thái kinh tế - xã hội chiếm hữu nô lệ khi có sự xuất hiện của chế độ tư hữu."
  },
  {
    "type": "singlechoice",
    "content": "56. Xét đến cùng, mục đích của sự sản xuất xã hội là để làm gì?",
    "answers": [
      { "content": "Sản xuất ra của cải vật chất", "correct": false },
      { "content": "Sản xuất và tái sản xuất ra đời sống hiện thực", "correct": true },
      { "content": "Sản xuất ra con người, nuôi sống con người", "correct": false },
      { "content": "Sản xuất ra con người", "correct": false }
    ],
    "explanation": "Sản xuất xã hội không chỉ tạo ra của cải vật chất mà xét đến cùng là sản xuất và tái sản xuất ra đời sống hiện thực."
  },
  {
    "type": "singlechoice",
    "content": "57. Nguyên lý về sự phát triển là cơ sở khoa học để định hướng cho nhận thức và cải tạo thế giới. Theo đó, trong hoạt động nhận thức và hoạt động thực tiễn con người phải đặt sự vật, hiện tượng theo khuynh hướng:",
    "answers": [
      { "content": "Đi thẳng", "correct": true },
      { "content": "Đi lên của nó", "correct": false },
      { "content": "Không tụt lùi", "correct": false },
      { "content": "Vận động", "correct": false }
    ],
    "explanation": "Nguyên lý phát triển chỉ ra rằng sự vật có khuynh hướng vận động tiến lên theo đường xoáy ốc, chứ không đi theo đường thẳng."
  },
  {
    "type": "singlechoice",
    "content": "58. Cái ngẫu nhiên là cái",
    "answers": [
      { "content": "Diễn ra hoàn toàn không chịu sự chi phối của quy luật nào", "correct": false },
      { "content": "Hoàn toàn diễn ra theo quy luật", "correct": false },
      { "content": "Biểu hiện của quy luật", "correct": true },
      { "content": "Không biểu hiện của bất cứ quy luật nào", "correct": false }
    ],
    "explanation": "Ngẫu nhiên không tách rời quy luật, nó là hình thức biểu hiện đặc thù của quy luật trong những điều kiện cụ thể."
  },
  {
    "type": "singlechoice",
    "content": "59. Vai trò của lãnh tụ đối với phong trào của quần chúng nhân dân?",
    "answers": [
      { "content": "Thúc đẩy hoặc kìm hãm sự tiến bộ của xã hội", "correct": false },
      { "content": "Là người sáng lập ra các tổ chức chính trị, xã hội và là linh hồn của các tổ chức đó", "correct": false },
      { "content": "Lãnh tụ của mỗi thời đại chỉ có thể hoàn thành những nhiệm vụ đặt ra của thời đại đó", "correct": false },
      { "content": "Tất cả các đáp án đều đúng", "correct": true }
    ],
    "explanation": "Lãnh tụ có vai trò định hướng, tổ chức và thúc đẩy phong trào quần chúng, đồng thời chịu sự ràng buộc của điều kiện lịch sử."
  },
  {
    "type": "singlechoice",
    "content": "60. Cái riêng là một phạm trù dùng để chỉ",
    "answers": [
      { "content": "Những mặt, những thuộc tính chung của nhiều sự vật", "correct": false },
      { "content": "Một sự vật, một hiện tượng, một quá trình riêng lẻ nhất định", "correct": true },
      { "content": "Những nét, những thuộc tính chỉ có ở một sự vật", "correct": false },
      { "content": "Các yếu tố cấu thành một hệ thống", "correct": false }
    ],
    "explanation": "Cái riêng dùng để chỉ một sự vật, một hiện tượng, một quá trình cá biệt, có đặc điểm và quy luật vận động riêng."
  },
  {
    "type": "singlechoice",
    "content": "61. Theo quan điểm của chủ nghĩa Mác-Lênin, khái niệm nào dùng để chỉ lực lượng sản xuất cơ bản của xã hội, trực tiếp sản xuất ra của cải vật chất, là cơ sở của sự tồn tại và phát triển của xã hội. Là động lực cơ bản của mọi cuộc cách mạng xã hội và là người sáng tạo ra những giá trị văn hóa tinh thần cho xã hội?",
    "answers": [
      { "content": "Quần chúng nhân dân", "correct": true },
      { "content": "Tất cả các đáp án đều đúng", "correct": false },
      { "content": "Lãnh tụ", "correct": false },
      { "content": "Vĩ nhân", "correct": false }
    ],
    "explanation": "Theo Mác-Lênin, quần chúng nhân dân là lực lượng sản xuất cơ bản, quyết định sự tồn tại và phát triển xã hội."
  },
  {
    "type": "singlechoice",
    "content": "62. Ai là người đã đưa ra định nghĩa về giai cấp sau đây: ...",
    "answers": [
      { "content": "Heraclit", "correct": false },
      { "content": "Khổng Tử", "correct": false },
      { "content": "V.ILênin", "correct": true },
      { "content": "Chủ tịch Hồ Chí Minh", "correct": false }
    ],
    "explanation": "Khái niệm khoa học về giai cấp được Lênin đưa ra, làm rõ quan hệ với tư liệu sản xuất và sự chiếm đoạt lao động."
  },
  {
    "type": "singlechoice",
    "content": "63. Trong các yếu tố sau, yếu tố nào thuộc về kiến trúc thượng tầng?",
    "answers": [
      { "content": "Cơ sở kinh tế", "correct": false },
      { "content": "Cơ sở vật chất kỹ thuật", "correct": false },
      { "content": "Công nghệ thông tin", "correct": false },
      { "content": "Các học thuyết, tư tưởng", "correct": true }
    ],
    "explanation": "Kiến trúc thượng tầng bao gồm chính trị, pháp luật, tôn giáo, tư tưởng, học thuyết… phản ánh cơ sở hạ tầng."
  },
  {
    "type": "singlechoice",
    "content": "64. Sản xuất vật chất có vai trò gì đối với xã hội?",
    "answers": [
      { "content": "Quyết định sự tồn tại và phát triển xã hội", "correct": true },
      { "content": "Quyết định sự vận động của xã hội", "correct": false },
      { "content": "Quyết định tính chất và nội dung của xã hội", "correct": false }
    ],
    "explanation": "Sản xuất vật chất là cơ sở tồn tại của xã hội, quyết định sự phát triển của lịch sử và mọi hình thái xã hội."
  },
  {
    "type": "singlechoice",
    "content": "65. Phủ định biện chứng có đặc trưng cơ bản nào?",
    "answers": [
      { "content": "Tính khách quan và tính mâu thuẫn", "correct": false },
      { "content": "Tính mâu thuẫn và tính kế thừa", "correct": false },
      { "content": "Tất cả các đáp án đều sai", "correct": false },
      { "content": "Tính khách quan và tính kế thừa", "correct": true }
    ],
    "explanation": "Phủ định biện chứng diễn ra khách quan và có tính kế thừa, giữ lại yếu tố tích cực của cái cũ."
  },
  {
    "type": "singlechoice",
    "content": "66. Sự phản ánh có tính chủ động lựa chọn thông tin, xử lý thông tin là hình thức phản ánh:",
    "answers": [
      { "content": "Tâm lý", "correct": false },
      { "content": "Năng động, sáng tạo", "correct": true },
      { "content": "Tiên tiến", "correct": false },
      { "content": "Không thụ động", "correct": false }
    ],
    "explanation": "Phản ánh năng động sáng tạo là khả năng chủ động chọn lọc và xử lý thông tin, tạo ra tri thức mới."
  },
  {
    "type": "singlechoice",
    "content": "67. Theo quan niệm của chủ nghĩa duy vật biện chứng về lịch sử thì trong xã hội có giai cấp, hệ tư tưởng thống trị xã hội bao giờ cũng là hệ tư tưởng của giai cấp.",
    "answers": [
      { "content": "Tiên tiến nhất", "correct": false },
      { "content": "Lãnh đạo xã hội", "correct": false },
      { "content": "Thống trị xã hội", "correct": true },
      { "content": "Đứng đầu xã hội", "correct": false }
    ],
    "explanation": "Ý thức hệ thống trị trong xã hội có giai cấp luôn thuộc về giai cấp thống trị, phản ánh lợi ích của họ."
  },
  {
    "type": "singlechoice",
    "content": "68. Thế nào là phương pháp siêu hình?",
    "answers": [
      { "content": "Xem xét sự vật trong mối liên hệ nhưng không vận động", "correct": false },
      { "content": "Xem xét sự vật trong trạng thái cô lập, tách rời, không vận động", "correct": true },
      { "content": "Xem xét sự vật trong mối liên hệ và luôn phát triển", "correct": false },
      { "content": "Xem xét sự vật tách rời nhưng vẫn vận động", "correct": false }
    ],
    "explanation": "Phương pháp siêu hình coi sự vật tách rời, bất biến, trái ngược với phép biện chứng duy vật."
  },
  {
    "type": "singlechoice",
    "content": "69. Ở xã hội Việt Nam hiện nay",
    "answers": [
      { "content": "Còn đấu tranh giai cấp", "correct": true },
      { "content": "Không còn đấu tranh giai cấp", "correct": false },
      { "content": "Các phương án trả lời đều sai", "correct": false },
      { "content": "Đấu tranh giai cấp gay gắt", "correct": false }
    ],
    "explanation": "Đấu tranh giai cấp ở Việt Nam vẫn tồn tại, nhưng chủ yếu trên mặt trận chống tiêu cực và thế lực thù địch."
  },
  {
    "type": "singlechoice",
    "content": "70. Trong chủ nghĩa Mác - Lênin thì",
    "answers": [
      { "content": "Triết học là cơ sở nền tảng của kinh tế chính trị và chủ nghĩa xã hội khoa học", "correct": true },
      { "content": "Kinh tế chính trị học là cơ sở nền tảng của triết học và chủ nghĩa xã hội khoa học", "correct": false },
      { "content": "Chủ nghĩa xã hội khoa học là cơ sở của kinh tế chính trị và triết học", "correct": false }
    ],
    "explanation": "Triết học Mác-Lênin là thế giới quan và phương pháp luận nền tảng cho kinh tế chính trị và CNXH khoa học."
  },
  {
    "type": "singlechoice",
    "content": "71. Theo chủ nghĩa duy vật lịch sử, các chính sách và pháp luật của nhà nước suy đến cùng chỉ là phản ánh nhu cầu thống trị về kinh tế của giai cấp nắm giữ yếu tố nào của xã hội?",
    "answers": [
      { "content": "Lực lượng sản xuất chủ yếu của xã hội", "correct": true },
      { "content": "Quyền tổ chức-quản lý xã hội", "correct": false },
      { "content": "Nhà nước", "correct": false },
      { "content": "Quyền sở hữu các tư liệu sản xuất chủ yếu", "correct": false }
    ],
    "explanation": "Nhà nước và pháp luật phản ánh lợi ích kinh tế của giai cấp nắm giữ tư liệu sản xuất chủ yếu."
  },
  {
    "type": "singlechoice",
    "content": "72. Cơ sở, động lực, mục đích của nhận thức là",
    "answers": [
      { "content": "Lý luận", "correct": false },
      { "content": "Thực tiễn", "correct": true },
      { "content": "Triết học", "correct": false }
    ],
    "explanation": "Thực tiễn vừa là cơ sở phát sinh, vừa là động lực thúc đẩy, đồng thời là mục đích và tiêu chuẩn kiểm nghiệm nhận thức."
  },
  {
    "type": "singlechoice",
    "content": "73. Định nghĩa phạm trù vật chất phụ thuộc chủ yếu vào",
    "answers": [
      { "content": "Sự phát triển khoa học kỹ thuật", "correct": true },
      { "content": "Sự phát triển của logic hình thức", "correct": false },
      { "content": "Sự phát triển của logic biện chứng", "correct": false },
      { "content": "Tất cả các đáp án đều đúng", "correct": false }
    ],
    "explanation": "Định nghĩa vật chất được Mác-Lênin phát triển dựa trên cơ sở thành tựu khoa học tự nhiên, đặc biệt vật lý."
  },
  {
    "type": "singlechoice",
    "content": "74. Theo quan điểm của triết học Mác - Lênin, mối quan hệ giữa tồn tại xã hội và ý thức xã hội thể hiện như thế nào?",
    "answers": [
      { "content": "Ý thức xã hội quyết định tồn tại xã hội", "correct": false },
      { "content": "Tồn tại xã hội quyết định ý thức xã hội; ý thức xã hội có tính độc lập tương đối, tác động trở lại tồn tại xã hội", "correct": true },
      { "content": "Tồn tại xã hội và ý thức xã hội tồn tại độc lập", "correct": false },
      { "content": "Tồn tại xã hội quyết định tồn tại xã hội, ý thức xã hội quyết định ý thức xã hội", "correct": false }
    ],
    "explanation": "Tồn tại xã hội giữ vai trò quyết định, còn ý thức xã hội có tính độc lập tương đối và tác động ngược lại."
  },
  {
    "type": "singlechoice",
    "content": "75. Theo chủ nghĩa duy vật lịch sử, quan hệ sản xuất có thể tác động tới lực lượng sản xuất theo hướng.",
    "answers": [
      { "content": "Thúc đẩy hoặc kìm hãm sự phát triển", "correct": true },
      { "content": "Thúc đẩy", "correct": false },
      { "content": "Hỗ trợ", "correct": false },
      { "content": "Tạo điều kiện", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất phù hợp thúc đẩy lực lượng sản xuất; không phù hợp sẽ kìm hãm."
  },
  {
    "type": "singlechoice",
    "content": "76. Một sinh viên định nghĩa bệnh chủ quan duy ý chí bằng các biểu hiện đặc trưng sau đây. Hãy chỉ ra một biểu hiện không thuộc chủ quan duy ý chí.",
    "answers": [
      { "content": "Quy luật thống nhất và đấu tranh của các mặt đối lập", "correct": false },
      { "content": "Quy luật về chuyển hóa lượng thành chất và ngược lại", "correct": false },
      { "content": "Quy luật phủ định của phủ định", "correct": true },
      { "content": "Quy luật về sự phù hợp của QHSX và LLSX", "correct": false }
    ],
    "explanation": "Bệnh chủ quan duy ý chí phủ nhận khách quan. Quy luật phủ định của phủ định là quy luật phát triển, không phải biểu hiện bệnh này."
  },
  {
    "type": "singlechoice",
    "content": "77. Triết học ra đời từ đâu?",
    "answers": [
      { "content": "Từ thực tiễn, do nhu cầu của thực tiễn", "correct": true },
      { "content": "Từ sự tư duy của con người về bản thân mình", "correct": false },
      { "content": "Từ sự vận động của ý muốn chủ quan của con người", "correct": false },
      { "content": "Từ thực tiễn, do sự phát triển của khoa học kỹ thuật", "correct": false }
    ],
    "explanation": "Triết học ra đời từ nhu cầu thực tiễn xã hội và sự phát triển nhận thức, không chỉ từ tư duy thuần túy."
  },
  {
    "type": "singlechoice",
    "content": "78. Đứng im được hiểu là",
    "answers": [
      { "content": "Tuyệt đối", "correct": false },
      { "content": "Tương đối", "correct": true },
      { "content": "Vừa tuyệt đối vừa tương đối", "correct": false },
      { "content": "Không có đáp án đúng", "correct": false }
    ],
    "explanation": "Trong biện chứng, đứng im chỉ mang tính tương đối, trong một phạm vi cụ thể coi như không biến đổi."
  },
  {
    "type": "singlechoice",
    "content": "79. Sự ra đời và tồn tại của nhà nước",
    "answers": [
      { "content": "Là hiện tượng mang tính khách quan, bị quyết định bởi quá trình phát triển của xã hội", "correct": true },
      { "content": "Là hiện tượng mang tính chủ quan, phụ thuộc vào nguyện vọng của giai cấp cầm quyền", "correct": false },
      { "content": "Là hiện tượng mang tính chủ quan phụ thuộc vào nguyện vọng của mỗi quốc gia, mỗi dân tộc", "correct": false }
    ],
    "explanation": "Nhà nước xuất hiện do mâu thuẫn giai cấp không thể điều hòa, là hiện tượng khách quan gắn với phát triển xã hội."
  },
  {
    "type": "singlechoice",
    "content": "80. Theo quan điểm của phép biện chứng duy vật thì trong những điều kiện xác định cái đơn nhất và cái gì có thể chuyển hóa lẫn nhau?",
    "answers": [
      { "content": "Chính trị", "correct": true },
      { "content": "Võ trang", "correct": false },
      { "content": "Kinh tế", "correct": false },
      { "content": "Giải phóng", "correct": false }
    ],
    "explanation": "Trong phép biện chứng duy vật, cái đơn nhất và cái phổ biến có thể chuyển hóa cho nhau trong điều kiện nhất định."
  },
  {
  "type": "singlechoice",
  "content": "Câu 81. Theo quan điểm của phép biện chứng duy vật thì trong những điều kiện xác định cái đơn nhất và cái gì có thể chuyển hóa lẫn nhau?",
  "answers": [
    { "content": "Cái đặc thù", "correct": false },
    { "content": "Cái cái riêng", "correct": false },
    { "content": "Cái chung", "correct": true },
    { "content": "Quy luật", "correct": false }
  ],
  "explanation": "Trong điều kiện cụ thể, cái đơn nhất và cái chung có thể chuyển hóa lẫn nhau, phản ánh tính biện chứng của sự vật."
},
{
  "type": "singlechoice",
  "content": "Câu 82. Quan điểm tiến bộ và cách mạng nhất của chủ nghĩa Mác-Lênin về vấn đề con người là:",
  "answers": [
    { "content": "Giải thích được nguồn gốc tự nhiên và xã hội của con người dưới ánh sáng khoa học", "correct": true },
    { "content": "Mô tả được quá trình hoạt động sống và lao động sản xuất của con người theo tinh thần của chủ nghĩa duy vật", "correct": false },
    { "content": "Đưa ra được học thuyết cách mạng và triệt để về đấu tranh giải phóng con người", "correct": false },
    { "content": "Giải thích được một cách khoa học nguồn gốc của ý thức của con người", "correct": false }
  ],
  "explanation": "Chủ nghĩa Mác-Lênin khẳng định con người là sản phẩm của cả tự nhiên và xã hội, được giải thích khoa học."
},
{
  "type": "singlechoice",
  "content": "Câu 83. Theo quan điểm của chủ nghĩa duy vật biện chứng thì thông qua vận động mà các dạng cụ thể của vật chất:",
  "answers": [
    { "content": "Tạo ra ý thức", "correct": false },
    { "content": "Không tồn tại", "correct": false },
    { "content": "Mất dẫn đi", "correct": false },
    { "content": "Biểu hiện", "correct": true }
  ],
  "explanation": "Vận động là phương thức tồn tại của vật chất, nhờ đó mà các dạng vật chất cụ thể biểu hiện ra."
},
{
  "type": "singlechoice",
  "content": "Câu 84. Bản chất của nhà nước là",
  "answers": [
    { "content": "Cơ quan phúc lợi chung của toàn xã hội", "correct": false },
    { "content": "Cơ quan trọng tài thực hiện chức năng phân xử và hòa giải các xung đột xã hội", "correct": false },
    { "content": "Công cụ của giai cấp thống trị xã hội", "correct": true }
  ],
  "explanation": "Nhà nước ra đời từ mâu thuẫn giai cấp và mang bản chất là công cụ thống trị của giai cấp cầm quyền."
},
{
  "type": "singlechoice",
  "content": "Câu 85. Khi chất mới của sự vật ra đời có thể làm thay đổi những gì của sự vận động và phát triển của sự vật?",
  "answers": [
    { "content": "Bản chất, hình thức", "correct": false },
    { "content": "Kết cấu, quy mô", "correct": true },
    { "content": "Hình thức kết cấu", "correct": false },
    { "content": "Hình thức vận động", "correct": false }
  ],
  "explanation": "Chất mới làm thay đổi kết cấu và quy mô của sự vật, tạo bước phát triển mới."
},
{
  "type": "singlechoice",
  "content": "Câu 86. Hình thức nhận thức nào sau đây không cần có sự tác động của vật vào cơ quan giác quan của con người?",
  "answers": [
    { "content": "Cảm giác", "correct": false },
    { "content": "Tri giác", "correct": false },
    { "content": "Biểu tượng", "correct": false },
    { "content": "Khái niệm", "correct": true }
  ],
  "explanation": "Khái niệm hình thành nhờ tư duy trừu tượng, không cần sự tác động trực tiếp vào giác quan."
},
{
  "type": "singlechoice",
  "content": "Câu 87. Chất và lượng có mối quan hệ với nhau như thế nào?",
  "answers": [
    { "content": "Không có mối quan hệ gì với nhau", "correct": false },
    { "content": "Chỉ có mối quan hệ giữa chất với lượng", "correct": false },
    { "content": "Chỉ có mỗi quan hệ giữa lượng với chất", "correct": false },
    { "content": "Có mối quan hệ biện chứng với nhau", "correct": true }
  ],
  "explanation": "Chất và lượng tác động qua lại, sự thay đổi về lượng đến một mức nhất định sẽ dẫn tới sự thay đổi về chất."
},
{
  "type": "singlechoice",
  "content": "Câu 88. Theo quan điểm của chủ nghĩa duy vật lịch sử, trong xã hội khi xuất hiện mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất thì",
  "answers": [
    { "content": "Quan hệ sản xuất sẽ tự động thay đổi cho phù hợp với lực lượng sản xuất", "correct": false },
    { "content": "Quan hệ sản xuất không thể thay đổi được vì nó được bảo vệ bằng quyền lực nhà nước", "correct": false },
    { "content": "Lực lượng sản xuất phải tự điều chỉnh cho phù hợp với quan hệ sản xuất", "correct": false },
    { "content": "Quan hệ sản xuất được thay đổi thông qua những cuộc cải cách và các cuộc cách mạng xã hội", "correct": true }
  ],
  "explanation": "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất chỉ được giải quyết bằng cải cách hoặc cách mạng xã hội."
},
{
  "type": "singlechoice",
  "content": "Câu 89. Lực lượng sản xuất được hiểu là khái niệm dùng để chỉ",
  "answers": [
    { "content": "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất", "correct": true },
    { "content": "Quan hệ giữa người với xã hội trong quá trình sản xuất", "correct": false },
    { "content": "Quan hệ giữa người sản xuất trong quá trình sản xuất", "correct": false },
    { "content": "Quan hệ giữa những người lao động trong quá trình tác động vào giới tự nhiên", "correct": false }
  ],
  "explanation": "Lực lượng sản xuất thể hiện mối quan hệ giữa con người và tự nhiên thông qua hoạt động sản xuất."
},
{
  "type": "singlechoice",
  "content": "Câu 90. Kiến trúc thượng tầng là gì?",
  "answers": [
    { "content": "Các quan hệ sản xuất hiện có trong xã hội", "correct": false },
    { "content": "Hệ tư tưởng của giai cấp thống trị", "correct": false },
    { "content": "Cơ sở kinh tế của xã hội", "correct": false },
    { "content": "Những quan điểm, tư tưởng và các thiết chế của xã hội tương ứng được hình thành trên cơ sở hạ tầng", "correct": true }
  ],
  "explanation": "Kiến trúc thượng tầng bao gồm tư tưởng, thiết chế xã hội, hình thành trên cơ sở hạ tầng kinh tế."
},
{
  "type": "singlechoice",
  "content": "Câu 91. Điền vào dấu (...): \"Quan điểm nhất quán từ xưa đến nay của các nhà triết học duy vật là thừa nhận sự tồn tại .... lấy bản thân giới tự nhiên để giải thích tự nhiên\".",
  "answers": [
    { "content": "Chủ quan của thế giới vật chất", "correct": false },
    { "content": "Song song với thế giới vật chất", "correct": false },
    { "content": "Khách quan của thế giới vật chất", "correct": true },
    { "content": "Có tính trật tự, nguyên tắc của thế giới vật chất", "correct": false }
  ],
  "explanation": "Các nhà duy vật khẳng định sự tồn tại khách quan của thế giới vật chất, độc lập với ý thức."
},
{
  "type": "singlechoice",
  "content": "Câu 92. Chủ nghĩa Mác-Lênin gồm ba bộ phận cấu thành đó là:",
  "answers": [
    { "content": "Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học", "correct": true },
    { "content": "Triết học, Kinh tế chính trị học và Chính trị học", "correct": false },
    { "content": "Triết học, Kinh tế học và Chủ nghĩa xã hội khoa học", "correct": false }
  ],
  "explanation": "Ba bộ phận cấu thành chủ nghĩa Mác-Lênin là: Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học."
},
{
  "type": "singlechoice",
  "content": "Câu 94. Theo quan điểm duy vật lịch sử, quan hệ cơ bản nhất, quyết định mọi mối quan hệ xã hội là",
  "answers": [
    { "content": "Quan hệ quyền lực nhà nước", "correct": false },
    { "content": "Quan hệ văn hóa", "correct": false },
    { "content": "Quan hệ kinh tế", "correct": true },
    { "content": "Quan hệ tôn giáo", "correct": false }
  ],
  "explanation": "Trong xã hội, quan hệ kinh tế giữ vai trò cơ bản, quyết định mọi quan hệ xã hội khác."
},
{
  "type": "singlechoice",
  "content": "Câu 95. Theo quan điểm triết học Mácxít, khẳng định nào sau đây sai?",
  "answers": [
    { "content": "Thế giới là một chỉnh thể trong sự liên hệ, ràng buộc lẫn nhau", "correct": false },
    { "content": "Con người không thể tách khỏi các mối quan hệ với tự nhiên", "correct": false },
    { "content": "Giữa các loài luôn có những khâu trung gian nối chúng với nhau", "correct": false },
    { "content": "Thế giới tinh thần và thế giới vật chất tồn tại độc lập nhau", "correct": true }
  ],
  "explanation": "Triết học Mác khẳng định vật chất và ý thức có mối quan hệ biện chứng, không tồn tại tách rời độc lập."
},
{
  "type": "singlechoice",
  "content": "Câu 96. Quan hệ biện chứng giữa \"cái riêng\" và \"cái chung\" thì cái chung tồn tại:",
  "answers": [
    { "content": "Ngoài cái riêng.", "correct": false },
    { "content": "Cùng cái riêng.", "correct": false },
    { "content": "Trong cái riêng.", "correct": true },
    { "content": "Bên cái riêng.", "correct": false }
  ],
  "explanation": "Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng mà biểu hiện ra."
},
{
  "type": "singlechoice",
  "content": "Câu 97. \"Cân bằng động\" trong sự phù hợp giữa lực lượng sản xuất và quan hệ sản xuất là gì?",
  "answers": [
    { "content": "Lực lượng sản xuất và quan hệ sản xuất phù hợp trong suốt quá trình phát triển của con người", "correct": false },
    { "content": "Lực lượng sản xuất thay đổi, quan hệ sản xuất không cần thay đổi", "correct": false },
    { "content": "Sự phù hợp cụ thể nào đó giữa quan hệ sản xuất và lực lượng sản xuất luôn bị phá vỡ để thay bằng một sự phù hợp khác cao hơn", "correct": true },
    { "content": "Khi lực lượng sản xuất đã đến lúc cần thay đổi thì nhất định là quan hệ sản xuất cũng sẽ", "correct": false },
    { "content": "Lực lượng sản xuất không cần thay đổi, quan hệ sản xuất thay đổi", "correct": false }
  ],
  "explanation": "Cân bằng động nghĩa là sự phù hợp giữa quan hệ sản xuất và lực lượng sản xuất luôn thay đổi theo trình độ phát triển."
},
{
  "type": "singlechoice",
  "content": "Câu 98. Triết học duy tâm khách quan và duy tâm chủ quan đều có điểm chung là",
  "answers": [
    { "content": "Đề cao lĩnh vực tinh thần của con người", "correct": true },
    { "content": "Đề cao lĩnh vực vật chất và tinh thần của con người", "correct": false },
    { "content": "Đề cao đời sống tâm linh của con người", "correct": false }
  ],
  "explanation": "Duy tâm khách quan và duy tâm chủ quan đều lấy tinh thần làm yếu tố quyết định, đối lập với duy vật."
},
{
  "type": "singlechoice",
  "content": "Câu 100. Nhân tố đảm bảo cho sự thắng lợi cuối cùng của một chế độ xã hội là",
  "answers": [
    { "content": "Có nền khoa học tiên tiến", "correct": false },
    { "content": "Có nhân tố chính trị tiến bộ", "correct": false },
    { "content": "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc", "correct": false },
    { "content": "Có thể tạo ra năng suất lao động cao hơn", "correct": true }
  ],
  "explanation": "Năng suất lao động cao hơn là nhân tố quyết định sự thắng lợi cuối cùng của một chế độ xã hội."
},
  {
    "type": "singlechoice",
    "content": "Câu 101. Trong thực tế chúng ta phải dựa vào",
    "answers": [
      { "content": "Hiện thực và dự đoán các khả năng", "correct": false },
      { "content": "Cả khả năng và hiện thực", "correct": false },
      { "content": "Hiện thực vì khả năng là cái chưa tồn tại", "correct": true },
      { "content": "Khả năng vì khả năng có thể chứa hiện thực", "correct": false }
    ],
    "explanation": "Trong hoạt động thực tiễn, con người phải dựa vào hiện thực vì khả năng chỉ là cái chưa có thật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 102. Thế giới quan được hiểu là gì?",
    "answers": [
      { "content": "Quan niệm của con người về thế giới", "correct": false },
      { "content": "Hệ thống quan niệm của con người về thế giới", "correct": false },
      { "content": "Hệ thống quan niệm, quan điểm lý luận của con người về thế giới", "correct": false },
      { "content": "Hệ thống quan niệm, quan điểm chung nhất của con người về thế giới", "correct": true }
    ],
    "explanation": "Thế giới quan là toàn bộ hệ thống quan niệm, quan điểm chung nhất của con người về thế giới."
  },
  {
    "type": "singlechoice",
    "content": "Câu 103. Chủ nghĩa duy vật lịch sử cho rằng giai cấp nắm được yếu tố nào thì cũng chiếm được địa vị chính trị, có khả năng khách quan thành giai cấp thống trị xã hội?",
    "answers": [
      { "content": "Tư liệu sản xuất chủ yếu", "correct": true },
      { "content": "Quan hệ sản xuất thống trị", "correct": false },
      { "content": "Lực lượng sản xuất", "correct": false },
      { "content": "Lực lượng sản xuất mới", "correct": false }
    ],
    "explanation": "Theo chủ nghĩa duy vật lịch sử, giai cấp nào chiếm hữu tư liệu sản xuất chủ yếu thì nắm được địa vị thống trị."
  },
  {
    "type": "singlechoice",
    "content": "Câu 104. Trong xã hội có giai cấp, tính chất kế thừa của ý thức xã hội có gắn với tính chất của giai cấp",
    "answers": [
      { "content": "Tùy trường hợp cụ thể", "correct": false },
      { "content": "Không kế thừa", "correct": false },
      { "content": "Có kế thừa", "correct": true }
    ],
    "explanation": "Ý thức xã hội trong xã hội có giai cấp luôn kế thừa, nhưng mang tính chất giai cấp nhất định."
  },
  {
    "type": "singlechoice",
    "content": "Câu 105. Trong chủ nghĩa Mác - Lênin thì",
    "answers": [
      { "content": "Triết học là cơ sở nền tảng của kinh tế chính trị và chủ nghĩa xã hội khoa học", "correct": true },
      { "content": "Kinh tế chính trị học là cơ sở nền tảng của triết học và chủ nghĩa xã hội khoa học", "correct": false },
      { "content": "Chủ nghĩa xã hội khoa học là cơ sở của kinh tế chính trị và triết học", "correct": false }
    ],
    "explanation": "Trong chủ nghĩa Mác - Lênin, triết học là cơ sở lý luận nền tảng cho kinh tế chính trị và CNXH khoa học."
  },
  {
    "type": "singlechoice",
    "content": "Câu 106. Theo chủ nghĩa duy vật lịch sử, khái niệm \"cách mạng xã hội\" dùng để chỉ",
    "answers": [
      { "content": "Sự tiến bộ, tiền hóa mọi lĩnh vực trong một xã hội nhất định", "correct": false },
      { "content": "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác", "correct": false },
      { "content": "Sự thay thế thể chế kinh tế này bằng một thể chế kinh tế khác", "correct": false },
      { "content": "Sự thay thế hình thái kinh tế - xã hội này bằng hình thái kinh tế - xã hội khác cao hơn", "correct": true }
    ],
    "explanation": "Cách mạng xã hội là sự thay thế hình thái kinh tế - xã hội cũ bằng hình thái kinh tế - xã hội cao hơn."
  },
  {
    "type": "singlechoice",
    "content": "Câu 107. Không phải mọi sự thay đổi về lượng đều",
    "answers": [
      { "content": "Có khả năng dẫn đến thay đổi về chất", "correct": true },
      { "content": "Ngay lập tức thay đổi về chất", "correct": false },
      { "content": "Không thể lập tức làm thay đổi về chất", "correct": false },
      { "content": "Không làm thay đổi về chất", "correct": false }
    ],
    "explanation": "Chỉ những biến đổi lượng đạt đến điểm nút mới dẫn tới sự thay đổi về chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 108. Chọn phương án đúng để điền vào chỗ trống: \"... điểm xuất phát ... là sự khẳng định những sự vật hiện tượng của tự nhiên đều bao hàm những mâu thuẫn vốn có của chúng\"",
    "answers": [
      { "content": "Phép siêu hình", "correct": false },
      { "content": "Phép biện chứng", "correct": true },
      { "content": "Phép biện chứng duy tâm", "correct": false },
      { "content": "Chủ nghĩa duy vật", "correct": false }
    ],
    "explanation": "Phép biện chứng khẳng định mọi sự vật, hiện tượng đều chứa đựng mâu thuẫn bên trong."
  },
  {
    "type": "singlechoice",
    "content": "Câu 109. Theo Mác, con người muốn sống thì trước hết cần có thức ăn, đồ mặc v.v. Như vậy, hành vi lịch sử đầu tiên là sản xuất ra:",
    "answers": [
      { "content": "Tư liệu sinh hoạt", "correct": true },
      { "content": "Tư liệu sản xuất", "correct": false },
      { "content": "Của cải", "correct": false },
      { "content": "Tư liệu lao động", "correct": false }
    ],
    "explanation": "Mác cho rằng sản xuất ra tư liệu sinh hoạt là hành vi lịch sử đầu tiên của con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 110. Chọn phương án đúng theo quan điểm duy tâm về lịch sử. Trong mối quan hệ giữa tồn tại xã hội và ý thức xã hội.",
    "answers": [
      { "content": "Suy đến cùng, tồn tại xã hội quyết định ý thức xã hội", "correct": false },
      { "content": "Suy đến cùng, ý thức xã hội quyết định tồn tại xã hội", "correct": true },
      { "content": "Tồn tại trong mối quan hệ phụ thuộc vào nhau, không cái nào quyết định cái nào", "correct": false },
      { "content": "Tùy từng điều mà xem xét cái nào quyết định cái nào", "correct": false }
    ],
    "explanation": "Theo quan điểm duy tâm, ý thức xã hội giữ vai trò quyết định tồn tại xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 111. Hình thái ý thức xã hội nào phản ánh bản chất và tính quy luật của thế giới khách quan?",
    "answers": [
      { "content": "Ý thức chính trị", "correct": false },
      { "content": "Ý thức pháp quyền", "correct": false },
      { "content": "Ý thức khoa học", "correct": true },
      { "content": "Ý thức đạo đức", "correct": false }
    ],
    "explanation": "Ý thức khoa học phản ánh bản chất, quy luật khách quan của thế giới."
  },
  {
    "type": "singlechoice",
    "content": "Câu 112. Trong 3 đặc trưng của giai cấp thì đặc trưng nào giữ vai trò chi phối các đặc trưng khác?",
    "answers": [
      { "content": "Khác nhau về vai trò trong tổ chức lao động xã hội", "correct": false },
      { "content": "Khác nhau về địa vị trong hệ thống tổ chức xã hội", "correct": false },
      { "content": "Khác nhau về quan hệ sở hữu tư liệu sản xuất xã hội", "correct": true },
      { "content": "Tập đoàn này có thể chiếm hữu đoạt lao động của tập đoàn khác", "correct": false }
    ],
    "explanation": "Sự khác nhau về quan hệ sở hữu tư liệu sản xuất là đặc trưng chi phối các đặc trưng khác."
  },
  {
    "type": "singlechoice",
    "content": "Câu 113. Triết học Mác là thế giới quan khoa học của giai cấp nào?",
    "answers": [
      { "content": "Giai cấp tư sản tiến bộ", "correct": false },
      { "content": "Giai cấp công nhân", "correct": true },
      { "content": "Tầng lớp trí thức", "correct": false },
      { "content": "Giai cấp lao động", "correct": false }
    ],
    "explanation": "Triết học Mác là thế giới quan khoa học và phương pháp luận của giai cấp công nhân."
  },
  {
    "type": "singlechoice",
    "content": "Câu 114. Theo quan điểm của triết học Mác-Lênin, tiêu chí cơ bản để đánh giá phẩm chất của mỗi cá nhân",
    "answers": [
      { "content": "Địa vị xã hội của cá nhân", "correct": false },
      { "content": "Thái độ, hành vi đạo đức của cá nhân", "correct": false },
      { "content": "Sự thực hiện khả năng làm chủ đối với hoàn cảnh và hành động thực tiễn của cá nhân", "correct": false },
      { "content": "Tất cả đều đúng", "correct": true }
    ],
    "explanation": "Phẩm chất cá nhân được đánh giá toàn diện qua địa vị, đạo đức và năng lực thực tiễn."
  },
  {
    "type": "singlechoice",
    "content": "Câu 115. Đâu là nguồn gốc lý luận của chủ nghĩa Mác?",
    "answers": [
      { "content": "Tư tưởng xã hội phương Đông cổ đại", "correct": false },
      { "content": "Triết học cổ điển Đức, kinh tế chính trị cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp", "correct": true },
      { "content": "Chủ nghĩa duy vật siêu hình thế kỷ XVII - XVIII ở Tây Âu", "correct": false },
      { "content": "Học thuyết tiến hoá", "correct": false }
    ],
    "explanation": "Nguồn gốc lý luận của chủ nghĩa Mác là triết học Đức, kinh tế chính trị Anh và CNXH không tưởng Pháp."
  },
  {
    "type": "singlechoice",
    "content": "Câu 116. Ý thức tôn giáo là niềm tin của bộ phận nhân dân... Nguyên nhân sự tồn tại bền vững của ý thức tôn giáo là gì?",
    "answers": [
      { "content": "Nhận thức", "correct": false },
      { "content": "Trình độ", "correct": false },
      { "content": "Văn hóa", "correct": false },
      { "content": "Tâm lý", "correct": true }
    ],
    "explanation": "Ý thức tôn giáo tồn tại bền vững chủ yếu do yếu tố tâm lý con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 117. Một sinh viên chuẩn bị bài seminar trong 1 tuần... Công việc trên diễn ra theo nguyên lí, quy luật nào?",
    "answers": [
      { "content": "Quy luật mâu thuẫn", "correct": false },
      { "content": "Quy luật lượng - chất", "correct": true },
      { "content": "Quy luật phủ định của phủ định", "correct": false },
      { "content": "Nguyên lý về mối liên hệ phổ biến", "correct": false }
    ],
    "explanation": "Việc chuẩn bị dần dần và hoàn thiện phản ánh quy luật chuyển hóa từ lượng thành chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 118. Theo Mác, vấn đề tìm hiểu xem tư duy của con người có thể đạt được chân lý khách quan không, hoàn toàn không phải là vấn đề lý luận mà là vấn đề",
    "answers": [
      { "content": "Thực tế", "correct": false },
      { "content": "Hiện thực", "correct": false },
      { "content": "Thực tiễn", "correct": true },
      { "content": "Khoa học", "correct": false }
    ],
    "explanation": "Mác nhấn mạnh chân lý được kiểm nghiệm trong thực tiễn chứ không chỉ trong lý luận."
  },
  {
    "type": "singlechoice",
    "content": "Câu 119. Định nghĩa của V.I.Lênin về giai cấp là những tập đoàn người to lớn có sự phân biệt về:",
    "answers": [
      { "content": "Địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử", "correct": true },
      { "content": "Địa vị của họ trong quá trình quản lý và phân phối của cải xã hội", "correct": false },
      { "content": "Địa vị của họ trong quản lý chính trị, văn hóa và xã hội", "correct": false },
      { "content": "Địa vị của họ trong việc nắm quyền lực nhà nước", "correct": false }
    ],
    "explanation": "Lênin định nghĩa giai cấp dựa trên sự khác nhau về địa vị trong hệ thống sản xuất xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 120. Trong tư liệu lao động, bộ phận nào cần được phát triển đi trước một bước so với đầu tư sản xuất trực tiếp?",
    "answers": [
      { "content": "Kết cấu hạ tầng sản xuất", "correct": true },
      { "content": "Công cụ sản xuất", "correct": false },
      { "content": "Các bộ phận chứa đựng, bảo quản", "correct": false },
      { "content": "Các phương án trả lời đều đúng", "correct": false }
    ],
    "explanation": "Trong tư liệu lao động, kết cấu hạ tầng cần phát triển trước để bảo đảm sản xuất trực tiếp."
  },
{
    "type": "singlechoice",
    "content": "Câu 121: Theo quan điểm của phép biện chứng duy vật thì phạm trù chỉ một sự vật, một hiện tượng, một quá trình nhất định là",
    "answers": [
      { "content": "Đặc thù", "correct": false },
      { "content": "Bản chất", "correct": false },
      { "content": "Cái riêng", "correct": true },
      { "content": "Hiện tượng", "correct": false }
    ],
    "explanation": "Trong phép biện chứng duy vật, 'cái riêng' chỉ sự vật, hiện tượng cụ thể, đơn nhất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 122: Theo Ph. Ăngghen, tính thống nhất của vật chất được chứng minh bởi:",
    "answers": [
      { "content": "Thực tiễn lịch sử", "correct": false },
      { "content": "Thực tiễn cách mạng", "correct": false },
      { "content": "Sự phát triển lâu dài của khoa học", "correct": false },
      { "content": "Sự phát triển lâu dài và khó khăn của triết học và khoa học tự nhiên", "correct": true }
    ],
    "explanation": "Ăngghen khẳng định tính thống nhất của vật chất được chứng minh qua lịch sử triết học và khoa học."
  },
  {
    "type": "singlechoice",
    "content": "Câu 123: Theo V.I. Lênin \"Chủ nghĩa Mác đã mở đường cho việc nghiên cứu rộng rãi và toàn diện quá trình phát sinh, phát triển và suy tàn của\"",
    "answers": [
      { "content": "..\"", "correct": false },
      { "content": "Hệ thống vật chất trong giới tự nhiên", "correct": false },
      { "content": "Các quá trình kinh tế và chính trị - xã hội", "correct": false },
      { "content": "Các sự vật, hiện tượng trong thế giới tự nhiên, xã hội và tư duy", "correct": false },
      { "content": "Các hình thái kinh tế - xã hội", "correct": true }
    ],
    "explanation": "Lênin nhấn mạnh chủ nghĩa Mác mở đường nghiên cứu toàn diện về sự vận động của các hình thái kinh tế - xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 124: Theo quan niệm duy vật biện chứng về lịch sử thì do khác nhau và đối lập nhau về yếu tố nào tạo ra khả năng khách quan dẫn đến tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác?",
    "answers": [
      { "content": "Quyền lực", "correct": false },
      { "content": "Sở hữu", "correct": true },
      { "content": "Địa vị", "correct": false },
      { "content": "Tài sản", "correct": false }
    ],
    "explanation": "Sự khác nhau và đối lập về quan hệ sở hữu dẫn đến khả năng chiếm đoạt lao động."
  },
  {
    "type": "singlechoice",
    "content": "Câu 125: Theo quan điểm của phép biện chứng duy vật thì chất là sự thống nhất hữu cơ của các thuộc tính cấu thành nó và là phạm trù dùng để chỉ tính quy định gì của sự vật, hiện tượng?",
    "answers": [
      { "content": "Có tổ chức", "correct": false },
      { "content": "Khách quan vốn có", "correct": true },
      { "content": "Về kết cấu", "correct": false },
      { "content": "Về kết quả", "correct": false }
    ],
    "explanation": "Chất biểu thị tính quy định khách quan vốn có của sự vật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 126: Giá trị của triết học duy tâm là",
    "answers": [
      { "content": "Đề cao lĩnh vực tinh thần của con người", "correct": true },
      { "content": "Đánh giá đúng lĩnh vực tinh thần của con người", "correct": false },
      { "content": "Đề cao tư duy của con người", "correct": false }
    ],
    "explanation": "Triết học duy tâm có giá trị ở việc đề cao vai trò tinh thần."
  },
  {
    "type": "singlechoice",
    "content": "Câu 127: Trong mối quan hệ giữa 'lực lượng sản xuất và quan hệ sản xuất', yếu tố nào là nội dung, yếu tố nào là hình thức?",
    "answers": [
      { "content": "Lực lượng sản xuất là nội dung - quan hệ sản xuất là hình thức", "correct": true },
      { "content": "Quan hệ sản xuất là nội dung- lực lượng sản xuất là hình thức", "correct": false },
      { "content": "Lực lượng sản xuất và quan hệ sản xuất đều là nội dung", "correct": false },
      { "content": "Lực lượng sản xuất và quan hệ sản xuất đều là hình thức", "correct": false }
    ],
    "explanation": "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức thể hiện."
  },
  {
    "type": "singlechoice",
    "content": "Câu 128: Trong lý luận nhận thức, cần nhìn nhận sự vật trong trạng thái vận động và phát triển. Điều đó dựa trên cơ sở lý luận của nguyên lý nào?",
    "answers": [
      { "content": "Nguyên lý về mối liên hệ phổ biến", "correct": false },
      { "content": "Nguyên lý về sự phát triển", "correct": true },
      { "content": "Nguyên lý về tính thống nhất vật chất của thế giới", "correct": false }
    ],
    "explanation": "Nguyên lý về sự phát triển giải thích sự vận động và biến đổi của sự vật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 129: Tiêu chí nào là quan trọng nhất để phân biệt các hình thái kinh tế xã hội",
    "answers": [
      { "content": "Lực lượng sản xuất", "correct": false },
      { "content": "Quan hệ sản xuất", "correct": true },
      { "content": "Tồn tại xã hội", "correct": false },
      { "content": "Kiến trúc thượng tầng", "correct": false }
    ],
    "explanation": "Quan hệ sản xuất là tiêu chí quan trọng nhất phân biệt các hình thái kinh tế - xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 130: Nguyên tắc thống nhất giữa lý luận và thực tiễn là nguyên tắc được rút ra (trực tiếp) từ mối quan hệ nào?",
    "answers": [
      { "content": "Mối quan hệ giữa vật chất và ý thức", "correct": true },
      { "content": "Lý luận và nhận thức", "correct": false },
      { "content": "Quan hệ giữa khả năng và hiện thực", "correct": false },
      { "content": "Phán đoán suy luận", "correct": false }
    ],
    "explanation": "Nguyên tắc thống nhất giữa lý luận và thực tiễn bắt nguồn từ mối quan hệ giữa vật chất và ý thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 131: Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra nguồn gốc của sự phát triển cơ bản phổ biến của sự vận động và phát triển",
    "answers": [
      { "content": "Quy luật thống nhất và đấu tranh của các mặt đối lập", "correct": true },
      { "content": "Quy luật về chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại", "correct": false },
      { "content": "Quy luật phủ định của phủ định", "correct": false },
      { "content": "Quy luật về sự phù hợp của QHSX và trình độ LLSX", "correct": false }
    ],
    "explanation": "Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ ra nguồn gốc của sự phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 132: Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra cách thức / hình thức của sự phát triển cơ bản phổ biến của sự vận động và phát triển",
    "answers": [
      { "content": "Quy luật thống nhất và đấu tranh của các mặt đối lập", "correct": false },
      { "content": "Quy luật về chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại (Quy luật lượng - chất)", "correct": true },
      { "content": "Quy luật phủ định của phủ định", "correct": false },
      { "content": "Quy luật về sự phù hợp của QHSX và trình độ LLSX", "correct": false }
    ],
    "explanation": "Quy luật lượng - chất chỉ ra cách thức của sự phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 133: Triết học của các nhà tư tưởng thời kỳ Phục Hưng có đặc điểm gì?",
    "answers": [
      { "content": "Có tính chất duy vật tự phát", "correct": false },
      { "content": "Có tính chất duy tâm khách quan", "correct": false },
      { "content": "Còn pha trộn giữa các yếu tố duy vật và duy tâm", "correct": true },
      { "content": "Còn pha trộn giữa các yếu tố duy tâm thần bí và siêu hình", "correct": false }
    ],
    "explanation": "Triết học thời Phục Hưng pha trộn giữa duy vật và duy tâm."
  },
  {
    "type": "singlechoice",
    "content": "Câu 134: Một trong các nội dung định nghĩa của Lênin về vật chất đó là, vật chất được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại.",
    "answers": [
      { "content": "Lệ thuộc vào cảm giác", "correct": false },
      { "content": "Không lệ thuộc vào cảm giác", "correct": true },
      { "content": "Tuỳ thuộc vào nhận thức", "correct": false },
      { "content": "Tuỳ theo ý thức", "correct": false }
    ],
    "explanation": "Vật chất tồn tại khách quan, không lệ thuộc vào cảm giác."
  },
  {
    "type": "singlechoice",
    "content": "Câu 135: Theo Lênin, vật chất dưới hình thức thế nào thì là cái có thể gây nên cảm giác của con người khi nó trực tiếp hay gián tiếp tác động đến giác quan của con người?",
    "answers": [
      { "content": "Những dạng cụ thể", "correct": true },
      { "content": "Tồn tại khách quan", "correct": false },
      { "content": "Khái quát của nó", "correct": false },
      { "content": "Tự nhiên của nó", "correct": false }
    ],
    "explanation": "Vật chất gây cảm giác cho con người dưới dạng tồn tại cụ thể."
  },
  {
    "type": "singlechoice",
    "content": "Câu 136: Chủ nghĩa duy vật lịch sử cho rằng, cuộc đấu tranh giữa những người lao động làm thuê, những người nô lệ bị áp bức về chính trị - xã hội và bị bóc lột về kinh tế chống lại bọn áp bức và bóc lột nó là thực chất",
    "answers": [
      { "content": "Đấu tranh giai cấp", "correct": true },
      { "content": "Ra đời giai cấp", "correct": false },
      { "content": "Cách mạng", "correct": false },
      { "content": "Ra đời nhà nước", "correct": false }
    ],
    "explanation": "Đấu tranh giai cấp là thực chất của mâu thuẫn giữa các giai cấp đối kháng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 137: Chủ nghĩa duy vật lịch sử cho rằng, tồn tại xã hội là khái niệm dùng để chỉ phương diện sinh hoạt vật chất và những điều kiện gì của xã hội?",
    "answers": [
      { "content": "Văn hoá tinh thần", "correct": false },
      { "content": "Sinh hoạt tinh thần", "correct": false },
      { "content": "Sinh hoạt vật chất", "correct": true },
      { "content": "Kinh tế", "correct": false }
    ],
    "explanation": "Tồn tại xã hội là toàn bộ sinh hoạt vật chất và điều kiện tồn tại của xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 138: Chủ nghĩa xã hội không tưởng đề cao yếu tố gì?",
    "answers": [
      { "content": "Tinh thần nhân đạo", "correct": true },
      { "content": "Xã hội đại đồng", "correct": false },
      { "content": "Sự bình đẳng", "correct": false },
      { "content": "Một xã hội không còn sự bóc lột", "correct": false }
    ],
    "explanation": "Chủ nghĩa xã hội không tưởng đề cao tinh thần nhân đạo và lòng nhân ái."
  },
  {
    "type": "singlechoice",
    "content": "Câu 139: Vị trí của quy luật phủ định của phủ định trong phép biện chứng duy vật",
    "answers": [
      { "content": "Chỉ ra cách thức của sự phát triển", "correct": false },
      { "content": "Chỉ ra nguồn gốc của sự phát triển", "correct": false },
      { "content": "Chỉ ra nguyên nhân của sự phát triển", "correct": false },
      { "content": "Chỉ ra khuynh hướng của sự phát triển", "correct": true }
    ],
    "explanation": "Quy luật phủ định của phủ định chỉ ra khuynh hướng của sự phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 140: Hệ thống những quan điểm lý luận chung nhất về thế giới và về vị trí của con người trong thế giới đó là:",
    "answers": [
      { "content": "Quan điểm biện chứng", "correct": false },
      { "content": "Chủ nghĩa duy vật", "correct": false },
      { "content": "Chủ nghĩa duy vật biện chứng", "correct": false },
      { "content": "Triết học", "correct": true }
    ],
    "explanation": "Triết học là hệ thống lý luận chung nhất về thế giới và vị trí con người trong đó."
  },
   {
    "type": "singlechoice",
    "content": "Câu 141: Quan điểm ủng hộ cái mới tiến bộ, từ đó chống lại cái cũ, cái lỗi thời kìm hãm sự phát triển là quan điểm được rút ra trực tiếp từ:",
    "answers": [
      { "content": "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại", "correct": false },
      { "content": "Quy luật thống nhất và quy luật đấu tranh của các mặt đối lập", "correct": false },
      { "content": "Quy luật phủ định của phủ định", "correct": true }
    ],
    "explanation": "Quy luật phủ định của phủ định chỉ ra khuynh hướng phát triển đi lên, cái mới phủ định cái cũ, nhưng kế thừa nhân tố tích cực."
  },
  {
    "type": "singlechoice",
    "content": "Câu 142: Học thuyết Hình thái kinh tế - xã hội là nội dung của",
    "answers": [
      { "content": "Phép biện chứng", "correct": false },
      { "content": "Tất cả các đáp án đều đúng", "correct": false },
      { "content": "Chủ nghĩa duy vật biện chứng", "correct": false },
      { "content": "Chủ nghĩa duy vật lịch sử", "correct": true }
    ],
    "explanation": "Học thuyết hình thái kinh tế - xã hội thuộc về chủ nghĩa duy vật lịch sử, phản ánh sự phát triển xã hội loài người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 143: Cách thức mà con người dùng để tiến hành quá trình sản xuất của xã hội ở những giai đoạn lịch sử nhất định gọi là:",
    "answers": [
      { "content": "Phương thức sản xuất", "correct": true },
      { "content": "Nghệ thuật sản xuất", "correct": false },
      { "content": "Kỹ thuật sản xuất", "correct": false },
      { "content": "Công nghệ sản xuất", "correct": false }
    ],
    "explanation": "Phương thức sản xuất phản ánh trình độ phát triển kinh tế - xã hội trong mỗi giai đoạn lịch sử."
  },
  {
    "type": "singlechoice",
    "content": "Câu 144: Đâu là nhận định sai về Triết học Mác?",
    "answers": [
      { "content": "Triết học Mác cho rằng triết học là khoa học của mọi khoa học", "correct": true },
      { "content": "Theo quan điểm của triết học Mác triết học không thay thế được các khoa học cụ thể", "correct": false },
      { "content": "Theo quan điểm của triết học Mác thì sự phát triển của triết học quan hệ chặt chẽ với sự phát triển của khoa học tự nhiên", "correct": false },
      { "content": "Triết học Mác là sự tổng hợp của các trường phái triết học trong lịch sử", "correct": false }
    ],
    "explanation": "Triết học Mác không coi mình là 'khoa học của mọi khoa học' mà là khoa học nghiên cứu quy luật chung nhất của tự nhiên, xã hội và tư duy."
  },
  {
    "type": "singlechoice",
    "content": "Câu 145: Từ thế kỉ VIII trước công nguyên với nhà nước đầu tiên trong lịch sử, giai cấp tư hữu đã dùng pháp luật và bộ máy thống trị của mình để chiếm mất quyền lực của đông đảo quần chúng nhân dân lao động là những",
    "answers": [
      { "content": "Nông dân", "correct": false },
      { "content": "Người tự do", "correct": false },
      { "content": "Người nô lệ", "correct": true },
      { "content": "Nông nô", "correct": false }
    ],
    "explanation": "Trong xã hội chiếm hữu nô lệ, giai cấp chủ nô dùng bộ máy nhà nước để thống trị và áp bức người nô lệ."
  },
  {
    "type": "singlechoice",
    "content": "Câu 146: Theo quan điểm của chủ nghĩa duy vật biện chứng lịch sử, xã hội loài người đã trải qua bao nhiêu hình thái kinh tế xã hội?",
    "answers": [
      { "content": "Bốn hình thái kinh tế xã hội", "correct": false },
      { "content": "Ba hình thái kinh tế xã hội", "correct": false },
      { "content": "Năm hình thái kinh tế xã hội", "correct": true }
    ],
    "explanation": "Chủ nghĩa duy vật lịch sử xác định xã hội đã trải qua năm hình thái kinh tế - xã hội cơ bản: cộng sản nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa và cộng sản chủ nghĩa."
  },
  {
    "type": "singlechoice",
    "content": "Câu 147: Hãy xác định luận điểm nào sai khi đề cập đến mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng?",
    "answers": [
      { "content": "Sự phát triển của lực lượng sản xuất trực tiếp làm thay đổi quan hệ sản xuất, và thông qua đó làm thay đổi kiến trúc thượng tầng", "correct": false },
      { "content": "Cơ sở hạ tầng thay đổi thì sớm muộn gì kiến trúc thượng tầng cũng thay đổi theo", "correct": false },
      { "content": "Trong xã hội có giai cấp, giai cấp nào thống trị về kinh tế thì sẽ thống trị về chính trị, tư tưởng", "correct": false },
      { "content": "Các mâu thuẫn trong chính trị, tư tưởng xét đến cùng quyết định các mâu thuẫn trong lĩnh vực kinh tế", "correct": true }
    ],
    "explanation": "Sai vì chính mâu thuẫn trong kinh tế (quan hệ sản xuất - lực lượng sản xuất) mới quyết định mâu thuẫn trong chính trị, tư tưởng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 148: Theo quan điểm duy vật lịch sử thì",
    "answers": [
      { "content": "Con người là chủ thể tùy ý sáng tạo ra lịch sử", "correct": false },
      { "content": "Lịch sử sáng tạo ra con người, con người không thể sáng tạo ra lịch sử", "correct": false },
      { "content": "Con người không thể sáng tạo ra lịch sử mà chỉ có thể thích ứng với những điều kiện có sẵn", "correct": false },
      { "content": "Con người sáng tạo ra lịch sử trong phạm vi những điều kiện khách quan mà chính lịch sử trước đó đã tạo nên cho nó", "correct": true }
    ],
    "explanation": "Quan điểm duy vật lịch sử khẳng định con người sáng tạo lịch sử nhưng trong những điều kiện khách quan nhất định."
  },
  {
    "type": "singlechoice",
    "content": "Câu 149: Theo quan điểm của chủ nghĩa duy vật biện chứng, trong thực tế chúng ta phải dựa vào điều gì?",
    "answers": [
      { "content": "Dựa vào tất nhiên, đề phòng ngẫu nhiên", "correct": true },
      { "content": "Dựa vào ngẫu nhiên, đề phòng tất nhiên", "correct": false },
      { "content": "Dựa vào cả tất nhiên và ngẫu nhiên", "correct": false },
      { "content": "Không dựa vào các yếu tố nào mang tính tất nhiên, ngẫu nhiên", "correct": false }
    ],
    "explanation": "Trong thực tế, cái tất nhiên quyết định, nhưng ngẫu nhiên cũng có thể tác động, nên phải dựa vào tất nhiên và đề phòng ngẫu nhiên."
  },
  {
    "type": "singlechoice",
    "content": "Câu 150: Đấu tranh giai cấp có vai trò gì đối với sự phát triển của xã hội?",
    "answers": [
      { "content": "Kìm hãm sự phát triển của xã hội", "correct": false },
      { "content": "Tất cả đều sai", "correct": false },
      { "content": "Không có vai trò gì", "correct": false },
      { "content": "Là động lực thúc đẩy", "correct": true }
    ],
    "explanation": "Trong xã hội có giai cấp, đấu tranh giai cấp là một trong những động lực thúc đẩy xã hội phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 151: Cơ sở trực tiếp và chủ yếu nhất để hình thành khái niệm là",
    "answers": [
      { "content": "Thế giới tự nhiên", "correct": false },
      { "content": "Thực tiễn", "correct": true },
      { "content": "Cảm giác", "correct": false },
      { "content": "Tri giác và biểu tượng", "correct": false }
    ],
    "explanation": "Thực tiễn là cơ sở chủ yếu và trực tiếp nhất để hình thành khái niệm và nhận thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 152: Trong chủ nghĩa Mác - Lênin, bộ phận lý luận nào có chức năng làm sáng tỏ bản chất và những quy luật chung nhất của mọi sự vận động, phát triển của thế giới?",
    "answers": [
      { "content": "Triết học Mác - Lênin", "correct": true },
      { "content": "Kinh tế chính trị Mác - Lênin", "correct": false },
      { "content": "Chủ nghĩa xã hội khoa học", "correct": false },
      { "content": "Không có bộ phận nào giữ chức năng đó vì chủ nghĩa Mác - Lênin thuộc khoa học xã hội", "correct": false }
    ],
    "explanation": "Triết học Mác - Lênin nghiên cứu bản chất và quy luật chung nhất của tự nhiên, xã hội và tư duy."
  },
  {
    "type": "singlechoice",
    "content": "Câu 153: Theo quan điểm của chủ nghĩa duy vật lịch sử, yếu tố cơ bản nhất tạo thành điều kiện sinh hoạt vật chất của xã hội là các yếu tố thuộc về",
    "answers": [
      { "content": "Điều kiện tự nhiên", "correct": false },
      { "content": "Điều kiện dân cư", "correct": false },
      { "content": "Phương thức sản xuất ra của cải vật chất", "correct": true },
      { "content": "Không có yếu tố nào là cơ bản nhất mà tùy thuộc các điều kiện lịch sử cụ thể khác nhau", "correct": false }
    ],
    "explanation": "Phương thức sản xuất của cải vật chất là yếu tố cơ bản nhất của điều kiện sinh hoạt xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 154: Chủ nghĩa Mác - Lênin sẽ phát triển đạt đến đâu?",
    "answers": [
      { "content": "Đã phát triển đến mức hoàn toàn đầy đủ", "correct": false },
      { "content": "Trong đó mọi vấn đề được giải quyết triệt để, chỉ cần nghiên cứu và vận dụng trong thực tiễn", "correct": false },
      { "content": "Có thể thay thế cho mọi khoa học", "correct": false },
      { "content": "Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn", "correct": true }
    ],
    "explanation": "Chủ nghĩa Mác - Lênin không ngừng phát triển dựa trên thành tựu mới của khoa học và thực tiễn."
  },
  {
    "type": "singlechoice",
    "content": "Câu 155: Theo quan điểm duy tâm, lực lượng sáng tạo ra lịch sử là:",
    "answers": [
      { "content": "Quần chúng nhân dân lao động", "correct": false },
      { "content": "Giai cấp thống trị xã hội", "correct": false },
      { "content": "Các vĩ nhân, những cá nhân kiệt xuất", "correct": true },
      { "content": "Giai cấp bị trị xã hội", "correct": false }
    ],
    "explanation": "Chủ nghĩa duy tâm thường tuyệt đối hóa vai trò của cá nhân, cho rằng lịch sử do vĩ nhân sáng tạo."
  },
  {
    "type": "singlechoice",
    "content": "Câu 156: Chủ nghĩa nào mà sự tồn tại phát triển của nó thường gắn với lợi ích giai cấp và các lực lượng tiến bộ trong lịch sử?",
    "answers": [
      { "content": "Duy vật thô sơ", "correct": false },
      { "content": "Duy vật", "correct": true },
      { "content": "Duy tâm khách quan", "correct": false },
      { "content": "Chiết trung", "correct": false }
    ],
    "explanation": "Chủ nghĩa duy vật gắn liền với lợi ích của các lực lượng tiến bộ, phản ánh quy luật khách quan."
  },
  {
    "type": "singlechoice",
    "content": "Câu 157: Hình thức hoạt động thực tiễn cơ bản nhất quy định các hình thức hoạt động khác là hình thức nào sau đây?",
    "answers": [
      { "content": "Hoạt động chính trị xã hội", "correct": false },
      { "content": "Hoạt động quan sát và thực nghiệm khoa học", "correct": false },
      { "content": "Hoạt động sản xuất vật chất", "correct": true },
      { "content": "Hoạt động kinh tế", "correct": false }
    ],
    "explanation": "Hoạt động sản xuất vật chất là cơ sở, quyết định các hình thức hoạt động xã hội khác."
  },
  {
    "type": "singlechoice",
    "content": "Câu 158: Theo quan điểm duy vật lịch sử thì xã hội có các loại hình sản xuất cơ bản nào?",
    "answers": [
      { "content": "Sản xuất ra của cải vật chất, đời sống tinh thần và nghệ thuật", "correct": false },
      { "content": "Sản xuất ra văn hóa, con người và đời sống tinh thần", "correct": false },
      { "content": "Sản xuất ra của cải vật chất, tinh thần và văn hóa", "correct": false },
      { "content": "Sản xuất ra của cải vật chất, tinh thần và con người", "correct": true }
    ],
    "explanation": "Xã hội có ba loại hình sản xuất cơ bản: sản xuất ra của cải vật chất, sản xuất tinh thần và sản xuất ra con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 159: Theo quan điểm duy vật lịch sử, nguồn gốc sâu xa của các cuộc cách mạng là do đâu?",
    "answers": [
      { "content": "Mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất", "correct": true },
      { "content": "Giai cấp cầm quyền bị khủng hoảng về đường lối cai trị", "correct": false },
      { "content": "Quần chúng lao động bị áp bức", "correct": false },
      { "content": "Quần chúng lao động bị áp bức nặng nề", "correct": false }
    ],
    "explanation": "Mâu thuẫn cơ bản giữa lực lượng sản xuất và quan hệ sản xuất là nguồn gốc sâu xa của cách mạng xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 160: Chọn phương án đúng về đấu tranh giai cấp?",
    "answers": [
      { "content": "Đấu tranh giai cấp là một trong những động lực phát triển của xã hội có giai cấp", "correct": true },
      { "content": "Đấu tranh giai cấp là động lực mạnh mẽ nhất làm thay đổi xã hội", "correct": false },
      { "content": "Đấu tranh giai cấp là một trong những động lực phát triển của xã hội", "correct": false },
      { "content": "Đấu tranh giai cấp là động lực phát triển của xã hội", "correct": false }
    ],
    "explanation": "Đấu tranh giai cấp là một trong những động lực phát triển xã hội trong các hình thái có giai cấp."
  },
  {
  "type": "singlechoice",
  "content": "161. \"Những thời đại kinh tế khác nhau không phải ở chỗ chúng sản xuất ra cái gì, mà là ở chỗ chúng sản xuất bằng cách nào, với những tư liệu lao động nào\". Câu nói trên là của ai?",
  "answers": [
    {
      "content": "Ph.Ăng ghen",
      "correct": false
    },
    {
      "content": "Ricardo",
      "correct": false
    },
    {
      "content": "Mác",
      "correct": true
    }
  ],
  "explanation": "Câu nói này của C. Mác khẳng định bản chất sự khác nhau giữa các thời đại kinh tế không nằm ở sản phẩm mà nằm ở phương thức sản xuất."
},
{
  "type": "singlechoice",
  "content": "162. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Quá trình \"lịch sử tự nhiên\" của sự phát triển các hình thái kinh tế xã hội là quá trình phát triển theo",
  "answers": [
    {
      "content": "Ý niệm tuyệt đối",
      "correct": false
    },
    {
      "content": "Quy luật khách quan của xã hội",
      "correct": false
    },
    {
      "content": "Quy luật của tự nhiên",
      "correct": true
    },
    {
      "content": "Ý muốn chủ quan của con người",
      "correct": false
    }
  ],
  "explanation": "Theo duy vật lịch sử, sự phát triển của các hình thái kinh tế - xã hội là quá trình lịch sử - tự nhiên, diễn ra theo quy luật khách quan giống như tự nhiên."
},
{
  "type": "singlechoice",
  "content": "163. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Mỗi phương thức sản xuất đều được tạo nên bởi hai mặt:",
  "answers": [
    {
      "content": "Kỹ thuật và công nghệ",
      "correct": false
    },
    {
      "content": "Kỹ thuật và lao động",
      "correct": true
    },
    {
      "content": "Kỹ thuật và kinh tế",
      "correct": false
    },
    {
      "content": "Kỹ thuật và tổ chức",
      "correct": false
    }
  ],
  "explanation": "Phương thức sản xuất bao gồm lực lượng sản xuất (người lao động + công cụ, kỹ thuật) và quan hệ sản xuất, trong đó lao động là nhân tố quyết định."
},
{
  "type": "singlechoice",
  "content": "164. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Sản xuất ra của cải vật chất giữ vai trò là:",
  "answers": [
    {
      "content": "Nền tảng của xã hội",
      "correct": false
    },
    {
      "content": "Nền tảng vật chất của xã hội",
      "correct": true
    },
    {
      "content": "Nền tảng tinh thần của xã hội",
      "correct": false
    },
    {
      "content": "Nền tảng kỹ thuật, công nghệ của xã hội",
      "correct": false
    }
  ],
  "explanation": "Sản xuất vật chất quyết định sự tồn tại và phát triển của xã hội, là cơ sở vật chất của đời sống xã hội."
},
{
  "type": "singlechoice",
  "content": "165. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Thực chất của quá trình sản xuất vật chất là quá trình:",
  "answers": [
    {
      "content": "Con người thực hiện sự cải biến giới tự nhiên",
      "correct": true
    },
    {
      "content": "Con người nhận thức thế giới và bản thân mình",
      "correct": false
    },
    {
      "content": "Con người thực hiện sáng tạo trong tư duy",
      "correct": false
    },
    {
      "content": "Con người thực hiện lợi ích của mình",
      "correct": false
    }
  ],
  "explanation": "Sản xuất vật chất là hoạt động cơ bản nhất của con người, biến đổi giới tự nhiên để tạo ra của cải phục vụ nhu cầu."
},
{
  "type": "singlechoice",
  "content": "166. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Nhân tố quyết định trong lực lượng sản xuất là nhân tố:",
  "answers": [
    {
      "content": "Tư liệu sản xuất",
      "correct": false
    },
    {
      "content": "Người lao động",
      "correct": true
    },
    {
      "content": "Công cụ lao động",
      "correct": false
    }
  ],
  "explanation": "Người lao động là nhân tố trung tâm, quyết định trong lực lượng sản xuất, bởi họ trực tiếp vận dụng công cụ để sản xuất."
},
{
  "type": "singlechoice",
  "content": "167. Chọn câu trả lời đúng, đầy đủ nhất theo quan niệm duy vật lịch sử: Cách mạng xã hội giữ vai trò là",
  "answers": [
    {
      "content": "Nguồn gốc và động lực tiến bộ của xã hội",
      "correct": false
    },
    {
      "content": "Động lực phát triển của mọi xã hội",
      "correct": false
    },
    {
      "content": "Một trong những phương thức, động lực phát triển xã hội",
      "correct": false
    },
    {
      "content": "Phương thức, động lực cơ bản nhất của sự phát triển xã hội trong điều kiện xã hội có sự phân hóa thành đối kháng giai cấp",
      "correct": true
    }
  ],
  "explanation": "Trong xã hội có giai cấp, cách mạng xã hội là phương thức cơ bản nhất để thay thế hình thái kinh tế - xã hội cũ bằng cái mới."
},
{
  "type": "singlechoice",
  "content": "168. Theo quan điểm của chủ nghĩa duy vật lịch sử, nguồn gốc, động lực cơ bản nhất của mọi quá trình phát triển xã hội là gì?",
  "answers": [
    {
      "content": "Sự phát triển của khoa học",
      "correct": false
    },
    {
      "content": "Sự vận động của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
      "correct": true
    },
    {
      "content": "Sự phát triển của khoa học công nghệ",
      "correct": false
    },
    {
      "content": "Đấu tranh giai cấp",
      "correct": false
    }
  ],
  "explanation": "Động lực cơ bản của xã hội là mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, được giải quyết thông qua đấu tranh giai cấp và cách mạng xã hội."
},
{
  "type": "singlechoice",
  "content": "169. Xét đến cùng, nhân tố quan trọng nhất quyết định sự thắng lợi của một trật tự xã hội mới là",
  "answers": [
    {
      "content": "Năng suất lao động",
      "correct": true
    },
    {
      "content": "Luật pháp",
      "correct": false
    },
    {
      "content": "Chính trị",
      "correct": false
    },
    {
      "content": "Kinh tế",
      "correct": false
    }
  ],
  "explanation": "Năng suất lao động thể hiện trình độ phát triển của lực lượng sản xuất, quyết định khả năng thắng lợi của xã hội mới."
},
{
  "type": "singlechoice",
  "content": "170. Quan hệ sản xuất là phạm trù dùng để chỉ",
  "answers": [
    {
      "content": "Quan hệ giữa con người sản xuất với người tiêu dùng trong quá trình sản xuất",
      "correct": false
    },
    {
      "content": "Quan hệ giữa người với người trong quá trình sản xuất",
      "correct": true
    },
    {
      "content": "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất",
      "correct": false
    }
  ],
  "explanation": "Quan hệ sản xuất phản ánh mối quan hệ kinh tế giữa người với người trong quá trình sản xuất xã hội."
},
{
  "type": "singlechoice",
  "content": "171. Chọn câu trả lời đúng. Lực lượng sản xuất bao gồm:",
  "answers": [
    {
      "content": "Tư liệu sản xuất và người lao động",
      "correct": true
    },
    {
      "content": "Người lao động và công cụ lao động",
      "correct": false
    },
    {
      "content": "Người lao động và trình độ lao động của họ",
      "correct": false
    },
    {
      "content": "Tư liệu sản xuất và các nguồn lực tự nhiên",
      "correct": false
    }
  ],
  "explanation": "Lực lượng sản xuất gồm người lao động với tri thức, kỹ năng của họ và tư liệu sản xuất (công cụ, phương tiện)."
},
{
  "type": "singlechoice",
  "content": "172. Quan niệm cho rằng \"suy nghĩ của những người sống trong túp lều tranh luôn luôn khác với suy nghĩ của những kẻ sống trong cung điện\" là quan điểm của",
  "answers": [
    {
      "content": "Chủ nghĩa duy tâm",
      "correct": false
    },
    {
      "content": "Chủ nghĩa duy vật siêu hình",
      "correct": true
    },
    {
      "content": "Chủ nghĩa duy vật lịch sử",
      "correct": false
    },
    {
      "content": "Chủ nghĩa duy vật",
      "correct": false
    }
  ],
  "explanation": "Quan niệm này mang tính duy vật siêu hình, tuyệt đối hóa sự tác động trực tiếp của điều kiện sống mà không thấy mối quan hệ biện chứng."
},
{
  "type": "singlechoice",
  "content": "173. Bản chất của con người được quyết định bởi",
  "answers": [
    {
      "content": "Các quan hệ xã hội",
      "correct": true
    },
    {
      "content": "Giáo dục gia đình",
      "correct": false
    },
    {
      "content": "Sự nỗ lực của cá nhân",
      "correct": false
    },
    {
      "content": "Giáo dục nhà trường",
      "correct": false
    }
  ],
  "explanation": "Theo C. Mác, bản chất con người là tổng hòa các mối quan hệ xã hội, chứ không phải do yếu tố tự nhiên hay cá nhân đơn thuần."
},
{
  "type": "singlechoice",
  "content": "174. Đặc trưng chủ yếu của cách mạng xã hội",
  "answers": [
    {
      "content": "Sự thay đổi về hệ tư tưởng nói riêng và toàn bộ đời sống tinh thần của xã hội nói chung",
      "correct": false
    },
    {
      "content": "Sự thay đổi về cơ cấu, tổ chức hoạt động sản xuất ra của cải vật chất trong xã hội",
      "correct": false
    },
    {
      "content": "Sự thay đổi chính quyền nhà nước từ tay giai cấp thống trị đã lỗi thời sang tay giai cấp cách mạng.",
      "correct": true
    },
    {
      "content": "Sự thay đổi về thế lực cầm quyền trong cùng một giai cấp",
      "correct": false
    }
  ],
  "explanation": "Cách mạng xã hội thực chất là thay đổi chính quyền nhà nước, chuyển quyền lực từ giai cấp thống trị cũ sang giai cấp mới tiến bộ."
},
{
  "type": "singlechoice",
  "content": "175. Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra khuynh hướng cơ bản phổ biến của sự vận động và phát triển?",
  "answers": [
    {
      "content": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      "correct": false
    },
    {
      "content": "Quy luật về chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      "correct": false
    },
    {
      "content": "Quy luật phủ định của phủ định",
      "correct": true
    },
    {
      "content": "Quy luật về sự phù hợp của QHSX và trình độ LLSX",
      "correct": false
    }
  ],
  "explanation": "Quy luật phủ định của phủ định chỉ ra xu hướng phát triển đi lên theo hình thức 'xoáy ốc', khái quát tính tất yếu, tiến bộ của vận động."
},
{
  "type": "singlechoice",
  "content": "176. Trong 3 đặc trưng của giai cấp, đặc trưng nào giữ vai trò chi phối các đặc trưng khác?",
  "answers": [
    {
      "content": "Tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác",
      "correct": false
    },
    {
      "content": "Khác nhau về quan hệ sở hữu tư liệu sản xuất xã hội",
      "correct": true
    },
    {
      "content": "Khác nhau về vai trò trong tổ chức lao động xã hội",
      "correct": false
    },
    {
      "content": "Khác nhau về địa vị trong hệ thống tổ chức xã hội",
      "correct": false
    }
  ],
  "explanation": "Quan hệ sở hữu tư liệu sản xuất quyết định địa vị và vai trò trong tổ chức lao động, nên là đặc trưng chi phối."
},
{
  "type": "singlechoice",
  "content": "177. Khái niệm nào chỉ sự quy định, sự tác động qua lại, sự chuyển hoá lẫn nhau giữa các sự vật, hiện tượng hay giữa các mặt, các yếu tố trong một sự vật, hiện tượng?",
  "answers": [
    {
      "content": "Mối liên hệ",
      "correct": true
    },
    {
      "content": "Sự phát triển",
      "correct": false
    },
    {
      "content": "Sự thay đổi",
      "correct": false
    },
    {
      "content": "Sự biến đổi",
      "correct": false
    }
  ],
  "explanation": "Mối liên hệ phản ánh sự tác động qua lại, chuyển hóa giữa các sự vật, hiện tượng và các yếu tố trong hiện thực."
},
{
  "type": "singlechoice",
  "content": "178. Khái niệm quan hệ sản xuất được hiểu là",
  "answers": [
    {
      "content": "Mối quan hệ giữa người với người trong quá trình sản xuất",
      "correct": true
    },
    {
      "content": "Mối quan hệ giữa người với người trong quá trình tiêu dùng",
      "correct": false
    },
    {
      "content": "Mối quan hệ giữa người với người trong quá trình phân phối",
      "correct": false
    },
    {
      "content": "Mối quan hệ giữa người với người trong quá trình hoạch định",
      "correct": false
    }
  ],
  "explanation": "Quan hệ sản xuất là mối quan hệ kinh tế - xã hội giữa người với người trong sản xuất, khác với tiêu dùng hay phân phối."
},
{
  "type": "singlechoice",
  "content": "179. Khái niệm lực lượng sản xuất được hiểu là",
  "answers": [
    {
      "content": "Toàn bộ những năng lực thực tiễn dùng trong sản xuất của xã hội",
      "correct": true
    },
    {
      "content": "Toàn bộ những năng lực thực tiễn dùng trong tiêu dùng của xã hội",
      "correct": false
    },
    {
      "content": "Toàn bộ những năng lực thực tiễn dùng trong phân phối của xã hội",
      "correct": false
    },
    {
      "content": "Toàn bộ những năng lực thực tiễn dùng trong hoạch định của xã hội",
      "correct": false
    }
  ],
  "explanation": "Lực lượng sản xuất bao gồm người lao động và tư liệu sản xuất, phản ánh sức mạnh thực tiễn của xã hội trong sản xuất."
},
{
  "type": "singlechoice",
  "content": "180. Mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng là mối quan hệ:",
  "answers": [
    {
      "content": "Luôn luôn thống nhất với nhau",
      "correct": false
    },
    {
      "content": "Luôn luôn đối lập nhau",
      "correct": false
    },
    {
      "content": "Thống nhất và đấu tranh giữa hai mặt đối lập",
      "correct": true
    },
    {
      "content": "Thống nhất là căn bản, còn đấu tranh giữa chúng chỉ là tạm thời",
      "correct": false
    }
  ],
  "explanation": "Cơ sở hạ tầng và kiến trúc thượng tầng vừa thống nhất vừa mâu thuẫn, tác động qua lại, trong đó cơ sở hạ tầng giữ vai trò quyết định."
},
{
    "type": "singlechoice",
    "content": "181. V.I. Lênin cho rằng: Tính....không thể tách rời tính phổ biến.",
    "answers": [
      { "content": "Nhân quả", "correct": false },
      { "content": "Tất nhiên", "correct": true },
      { "content": "Đơn nhất", "correct": false },
      { "content": "Hiện thực", "correct": false }
    ],
    "explanation": "Khẳng định tính tất nhiên gắn liền với tính phổ biến trong phép biện chứng duy vật."
  },
  {
    "type": "singlechoice",
    "content": "182. Thế giới quan là gì?",
    "answers": [
      { "content": "Quan điểm, cách nhìn về XH", "correct": false },
      { "content": "Quan điểm, cách nhìn về thế giới tự nhiên", "correct": false },
      { "content": "Quan điểm, niềm tin, nhìn nhận về các sự vật cụ thể", "correct": false },
      { "content": "Toàn bộ quan điểm và niềm tin định hướng hoạt động con người trong cuộc sống", "correct": true }
    ],
    "explanation": "Thế giới quan là hệ thống quan điểm và niềm tin định hướng hoạt động sống của con người."
  },
  {
    "type": "singlechoice",
    "content": "183. Ý thức tôn giáo là niềm tin của một bộ phận nhân dân, thường là yếu tố bền vững nhất trong đời sống tinh thần của mỗi con người, của xã hội là nguyên nhân gì (?) của sự tồn tại tôn giáo?",
    "answers": [
      { "content": "Nhận thứ", "correct": false },
      { "content": "B. Văn hó", "correct": false },
      { "content": "Trình độ.", "correct": false },
      { "content": "Tâm lý.", "correct": true }
    ],
    "explanation": "Nguồn gốc tâm lý là một trong những nguyên nhân cơ bản cho sự tồn tại của tôn giáo."
  },
  {
    "type": "singlechoice",
    "content": "184. Nguồn gốc vận động và phát triển của các hình thái kinh tế - xã hội là gì?",
    "answers": [
      { "content": "Sự tăng lên không ngừng của năng xuất lao động.", "correct": false },
      { "content": "Mâu thuẫn giai - tầng trong xã hội, sự thay đổi của quan hệ sản xuất.", "correct": false },
      { "content": "Do việc giải quyết mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất, mâu thuẫn giữa cơ sở hạ tầng với kiến trúc thượng tầng.", "correct": true },
      { "content": "Quần chúng nhân dân không ngừng nổi dậy đấu tranh chống các thế lực phản động trong xã hội.", "correct": false }
    ],
    "explanation": "Sự phát triển xã hội bắt nguồn từ việc giải quyết mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất."
  },
  {
    "type": "singlechoice",
    "content": "185. Câu trả lời sau đây, câu nào diễn đạt chưa chuẩn xác:",
    "answers": [
      { "content": "Chủ nghĩa Mác là học thuyết do", "correct": false },
      { "content": "Mác sáng lập.", "correct": true },
      { "content": "Chủ nghĩa Mác là học thuyết về sự nghiệp giải phóng giai cấp vô sản và nhân dân lao động.", "correct": false },
      { "content": "Chủ nghĩa Mác là thế giới quan và phương pháp luận chung của mọi nhận thức và thực tiễn.", "correct": true },
      { "content": "Chủ nghĩa mác là học thuyết được xây dựng trên cơ sở kế thừa những tinh hoa của lịch sử tư tưởng nhân loại và thực tiễn cách mạng", "correct": false }
    ],
    "explanation": "Một số câu diễn đạt chưa chuẩn xác vì làm giảm ý nghĩa toàn diện của chủ nghĩa Mác."
  },
  {
    "type": "singlechoice",
    "content": "186. Phát kiến vĩ đại nhất của Các Mác trên lĩnh vực nghiên cứu triết học và kinh tế chính trị là:",
    "answers": [
      { "content": "Sáng tạo ra chủ nghĩa duy vật biện chứng và học thuyết giá trị lao động", "correct": false },
      { "content": "Sáng tạo ra phép biện chứng duy vật và học thuyết giá trị thặng dư", "correct": false },
      { "content": "Sáng tạo ra chủ nghĩa duy vật biện chứng và học thuyết giá trị thặng dư", "correct": false },
      { "content": "Sáng tạo ra chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư", "correct": true }
    ],
    "explanation": "Mác đã sáng tạo ra chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư, đóng góp vĩ đại nhất."
  },
  {
    "type": "singlechoice",
    "content": "187. Trong các câu hỏi sau đây, câu hỏi nào là biến thể của cách diễn đạt vấn đề cơ bản của triết học:",
    "answers": [
      { "content": "Não người đã phát triển như thế nào?", "correct": false },
      { "content": "Nội dung của các tư tưởng của con người xuất hiện từ đâu và bằng cách nào?", "correct": true },
      { "content": "Tư duy được thực hiện trong các hình thức nào và tuân theo các quy luật nào?", "correct": false },
      { "content": "Mục đích và ý nghĩa của sự tồn tại người là gì?", "correct": false }
    ],
    "explanation": "Câu hỏi này phản ánh trực tiếp mối quan hệ giữa tư duy và tồn tại."
  },
  {
    "type": "singlechoice",
    "content": "188. Trong chỉ đạo thực tiễn cần căn cứ vào đâu để đề ra chủ trương, phương hướng hành động?",
    "answers": [
      { "content": "Cái tất nhiên, bản chất, nội dung.", "correct": true },
      { "content": "Cái ngẫu nhiên, hình thức, hiện tượng", "correct": false },
      { "content": "Các phương án trả lời đều sai", "correct": false }
    ],
    "explanation": "Chủ trương và hành động thực tiễn phải căn cứ vào cái tất nhiên, bản chất để đảm bảo tính khoa học."
  },
  {
    "type": "singlechoice",
    "content": "189. Trong các tác phẩm kinh điển sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất?",
    "answers": [
      { "content": "Làm gì.", "correct": false },
      { "content": "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán.", "correct": true },
      { "content": "Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Má", "correct": false },
      { "content": "Bút ký triết họ", "correct": false }
    ],
    "explanation": "Trong tác phẩm này, Lênin phát triển quan điểm về vật chất và mối quan hệ vật chất - ý thức."
  },
  {
    "type": "singlechoice",
    "content": "190. Trong các tác phẩm kinh điển sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển tư tưởng biện chứng trong triết học của Hêghen?",
    "answers": [
      { "content": "Làm gì?", "correct": false },
      { "content": "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán.", "correct": false },
      { "content": "Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Má", "correct": false },
      { "content": "Bút ký triết họ", "correct": true }
    ],
    "explanation": "Lênin đã phát triển và vận dụng phép biện chứng Hêghen trong tác phẩm Bút ký triết học."
  },
  {
    "type": "singlechoice",
    "content": "191. Theo Ph. Ăngghen, vấn đề cơ bản lớn của triết học là vấn đề về:",
    "answers": [
      { "content": "Vật chất.", "correct": false },
      { "content": "Ý thứ", "correct": false },
      { "content": "Mối quan hệ giữa tư duy và tồn tại.", "correct": true },
      { "content": "Quy luật chung nhất của tự nhiên, xã hội và tư duy con người.", "correct": false }
    ],
    "explanation": "Vấn đề cơ bản nhất là mối quan hệ giữa tư duy và tồn tại."
  },
  {
    "type": "singlechoice",
    "content": "192. Nội dung mặt thứ nhất của vấn đề cơ bản của triết học là:",
    "answers": [
      { "content": "Quan hệ giữa vật chất với ý thứ", "correct": false },
      { "content": "Quan hệ giữa ý thức với vật chất.", "correct": false },
      { "content": "Khả năng nhận thức thế giới của con người.", "correct": false },
      { "content": "Bản chất của thế giới là vật chất hay ý thức", "correct": true }
    ],
    "explanation": "Mặt thứ nhất của vấn đề triết học là xác định bản chất thế giới là vật chất hay ý thức."
  },
  {
    "type": "singlechoice",
    "content": "193. Hệ thống triết học nào quan niệm sự vật là phức hợp của cảm giác?",
    "answers": [
      { "content": "Chủ nghĩa duy vật siêu hình.", "correct": false },
      { "content": "Chủ nghĩa duy vật biện chứng.", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan.", "correct": true },
      { "content": "Chủ nghĩa duy tâm khách quan", "correct": false }
    ],
    "explanation": "Chủ nghĩa duy tâm chủ quan coi sự vật chỉ là tập hợp cảm giác của con người."
  },
  {
    "type": "singlechoice",
    "content": "194. Hệ thống triết học nào coi cảm giác là hình ảnh chủ quan của thế giới khách quan?",
    "answers": [
      { "content": "Chủ nghĩa duy vật biện chứng.", "correct": true },
      { "content": "Chủ nghĩa duy vật siêu hình.", "correct": false },
      { "content": "Chủ nghĩa duy tâm khách quan.", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan.", "correct": false }
    ],
    "explanation": "Theo duy vật biện chứng, cảm giác là hình ảnh chủ quan của thế giới khách quan."
  },
  {
    "type": "singlechoice",
    "content": "195. Theo Ph. Ăngghen, chia vận động thành:",
    "answers": [
      { "content": "Bốn hình thức vận động cơ bản", "correct": false },
      { "content": "Năm hình thức vận động cơ bản", "correct": true },
      { "content": "Sáu hình thức vận động cơ bản", "correct": false },
      { "content": "Ba hình thức vận động cơ bản", "correct": false }
    ],
    "explanation": "Ăngghen chia vận động thành 5 hình thức cơ bản: cơ học, vật lý, hóa học, sinh học, xã hội."
  },
  {
    "type": "singlechoice",
    "content": "196. Phương thức sản xuất bao gồm:",
    "answers": [
      { "content": "Lực lượng sản xuất và quan hệ sản xuất.", "correct": true },
      { "content": "Lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng.", "correct": false },
      { "content": "Lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng, kiến trúc thượng tầng", "correct": false }
    ],
    "explanation": "Phương thức sản xuất được cấu thành bởi lực lượng sản xuất và quan hệ sản xuất."
  },
  {
    "type": "singlechoice",
    "content": "197. Ý nghĩa định nghĩa vật chất của Lênin được thể hiện:",
    "answers": [
      { "content": "Khẳng định tính thứ nhất của vật chất.", "correct": false },
      { "content": "Cho phép xác định cái gì là vật chất trong lĩnh vực xã hội.", "correct": false },
      { "content": "Các phương án trả lời đều đúng.", "correct": true }
    ],
    "explanation": "Định nghĩa của Lênin giúp xác định vật chất trong cả tự nhiên lẫn xã hội."
  },
  {
    "type": "singlechoice",
    "content": "198. Chân lý có những tính chất gì?",
    "answers": [
      { "content": "Tính khách quan, tính tuyệt đối, tính tương đối, tính hoàn chỉnh", "correct": false },
      { "content": "Tính khách quan, tính tuyệt đối, tính tương đối, tính cụ thể", "correct": true },
      { "content": "Tính khách quan, tính tuyệt đối, tính tương đối, tính phổ biến", "correct": false }
    ],
    "explanation": "Chân lý có 4 tính chất: khách quan, tuyệt đối, tương đối, cụ thể."
  },
  {
    "type": "singlechoice",
    "content": "199. Tư tưởng nôn nóng, đốt cháy giai đoạn phản ánh trực tiếp việc:",
    "answers": [
      { "content": "Không vận dụng quy luật phủ định của phủ định", "correct": false },
      { "content": "Không vận dụng đúng quy luật thống nhất và đấu tranh của các mặt đối lập", "correct": false },
      { "content": "Không vận dụng đúng quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại", "correct": true }
    ],
    "explanation": "Đốt cháy giai đoạn phản ánh việc bỏ qua quy luật chuyển hóa lượng - chất."
  },
  {
    "type": "singlechoice",
    "content": "200. Thực tiễn là:",
    "answers": [
      { "content": "Hoạt động vật chất có mục đích mang tính lịch sử-xã hội của con người", "correct": true },
      { "content": "Hoạt động tinh thần nhằm tạo ra các giá trị thẩm mỹ", "correct": false },
      { "content": "Một số hoạt động vật chất và một số hoạt động tinh thần", "correct": false }
    ],
    "explanation": "Thực tiễn là toàn bộ hoạt động vật chất mang tính lịch sử - xã hội của con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 201: Chân lý là:",
    "answers": [
      { "content": "Sự thật mà ai cũng biết.", "correct": false },
      { "content": "Lẽ phải ai cũng thừa nhận.", "correct": false },
      { "content": "Tri thức phù hợp với logic suy luận.", "correct": false },
      { "content": "Tri thức có nội dung chân thực và đã được thực tiễn kiểm nghiệm.", "correct": true }
    ],
    "explanation": "Chân lý là tri thức đúng đắn, phản ánh khách quan hiện thực và được thực tiễn kiểm chứng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 202: Theo Mác, con người phải chứng minh chân lý trong:",
    "answers": [
      { "content": "Hoạt động lý luận.", "correct": false },
      { "content": "Hoạt động thực tiễn.", "correct": true },
      { "content": "Thực tế.", "correct": false },
      { "content": "Hiện thực.", "correct": false }
    ],
    "explanation": "Mác khẳng định tiêu chuẩn kiểm nghiệm chân lý là thực tiễn, không chỉ lý luận suông."
  },
  {
    "type": "singlechoice",
    "content": "Câu 203: Tri thức nào nảy sinh một cách trực tiếp từ thực tiễn lao động sản xuất?",
    "answers": [
      { "content": "Tri thức kinh nghiệm", "correct": true },
      { "content": "Tri thức lý luận", "correct": false },
      { "content": "Tri thức lý luận khoa học", "correct": false },
      { "content": "Không có đáp án đúng", "correct": false }
    ],
    "explanation": "Tri thức kinh nghiệm được hình thành trực tiếp từ hoạt động lao động và đời sống."
  },
  {
    "type": "singlechoice",
    "content": "Câu 204: Những hình thức nhận thức: Khái niệm, phán đoán, suy luận thuộc giai đoạn nhận thức nào?",
    "answers": [
      { "content": "Nhận thức cảm tính", "correct": false },
      { "content": "Nhận thức lý tính", "correct": true },
      { "content": "Nhận thức thông thường", "correct": false },
      { "content": "Nhận thức khoa học", "correct": false }
    ],
    "explanation": "Khái niệm, phán đoán, suy luận là các hình thức của nhận thức lý tính."
  },
  {
    "type": "singlechoice",
    "content": "Câu 205: Theo quan điểm của triết học Mác-Lênin, tiêu chuẩn của chân lý là gì?",
    "answers": [
      { "content": "Tri thức do các thế hệ trước để lại", "correct": false },
      { "content": "Tri thức được nhiều người công nhận", "correct": false },
      { "content": "Thực tiễn", "correct": true },
      { "content": "Lời nói của các vĩ nhân", "correct": false }
    ],
    "explanation": "Thực tiễn là tiêu chuẩn khách quan để kiểm nghiệm tính đúng đắn của tri thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 206: Tiêu chuẩn của chân lý là gì?",
    "answers": [
      { "content": "Tính chính xác", "correct": false },
      { "content": "Là tiện lợi cho tư duy.", "correct": false },
      { "content": "Là được nhiều người thừa nhận.", "correct": false },
      { "content": "Là thực tiễn.", "correct": true }
    ],
    "explanation": "Triết học Mác-Lênin khẳng định chỉ có thực tiễn mới là tiêu chuẩn của chân lý."
  },
  {
    "type": "singlechoice",
    "content": "Câu 207: V.I. Lenin khẳng định: Chủ nghĩa Mác dựa vào... chứ không phải dựa vào... để vạch ra đường lối chính trị của mình.",
    "answers": [
      { "content": "Khả năng/ Hiện thực", "correct": false },
      { "content": "Hiện thực/ Ngẫu nhiên.", "correct": true },
      { "content": "Hiện thực/ Khả năng.", "correct": false },
      { "content": "Tất yếu/ Ngẫu nhiên.", "correct": false }
    ],
    "explanation": "Lenin cho rằng chính trị Mác dựa vào hiện thực khách quan, không dựa vào cái ngẫu nhiên."
  },
  {
    "type": "singlechoice",
    "content": "Câu 208: Hạt thóc khi gieo xuống đất có thể nảy mầm thành cây lúa. Vậy hạt thóc là...",
    "answers": [
      { "content": "Khả năng", "correct": false },
      { "content": "Hiện thực", "correct": false },
      { "content": "Không phải hiện thực", "correct": false },
      { "content": "Vừa là khả năng vừa là hiện thực", "correct": true }
    ],
    "explanation": "Hạt thóc vừa tồn tại thực tế, vừa chứa khả năng phát triển thành cây lúa."
  },
  {
    "type": "singlechoice",
    "content": "Câu 209: V.I.Lênin cho rằng: nhận thức đi từ...đến..., từ bản chất ít sâu sắc đến bản chất sâu sắc hơn.",
    "answers": [
      { "content": "Hình thức/ nội dung", "correct": false },
      { "content": "Nội dung/ hình thức", "correct": false },
      { "content": "Bản chất/ hiện tượng", "correct": false },
      { "content": "Hiện tượng/ bản chất", "correct": true }
    ],
    "explanation": "Quá trình nhận thức bắt đầu từ hiện tượng bên ngoài rồi tiến dần vào bản chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 210: \"Bản chất chỉ là tên gọi trống rỗng mà con người tưởng tượng ra, nó không tồn tại trên thực tế\". Đây là quan niệm của trường phái triết học nào?",
    "answers": [
      { "content": "Duy tâm khách quan", "correct": false },
      { "content": "Bất khả tri", "correct": false },
      { "content": "Duy vật biện chứng", "correct": false },
      { "content": "Duy tâm chủ quan", "correct": true }
    ],
    "explanation": "Duy tâm chủ quan phủ nhận sự tồn tại khách quan của bản chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 211: Trong quá trình vận động, phát triển của sự vật,... giữ vai trò quyết định...",
    "answers": [
      { "content": "Hình thức/Nội dung", "correct": false },
      { "content": "Nội dung/Hình thức", "correct": true },
      { "content": "Hiện tượng/Bản chất", "correct": false },
      { "content": "Ngẫu nhiên/Tất nhiên", "correct": false }
    ],
    "explanation": "Nội dung luôn quyết định hình thức trong sự vận động phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 212: Trong các cụm từ dưới đây, cụm từ nào được xem là \"hình thức\" trong cặp phạm trù \"nội dung - hình thức\" mà phép biện chứng duy vật nghiên cứu: \"Truyện Kiều là...\"",
    "answers": [
      { "content": "Tác phẩm của Nguyễn Du", "correct": false },
      { "content": "Tác phẩm thơ lục bát", "correct": true },
      { "content": "Tác phẩm có bìa màu xanh", "correct": false },
      { "content": "Tác phẩm ra đời vào thế kỷ XVIII", "correct": false }
    ],
    "explanation": "Thơ lục bát là hình thức biểu hiện của nội dung trong Truyện Kiều."
  },
  {
    "type": "singlechoice",
    "content": "Câu 213: C. Mác và Ph.Ăngghen cho rằng: Cái mà người ta quả quyết cho là...thì lại hoàn toàn do những cái...cấu thành và cái được coi là...lại là hình thức trong đó ẩn nấp...",
    "answers": [
      { "content": "Tất yếu/ Ngẫu nhiên; Ngẫu nhiên/ Tất yếu.", "correct": true },
      { "content": "Ngẫu nhiên/ Tất yếu; Tất yếu/ Ngẫu nhiên", "correct": false },
      { "content": "Tất yếu/ Ngẫu nhiên; Tất yếu/ Ngẫu nhiên.", "correct": false },
      { "content": "Ngẫu nhiên/ Tất yếu; Ngẫu nhiên/ Tất yếu", "correct": false }
    ],
    "explanation": "Mác - Ăngghen chỉ ra sự thống nhất và chuyển hóa giữa tất yếu và ngẫu nhiên."
  },
  {
    "type": "singlechoice",
    "content": "Câu 214: \"Đói nghèo\" và \"dốt nát\", hiện tượng nào là nguyên nhân, hiện tượng nào là kết quả?",
    "answers": [
      { "content": "Đói nghèo là nguyên nhân, dốt nát là kết quả.", "correct": false },
      { "content": "Dốt nát là nguyên nhân, đói nghèo là kết quả.", "correct": false },
      { "content": "Cả hai đều là nguyên nhân.", "correct": false },
      { "content": "Hiện tượng này vừa là nguyên nhân vừa là kết quả của hiện tượng kia", "correct": true }
    ],
    "explanation": "Đói nghèo và dốt nát tác động lẫn nhau, vừa là nguyên nhân vừa là kết quả."
  },
  {
    "type": "singlechoice",
    "content": "Câu 215: Có rất nhiều loại nguyên nhân như: cơ bản, chủ yếu, bên trong, bên ngoài... điều đó chứng tỏ:",
    "answers": [
      { "content": "Một kết quả chỉ có thể do một loại nguyên nhân gây ra", "correct": false },
      { "content": "Một kết quả có thể do nhiều loại nguyên nhân gây ra", "correct": true },
      { "content": "Một kết quả có thể không cần nguyên nhân gây ra", "correct": false },
      { "content": "Không thể nhận thức được quan hệ nhân quả", "correct": false }
    ],
    "explanation": "Kết quả có thể do nhiều nguyên nhân khác nhau cùng tác động."
  },
  {
    "type": "singlechoice",
    "content": "Câu 216: Hình thức cơ bản, đầu tiên của mọi quá trình tư duy là?",
    "answers": [
      { "content": "Cảm giác", "correct": false },
      { "content": "Biểu tượng.", "correct": true },
      { "content": "Khái niệm.", "correct": false },
      { "content": "Suy luận.", "correct": false }
    ],
    "explanation": "Biểu tượng là hình thức nhận thức cơ bản, xuất hiện sớm trong tư duy."
  },
  {
    "type": "singlechoice",
    "content": "Câu 217: Trong các cặp khái niệm dưới đây, cặp nào có quan hệ nhân quả?",
    "answers": [
      { "content": "Đông - Tây", "correct": false },
      { "content": "Nghèo - Dốt", "correct": true },
      { "content": "Xuân - Hạ", "correct": false },
      { "content": "Ngày - Đêm", "correct": false }
    ],
    "explanation": "Nghèo và dốt có mối quan hệ nhân quả chặt chẽ, tác động qua lại."
  },
  {
    "type": "singlechoice",
    "content": "Câu 218: Phạm trù là những... phản ánh những mặt, thuộc tính, mối liên hệ chung, cơ bản nhất của các sự vật và hiện tượng thuộc một lĩnh vực nhất định.",
    "answers": [
      { "content": "Khái niệm.", "correct": false },
      { "content": "Khái niệm rộng.", "correct": false },
      { "content": "Khái niệm rộng nhất.", "correct": true },
      { "content": "Khái niệm hẹp.", "correct": false }
    ],
    "explanation": "Phạm trù là khái niệm rộng nhất, phản ánh bản chất chung nhất của sự vật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 219: Nội dung của các phạm trù luôn luôn mang tính...",
    "answers": [
      { "content": "Khách quan", "correct": true },
      { "content": "Chủ quan", "correct": false },
      { "content": "Chân thực", "correct": false },
      { "content": "Khách quan và chủ quan", "correct": false }
    ],
    "explanation": "Phạm trù phản ánh cái khách quan, không phụ thuộc ý chí chủ quan."
  },
  {
    "type": "singlechoice",
    "content": "Câu 220: Quan niệm nào cho rằng cơ sở của mối liên hệ giữa các sự vật, hiện tượng là ở \"ý niệm tuyệt đối\"?",
    "answers": [
      { "content": "Chủ nghĩa duy tâm.", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan.", "correct": false },
      { "content": "Chủ nghĩa duy tâm khách quan.", "correct": true },
      { "content": "Chủ nghĩa duy vật.", "correct": false }
    ],
    "explanation": "Chủ nghĩa duy tâm khách quan coi ý niệm tuyệt đối là cơ sở của mọi mối liên hệ."
  },
  {
    "type": "singlechoice",
    "content": "Câu 221: Yêu cầu của quan niệm toàn diện phải xem xét tất cả các mối liên hệ của sự vật. Yêu cầu này không thực hiện được nhưng vẫn phải đề ra để làm gì?",
    "answers": [
      {
        "content": "Chống quan điểm siêu hình.",
        "correct": false
      },
      {
        "content": "Chống quan điểm duy tâm.",
        "correct": false
      },
      {
        "content": "Chống quan chủ nghĩa triết chung và thuyết ngụy biện.",
        "correct": false
      },
      {
        "content": "Đề phòng cho chúng ta khỏi phạm sai lầm và sự cứng nhắc.",
        "correct": true
      }
    ],
    "explanation": "Quan niệm toàn diện giúp tránh cách nhìn phiến diện và cứng nhắc, dù không thể bao quát tất cả mối liên hệ."
  },
  {
    "type": "singlechoice",
    "content": "Câu 222: Biện chứng chủ quan là gì?",
    "answers": [
      {
        "content": "Là biện chứng của tư duy tư biện, thuần túy.",
        "correct": false
      },
      {
        "content": "Là biện chứng của ý thức.",
        "correct": true
      },
      {
        "content": "Là biện chứng của thực tiễn xã hội.",
        "correct": false
      },
      {
        "content": "Là biện chứng của lý luận.",
        "correct": false
      }
    ],
    "explanation": "Biện chứng chủ quan phản ánh sự vận động, mâu thuẫn trong quá trình tư duy, trong đời sống ý thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 223: Biện chứng khách quan là gì?",
    "answers": [
      {
        "content": "Là những quan niệm biện chứng tiên nghiệm, có trước kinh nghiệm.",
        "correct": false
      },
      {
        "content": "Là những quan niệm biện chứng được rút ra từ ý niệm tuyệt đối, độc lập với ý thức con người.",
        "correct": false
      },
      {
        "content": "Là biện chứng của các tồn tại vật chất.",
        "correct": true
      },
      {
        "content": "Là biện chứng không thể nhận thức được nó.",
        "correct": false
      }
    ],
    "explanation": "Biện chứng khách quan là sự vận động, phát triển vốn có của thế giới vật chất, không phụ thuộc vào ý thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 224: Tại sao Mác nói phép biện chứng của Hêghen là phép biện chứng lộn đầu xuống đất?",
    "answers": [
      {
        "content": "Thừa nhận sự tồn tại khách quan của thế giới vật chất.",
        "correct": false
      },
      {
        "content": "Thừa nhận tinh thần là sản phẩm của thế giới vật chất.",
        "correct": false
      },
      {
        "content": "Thừa nhận sự tồn tại độc lập của tinh thần.",
        "correct": false
      },
      {
        "content": "Thừa nhận tự nhiên, xã hội là sản phẩm của quá trình phát triển của tinh thần, ý niệm.",
        "correct": true
      }
    ],
    "explanation": "Hêghen xuất phát từ tinh thần, ý niệm để giải thích hiện thực, trái ngược với quan điểm duy vật của Mác."
  },
  {
    "type": "singlechoice",
    "content": "Câu 225: Nguồn gốc xã hội trực tiếp và quan trọng nhất quyết định sự ra đời và phát triển của ý thức là:",
    "answers": [
      {
        "content": "Lao động trí óc.",
        "correct": false
      },
      {
        "content": "Thực tiễn.",
        "correct": false
      },
      {
        "content": "Giáo dục.",
        "correct": false
      },
      {
        "content": "Nghiên cứu khoa học.",
        "correct": false
      }
    ],
    "explanation": "Ý thức có nguồn gốc xã hội từ hoạt động thực tiễn, đặc biệt là lao động và giao tiếp xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 226: Nhân tố cơ bản, trực tiếp tạo thành nguồn gốc xã hội của ý thức:",
    "answers": [
      {
        "content": "Lao động và ngôn ngữ.",
        "correct": true
      },
      {
        "content": "Lao động trí óc và lao động chân tay.",
        "correct": false
      },
      {
        "content": "Thực tiễn kinh tế và lao động.",
        "correct": false
      },
      {
        "content": "Lao động và nghiên cứu khoa học.",
        "correct": false
      }
    ],
    "explanation": "Lao động và ngôn ngữ vừa tạo điều kiện, vừa là công cụ hình thành và phát triển ý thức xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 227: Sai lầm của các nhà triết học cổ đại trong quan niệm về vật chất?",
    "answers": [
      {
        "content": "Đồng nhất vật chất với một số dạng vật thể cụ thể, cảm tính.",
        "correct": true
      },
      {
        "content": "Vật chất là tất cả cái tồn tại khách quan.",
        "correct": false
      },
      {
        "content": "Vật chất là có thể nhận thức được.",
        "correct": false
      },
      {
        "content": "Vật chất tự thân vận động.",
        "correct": false
      }
    ],
    "explanation": "Các nhà triết học cổ đại thường đồng nhất vật chất với nước, lửa, khí... chứ chưa thấy tính khái quát."
  },
  {
    "type": "singlechoice",
    "content": "Câu 228: Khái niệm trung tâm mà V.I. Lênin sử dụng để định nghĩa về vật chất là?",
    "answers": [
      {
        "content": "Phạm trù triết học.",
        "correct": false
      },
      {
        "content": "Thực tại khách quan.",
        "correct": true
      },
      {
        "content": "Cảm giác.",
        "correct": false
      },
      {
        "content": "Phản ánh.",
        "correct": false
      }
    ],
    "explanation": "Lênin khẳng định: vật chất là phạm trù triết học chỉ thực tại khách quan, tồn tại độc lập với ý thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 229: \"Tất cả cái gì đang vận động, đều vận động nhờ một cái khác nào đó\". Nhận định này gắn liền với hệ thống triết học nào? Hãy chọn phương án sai.",
    "answers": [
      {
        "content": "Triết học duy vật.",
        "correct": true
      },
      {
        "content": "Triết học duy tâm.",
        "correct": false
      },
      {
        "content": "Triết học duy tâm khách quan.",
        "correct": false
      },
      {
        "content": "Triết học duy tâm chủ quan.",
        "correct": false
      }
    ],
    "explanation": "Quan điểm này thuộc triết học duy tâm, cho rằng vận động cần lực bên ngoài, sai với duy vật biện chứng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 230: Phép biện chứng của triết học Hêghen là:",
    "answers": [
      {
        "content": "Phép biện chứng duy tâm chủ quan.",
        "correct": false
      },
      {
        "content": "Phép biện chứng duy vật hiện đại.",
        "correct": false
      },
      {
        "content": "Phép biện chứng ngây thơ, chất phác.",
        "correct": false
      },
      {
        "content": "Phép biện chứng duy tâm khách quan.",
        "correct": true
      }
    ],
    "explanation": "Hêghen xây dựng phép biện chứng dựa trên sự vận động của ý niệm tuyệt đối, mang tính duy tâm khách quan."
  },
  {
    "type": "singlechoice",
    "content": "Câu 231: Nhận định sau thuộc lập trường triết học nào? \"Nhân tố kinh tế là nhân tố quyết định duy nhất trong lịch sử\".",
    "answers": [
      {
        "content": "Chủ nghĩa duy vật biện chứng.",
        "correct": false
      },
      {
        "content": "Chủ nghĩa duy tâm chủ quan.",
        "correct": false
      },
      {
        "content": "Chủ nghĩa duy tâm khách quan.",
        "correct": false
      },
      {
        "content": "Chủ nghĩa duy vật tầm thường.",
        "correct": true
      }
    ],
    "explanation": "Quan điểm tuyệt đối hóa kinh tế là duy vật tầm thường, khác với duy vật biện chứng coi kinh tế là quyết định cuối cùng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 232: Chọn luận điểm thể hiện lập trường triết học duy tâm lịch sử:",
    "answers": [
      {
        "content": "Quan hệ sản xuất mang tính vật chất.",
        "correct": false
      },
      {
        "content": "Yếu tố kinh tế quyết định lịch sử.",
        "correct": false
      },
      {
        "content": "Sự vận động và phát triển của xã hội, suy cho cùng là do tư tưởng của con người quyết định.",
        "correct": true
      },
      {
        "content": "Kiến trúc thượng tầng chỉ đóng vai trò thụ động trong lịch sử.",
        "correct": false
      }
    ],
    "explanation": "Duy tâm lịch sử đề cao vai trò tư tưởng, ý thức trong việc quyết định vận động xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 233: Trong xã hội có giai cấp, triết học:",
    "answers": [
      {
        "content": "Cũng có tính giai cấp.",
        "correct": true
      },
      {
        "content": "Không có tính giai cấp.",
        "correct": false
      },
      {
        "content": "Chỉ triết học phương Tây mới có tính giai cấp.",
        "correct": false
      },
      {
        "content": "Chỉ có triết học phương Đông mới có tính giai cấp.",
        "correct": false
      }
    ],
    "explanation": "Trong xã hội có giai cấp, triết học phản ánh lợi ích và lập trường của từng giai cấp."
  },
  {
    "type": "singlechoice",
    "content": "Câu 234: Động lực của cách mạng xã hội là:",
    "answers": [
      {
        "content": "Giai cấp chân chính.",
        "correct": false
      },
      {
        "content": "Giai cấp tiên tiến.",
        "correct": true
      },
      {
        "content": "Giai cấp chiếm số đông.",
        "correct": false
      }
    ],
    "explanation": "Giai cấp tiên tiến đại diện cho phương thức sản xuất mới là động lực của cách mạng xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 235: Quan hệ cung cầu thuộc khâu nào của quá trình tái sản xuất xã hội?",
    "answers": [
      {
        "content": "Sản xuất và tiêu dùng",
        "correct": true
      },
      {
        "content": "Phân phối và trao đổi",
        "correct": false
      },
      {
        "content": "Tiêu dùng",
        "correct": false
      }
    ],
    "explanation": "Quan hệ cung cầu phản ánh sự gắn kết giữa sản xuất và tiêu dùng trong nền kinh tế."
  },
  {
    "type": "singlechoice",
    "content": "Câu 236: Trong thực tế chúng ta phải dựa vào khả năng hay hiện thực?",
    "answers": [
      {
        "content": "Khả năng",
        "correct": false
      },
      {
        "content": "Hiện thực",
        "correct": true
      },
      {
        "content": "Các phương án trả lời đều sai",
        "correct": false
      }
    ],
    "explanation": "Trong thực tế hành động, con người phải dựa vào cái hiện thực chứ không chỉ khả năng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 237: Xét về giá trị của hàng hóa, hàng hóa càng khan hiếm thì:",
    "answers": [
      {
        "content": "Giá trị của nó càng cao",
        "correct": false
      },
      {
        "content": "Giá cả của nó càng cao",
        "correct": true
      },
      {
        "content": "Cả giá trị và giá cả của hàng hóa càng cao",
        "correct": false
      }
    ],
    "explanation": "Khan hiếm ảnh hưởng trực tiếp đến giá cả chứ không làm thay đổi giá trị nội tại của hàng hóa."
  },
  {
    "type": "singlechoice",
    "content": "Câu 238: Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là:",
    "answers": [
      {
        "content": "Có nhiều thành phần kinh tế đan xen nhau",
        "correct": false
      },
      {
        "content": "Từ một nền sản xuất nhỏ là phổ biến quá độ lên chủ nghĩa xã hội không qua chế độ tư bản chủ nghĩa",
        "correct": true
      },
      {
        "content": "Năng suất lao động thấp",
        "correct": false
      }
    ],
    "explanation": "Việt Nam quá độ lên CNXH bỏ qua TBCN, từ sản xuất nhỏ lạc hậu là đặc điểm nổi bật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 239: Kết cấu của tồn tại xã hội bao gồm?",
    "answers": [
      {
        "content": "Phương thức sản xuất, điều kiện dân số, điều kiện tự nhiên địa lý",
        "correct": true
      },
      {
        "content": "Phương thức sản xuất, phương thức tiêu dùng, phương thức trao đổi hàng hóa",
        "correct": false
      },
      {
        "content": "Phương thức sản xuất, điều kiện dân số, cơ sở hạ tầng xã hội",
        "correct": false
      }
    ],
    "explanation": "Tồn tại xã hội được quyết định bởi phương thức sản xuất, dân số và điều kiện tự nhiên."
  },
  {
    "type": "singlechoice",
    "content": "Câu 240: Thêm cụm từ thích hợp vào chỗ trống: Nội dung của phạm trù có tính ...(1)..., hình thức của phạm trù có tính...(2)...",
    "answers": [
      {
        "content": "1- chủ quan, 2- khách quan",
        "correct": false
      },
      {
        "content": "1- chủ quan, 2- chủ quan.",
        "correct": false
      },
      {
        "content": "1- khách quan, 2- chủ quan.",
        "correct": true
      },
      {
        "content": "1- khách quan, 2- khách quan",
        "correct": false
      }
    ],
    "explanation": "Theo duy vật biện chứng, nội dung của phạm trù phản ánh cái khách quan, còn hình thức mang tính chủ quan."
  },
  {
  "type": "singlechoice",
  "content": "241. Vật chất với tư cách là phạm trù triết học đã có lịch sử phát triển khoảng bao nhiêu năm",
  "answers": [
    { "content": "2500 năm", "correct": true },
    { "content": "3000 năm", "correct": false },
    { "content": "3500 năm", "correct": false },
    { "content": "4000 năm", "correct": false }
  ],
  "explanation": "Câu hỏi này kiểm tra sự hiểu biết về lịch sử phát triển lâu dài của phạm trù triết học vật chất."
},
{
  "type": "singlechoice",
  "content": "242. Khái niệm \"bước nhảy\"?",
  "answers": [
    { "content": "Sự đột biến", "correct": false },
    { "content": "Chuyển dần về chất", "correct": false },
    { "content": "Hoàn thiện chất", "correct": false },
    { "content": "Quá trình biến đổi về chất diễn ra tại điểm nút", "correct": true }
  ],
  "explanation": "Khái niệm bước nhảy mô tả sự thay đổi căn bản về chất tại điểm nút, khác với biến đổi tiệm tiến."
},
{
  "type": "singlechoice",
  "content": "243. Những chức năng nào của tiền tệ đòi hỏi phải có tiền vàng?",
  "answers": [
    { "content": "Tất cả các chức năng của tiền tệ", "correct": false },
    { "content": "Chỉ có chức năng thuộc đo giá trị", "correct": false },
    { "content": "Chức năng thước đo giá trị, chức năng tích lũy và chức năng cất trữ", "correct": false },
    { "content": "Chức năng thước đo giá trị chức năng tích lũy, cất trữ và chức năng tiền tệ thế giới", "correct": true }
  ],
  "explanation": "Tiền vàng giữ vai trò quan trọng ở một số chức năng đặc thù do có giá trị thực."
},
{
  "type": "singlechoice",
  "content": "244. Cuộc cách mạng xã hội chủ nghĩa đầu tiên trên thế giới là",
  "answers": [
    { "content": "Cách mạng tháng Tám", "correct": false },
    { "content": "Cách mạng tháng Mười Nga", "correct": true },
    { "content": "Cách mạng Tân Hợi", "correct": false }
  ],
  "explanation": "Đây là dấu mốc lịch sử mở đầu cho sự ra đời của nhà nước xã hội chủ nghĩa."
},
{
  "type": "singlechoice",
  "content": "245. Tiền tệ có mấy chức năng?",
  "answers": [
    { "content": "Ba chức năng", "correct": false },
    { "content": "Năm chức năng", "correct": true },
    { "content": "Sáu chức năng", "correct": false },
    { "content": "Bảy chức năng", "correct": false }
  ],
  "explanation": "Lý thuyết kinh tế chính trị chỉ ra tiền tệ có năm chức năng cơ bản trong nền kinh tế."
},
{
  "type": "singlechoice",
  "content": "246. Lượng giá trị của đơn vị hàng hoá thay đổi",
  "answers": [
    { "content": "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ lao động.", "correct": true },
    { "content": "Tỷ lệ thuận với năng suất lao động", "correct": false },
    { "content": "Tỷ lệ nghịch với cường độ lao động", "correct": false }
  ],
  "explanation": "Theo kinh tế chính trị Mác - Lênin, năng suất lao động quyết định lượng giá trị xã hội của hàng hoá."
},
{
  "type": "singlechoice",
  "content": "247. Giá trị cá biệt của hàng hoá do",
  "answers": [
    { "content": "Hao phí lao động cá biệt của người sản xuất quyết định", "correct": true },
    { "content": "Hao phí lao động cá biệt của người sản xuất nhiều hàng hoá quyết định", "correct": false },
    { "content": "Hao phí lao động của ngành quyết định", "correct": false }
  ],
  "explanation": "Giá trị cá biệt phản ánh mức hao phí lao động riêng của từng người sản xuất cụ thể."
},
{
  "type": "singlechoice",
  "content": "248. Hai phương pháp sản xuất giá trị thặng dư là",
  "answers": [
    { "content": "Sản xuất giá trị thặng dư tương đối và siêu ngạch", "correct": false },
    { "content": "Sản xuất giá trị thặng dư tuyệt đối và tương đối", "correct": true },
    { "content": "Sản xuất giá trị thặng dư tuyệt đối và siêu nghạch", "correct": false }
  ],
  "explanation": "Có hai phương pháp cơ bản: kéo dài ngày lao động (tuyệt đối) và tăng năng suất lao động (tương đối)."
},
{
  "type": "singlechoice",
  "content": "249. Thuật ngữ giai cấp công nhân và giai cấp vô sản",
  "answers": [
    { "content": "Đồng nghĩa", "correct": true },
    { "content": "Khác nghĩa", "correct": false },
    { "content": "Không liên quan về nghĩa", "correct": false }
  ],
  "explanation": "Trong lý luận Mác - Lênin, hai thuật ngữ này thường dùng thay thế nhau để chỉ cùng một lực lượng xã hội."
},
{
  "type": "singlechoice",
  "content": "250. Những nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào là không đúng?",
  "answers": [
    { "content": "Chủ yếu áp dụng ở giai đoạn đầu của CNTB khi kỹ thuật còn thủ công lạc hậu.", "correct": false },
    { "content": "Giá trị sức lao động không thay đổi.", "correct": false },
    { "content": "Ngày lao động không thay đổi.", "correct": true }
  ],
  "explanation": "Phương pháp tuyệt đối gắn với việc kéo dài ngày lao động, nên ý 'ngày lao động không thay đổi' là sai."
},
{
  "type": "singlechoice",
  "content": "251. Biện chứng là phương pháp",
  "answers": [
    { "content": "Thấy cái chung mà không thấy cái riêng", "correct": false },
    { "content": "Thấy cái riêng mà không thấy cái chung", "correct": false },
    { "content": "Vừa thấy cái chung và cái riêng", "correct": true },
    { "content": "Vừa thấy cái chung, vừa thấy cái riêng và cái đơn nhất", "correct": false }
  ],
  "explanation": "Biện chứng yêu cầu nhận thức được mối quan hệ giữa cái chung và cái riêng trong sự vật, hiện tượng."
},
{
  "type": "singlechoice",
  "content": "252. Đặc điểm của quy luật triết học mang tính",
  "answers": [
    { "content": "Chung nhất, khái quát nhất về thế giới", "correct": true },
    { "content": "Cụ thể nhất, chi tiết nhất về thế giới", "correct": false },
    { "content": "Toàn diện nhất, sâu sắc nhất về thế giới", "correct": false }
  ],
  "explanation": "Các quy luật triết học có tính khái quát cao, phản ánh đặc điểm chung nhất của thế giới."
},
{
  "type": "singlechoice",
  "content": "253. Phân công lao động xã hội",
  "answers": [
    { "content": "Là một trong những nguyên nhân hình thành chủ nghĩa tư bản độc quyền", "correct": true },
    { "content": "Không dẫn đến sự hình thành tư bản độc quyền", "correct": false },
    { "content": "Nguyên nhân hình thành chủ nghĩa tư bản", "correct": false },
    { "content": "Là một trong những nguyên nhân hình thành chủ nghĩa tư bản độc quyền nhà nước", "correct": false }
  ],
  "explanation": "Phân công lao động xã hội tạo ra sự chuyên môn hoá, góp phần thúc đẩy hình thành các tổ chức độc quyền."
},
{
  "type": "singlechoice",
  "content": "254. Triết học bao gồm những quan điểm chung nhất, những sự lý giải có luận chứng cho các câu hỏi chung của con người, nên triết học bao gồm toàn bộ tri thức của nhân loại. Kết luận trên ứng với triết học thời kỳ nào?",
  "answers": [
    { "content": "Triết học cổ đại", "correct": true },
    { "content": "Triết học phục hưng", "correct": false },
    { "content": "Triết học Trung cổ - Tây Âu", "correct": false },
    { "content": "Triết học Mác - Lênin", "correct": false }
  ],
  "explanation": "Thời kỳ triết học cổ đại coi triết học là khoa học của mọi khoa học, bao quát toàn bộ tri thức."
},
{
  "type": "singlechoice",
  "content": "255. Thời gian chu chuyển của tư bản được hiểu.",
  "answers": [
    { "content": "Thời gian sản xuất + thời gian bán hàng.", "correct": false },
    { "content": "Thời gian sản xuất + thời gian lưu thông.", "correct": true },
    { "content": "Thời gian dự trữ sản xuất + thời gian lưu thông.", "correct": false },
    { "content": "Thời gian sản xuất + thời gian tiếp thị.", "correct": false }
  ],
  "explanation": "Khái niệm này thể hiện chu trình vận động của tư bản từ sản xuất đến lưu thông và quay lại."
},
{
  "type": "singlechoice",
  "content": "256. Hình thức tổ chức và cơ chế thống trị của tư bản tài chính trong CNTB ngày nay thay đổi là do:",
  "answers": [
    { "content": "Lực lượng sản xuất phát triển, nhiều ngành mới xuất hiện", "correct": true },
    { "content": "Mục đích thu lợi nhuận độc quyền", "correct": false },
    { "content": "Sự điều tiết của nhà nước", "correct": false },
    { "content": "Nhiều ngành mới ra đời với những quan hệ sản xuất mới", "correct": false }
  ],
  "explanation": "Sự phát triển của lực lượng sản xuất làm thay đổi cách thức tổ chức và cơ chế thống trị của tư bản tài chính."
},
{
  "type": "singlechoice",
  "content": "257. Loại tái sản xuất nào làm tăng sản phẩm chủ yếu do tăng năng suất lao động và hiệu quả sử dụng các nguồn lực?",
  "answers": [
    { "content": "Tái sản xuất mở rộng theo chiều rộng", "correct": false },
    { "content": "Tái sản xuất mở rộng", "correct": false },
    { "content": "Tái sản xuất mở rộng theo chiều sâu", "correct": true }
  ],
  "explanation": "Tái sản xuất theo chiều sâu dựa vào cải tiến kỹ thuật và nâng cao năng suất để tăng sản phẩm."
},
{
  "type": "singlechoice",
  "content": "258. Trong nền sản xuất hàng hóa, lạm phát là hiện tượng kinh tế tác động trực tiếp đến",
  "answers": [
    { "content": "Sản xuất và tiêu dùng", "correct": true },
    { "content": "Tuần hoàn và chu chuyển tư bản", "correct": false },
    { "content": "Tích tụ và tập trung tư bản", "correct": false }
  ],
  "explanation": "Lạm phát làm biến động giá cả, ảnh hưởng trực tiếp đến hành vi sản xuất và tiêu dùng của xã hội."
},
{
  "type": "singlechoice",
  "content": "259. Ph.Ăngghen cho rằng: đối với ai phủ nhận..thì mọi quy luật tự nhiên đều là giả thuyết.",
  "answers": [
    { "content": "Vấn đề nội dung hình thức", "correct": false },
    { "content": "Phạm trù khả năng - hiện thực", "correct": false },
    { "content": "Tính nhận quà", "correct": true },
    { "content": "Tính biện chứng", "correct": false }
  ],
  "explanation": "Câu nói của Ăngghen nhấn mạnh vai trò của việc thừa nhận tính khách quan của các quy luật tự nhiên."
},
{
  "type": "singlechoice",
  "content": "260. Khi nghiên cứu phương thức sản xuất TBCN, Mác bắt đầu từ",
  "answers": [
    { "content": "Mác bắt đầu từ", "correct": false },
    { "content": "Sản xuất hàng hoá giản đơn và hàng hoá", "correct": true },
    { "content": "Lưu thông hàng hoá", "correct": false },
    { "content": "Sản xuất giá trị thặng dư", "correct": false }
  ],
  "explanation": "Mác xuất phát từ phạm trù hàng hoá và sản xuất giản đơn để phân tích bản chất của CNTB."
},
  {
    "type": "singlechoice",
    "content": "Câu 261. Coi vận động của vật chất chỉ là biểu hiện của vận động cơ học, đó là quan điểm về vận động và vật chất của ai",
    "answers": [
      { "content": "Các nhà triết học thời kỳ cổ đại", "correct": false },
      { "content": "Các nhà triết học siêu hình", "correct": true },
      { "content": "Các nhà triết học duy vật biện chứng hiện đại", "correct": false },
      { "content": "Các nhà triết học duy vật thời kỳ cổ đại", "correct": false }
    ],
    "explanation": "Các nhà triết học siêu hình thường tuyệt đối hóa vận động cơ học, coi đó là dạng duy nhất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 262. Chọn quan niệm đúng về con người theo quan điểm toàn diện của chủ nghĩa duy vật lịch sử. Con người là",
    "answers": [
      { "content": "Thực thể vật chất tự nhiên", "correct": false },
      { "content": "Thực thể chính trị và đạo đức", "correct": false },
      { "content": "Thực thể chính trị, có tư duy và văn hóa", "correct": false },
      { "content": "Thực thể tự nhiên và xã hội", "correct": true }
    ],
    "explanation": "Con người vừa mang tính tự nhiên vừa là sản phẩm xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 263. Khẳng định nào sau đây là sai",
    "answers": [
      { "content": "Triết học Mác là sự kết hợp phép biện chứng của Hêghen và chủ nghĩa duy tâm của Phoi - ơ - bắc", "correct": true },
      { "content": "Triết học Mác có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật", "correct": false },
      { "content": "Triết học Mác kế thừa và cải tạo phép biện chứng của Hêghen trên cơ sở duy vật", "correct": false }
    ],
    "explanation": "Triết học Mác không kết hợp với duy tâm, mà khắc phục duy tâm và xây dựng duy vật biện chứng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 264. Trong thời đại ngày nay, sở hữu nhà nước ngày càng",
    "answers": [
      { "content": "Quan trọng đối với sự vận động và phát triển của chủ nghĩa tư bản", "correct": true },
      { "content": "Không quan trọng đối với sự vận động và phát triển của chủ nghĩa tư bản", "correct": false },
      { "content": "Không ảnh hưởng gì đến sự vận động và phát triển của chủ nghĩa tư bản", "correct": false }
    ],
    "explanation": "Trong chủ nghĩa tư bản hiện đại, sở hữu nhà nước giữ vai trò quan trọng để điều tiết kinh tế."
  },
  {
    "type": "singlechoice",
    "content": "Câu 265. Xác định đúng trình tự các khâu của quá trình tái sản xuất",
    "answers": [
      { "content": "Sản xuất - trao đổi - phân phối - tiêu dùng", "correct": false },
      { "content": "Trao đổi - tiêu dùng - phân phối - sản xuất", "correct": false },
      { "content": "Sản xuất - phân phối - trao đổi - tiêu dùng", "correct": true }
    ],
    "explanation": "Tái sản xuất diễn ra theo chu trình: sản xuất → phân phối → trao đổi → tiêu dùng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 266. Chọn quan điểm đúng nhất trong các quan điểm sau đây.",
    "answers": [
      { "content": "Vận động là phương thức tồn tại của vật chất", "correct": true },
      { "content": "Không gian, thời gian là những phương thức tồn tại của vật chất", "correct": false },
      { "content": "Vận động phương thức, không gian, thời gian là những hình thức tồn tại của vật chất", "correct": false }
    ],
    "explanation": "Vật chất chỉ tồn tại trong vận động, vận động là thuộc tính cố hữu của vật chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 267. Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là:",
    "answers": [
      { "content": "Đại công nghiệp tách khỏi nông nghiệp", "correct": false },
      { "content": "Trồng trọt tách khỏi chăn nuôi", "correct": false },
      { "content": "Ngành thương nghiệp ra đời", "correct": true },
      { "content": "Thủ công nghiệp tách khỏi nông nghiệp", "correct": false }
    ],
    "explanation": "Phân công lao động lần thứ ba là sự xuất hiện ngành thương nghiệp độc lập."
  },
  {
    "type": "singlechoice",
    "content": "Câu 268. Định nghĩa giai cấp của Lênin dựa vào cơ sở nào sau đây",
    "answers": [
      { "content": "Xã hội", "correct": false },
      { "content": "Kinh tế", "correct": true },
      { "content": "Chính trị", "correct": false }
    ],
    "explanation": "Lênin xác định giai cấp dựa trên địa vị trong quan hệ sản xuất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 269. Theo quan điểm của chủ nghĩa duy vật biện chứng ở động vật bậc cao có thể đạt đến hình thức phản ánh nào",
    "answers": [
      { "content": "Phản ánh ý thức", "correct": false },
      { "content": "Phản ánh tâm lý động vật", "correct": true },
      { "content": "Tỉnh kích thích", "correct": false },
      { "content": "Phản ánh sinh học", "correct": false }
    ],
    "explanation": "Động vật bậc cao có phản ánh tâm lý, là cơ sở tự nhiên của ý thức."
  },
  {
    "type": "singlechoice",
    "content": "Câu 270. Theo quan điểm của KTCT, trong tư liệu lao động bộ phận nào quyết định đến năng suất lao động?",
    "answers": [
      { "content": "Công cụ lao động", "correct": true },
      { "content": "Nguyên vật liệu cho sản xuất", "correct": false },
      { "content": "Các vật chứa đựng, bảo quản", "correct": false },
      { "content": "Kết cấu hạ tầng sản xuất", "correct": false }
    ],
    "explanation": "Công cụ lao động là yếu tố quyết định năng suất lao động."
  },
  {
    "type": "singlechoice",
    "content": "Câu 271. Quan điểm nào sau đây phản ánh đầy đủ nội dung khái niệm tồn tại xã hội",
    "answers": [
      { "content": "Tồn tại xã hội là phạm trù dùng chỉ toàn bộ điều kiện vật chất của xã hội", "correct": true },
      { "content": "Tồn tại xã hội là phạm trù dùng chi toàn bộ các giá trị tinh thần của xã hội", "correct": false },
      { "content": "Tồn tại xã hội là phạm trù dùng chỉ toàn bộ các điều kiện sinh hoạt của xã hội", "correct": false }
    ],
    "explanation": "Tồn tại xã hội gồm toàn bộ điều kiện vật chất của đời sống xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 272. Phương pháp rút ra kết quả riêng từ những kết luận chung, không tính đến sự tồn tại thực tế của sự vật, được gọi là?",
    "answers": [
      { "content": "Phương pháp quy nạp", "correct": false },
      { "content": "Phương pháp diễn dịch", "correct": false },
      { "content": "Phương pháp kinh nghiệm", "correct": false },
      { "content": "Phương pháp kinh viện", "correct": true }
    ],
    "explanation": "Phương pháp kinh viện rút ra kết luận từ cái chung mà bỏ qua thực tiễn."
  },
  {
    "type": "singlechoice",
    "content": "Câu 273. Cái do nguyên nhân cơ bản bên trong của kết cấu vật chất quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác được gọi là?",
    "answers": [
      { "content": "Tất nhiên", "correct": true },
      { "content": "Ngẫu nhiên", "correct": false },
      { "content": "Hệ quả", "correct": false },
      { "content": "Bản chất", "correct": false }
    ],
    "explanation": "Tất nhiên là cái do nguyên nhân cơ bản bên trong quyết định."
  },
  {
    "type": "singlechoice",
    "content": "Câu 274. Trong chủ nghĩa tư bản, ... quan hệ giữa giai cấp tư sản và giai cấp công nhân là quan hệ bóc lột.",
    "answers": [
      { "content": "Hình thức", "correct": false },
      { "content": "Nội dung", "correct": false },
      { "content": "Bản chất", "correct": true },
      { "content": "Hiện tượng", "correct": false }
    ],
    "explanation": "Bản chất quan hệ giữa tư sản và công nhân là bóc lột giá trị thặng dư."
  },
  {
    "type": "singlechoice",
    "content": "Câu 275. Để làm rõ vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư, tư bản được chia thành",
    "answers": [
      { "content": "Tư bản độc quyền và tư bản nhà nước", "correct": false },
      { "content": "Tư bản bất biến và tư bản khả biến", "correct": true },
      { "content": "Tư bản cố định và tư bản lưu động", "correct": false }
    ],
    "explanation": "Mác chia tư bản thành bất biến và khả biến để chỉ rõ nguồn gốc giá trị thặng dư."
  },
  {
    "type": "singlechoice",
    "content": "Câu 276. Trong xã hội phân chia giai cấp",
    "answers": [
      { "content": "Đấu tranh giai cấp là nguồn gốc và động lực vận động và phát triển xã hội", "correct": true },
      { "content": "Đấu tranh giai cấp là nguyên nhân chủ yếu của vận động và phát triển xã hội", "correct": false },
      { "content": "Đấu tranh giai cấp là động lực chủ yếu dẫn đến sự vận động và phát triển xã hội", "correct": false }
    ],
    "explanation": "Đấu tranh giai cấp là nguồn gốc, động lực cơ bản trong xã hội có giai cấp."
  },
  {
    "type": "singlechoice",
    "content": "Câu 277. Các tổ chức độc quyền sử dụng giá cả độc quyền để",
    "answers": [
      { "content": "Củng cố vai trò tổ chức độc quyền", "correct": false },
      { "content": "Chiếm đoạt giá trị thặng dư của người khác", "correct": true },
      { "content": "Gây thiệt hại cho các đối thủ cạnh tranh", "correct": false }
    ],
    "explanation": "Giá cả độc quyền là công cụ để chiếm đoạt giá trị thặng dư từ bên ngoài."
  },
  {
    "type": "singlechoice",
    "content": "Câu 278. Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử:\nTrong mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất",
    "answers": [
      { "content": "Lực lượng sản xuất là yếu tố thường xuyên biến đổi, phát triển", "correct": true },
      { "content": "Quan hệ sản xuất là yếu tố thường xuyên biến đổi, phát triển", "correct": false },
      { "content": "Cả hai đều là những yếu tố thường xuyên biến đổi, phát triển", "correct": false },
      { "content": "Không có yếu tố nào thường xuyên biến đổi, phát triển", "correct": false }
    ],
    "explanation": "Lực lượng sản xuất luôn biến đổi, quan hệ sản xuất phải phù hợp với nó."
  },
  {
    "type": "singlechoice",
    "content": "Câu 279. Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào?",
    "answers": [
      { "content": "Tư bản sản xuất.", "correct": true },
      { "content": "Tư bản tiền tệ.", "correct": false },
      { "content": "Tư bản bất biến.", "correct": false }
    ],
    "explanation": "Tư bản cố định và lưu động đều thuộc phạm trù tư bản sản xuất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 280. Theo quan điểm Mác-Lênin, chủ nghĩa cộng sản chia làm mấy giai đoạn",
    "answers": [
      { "content": "2 giai đoạn", "correct": true },
      { "content": "3 giai đoạn", "correct": false },
      { "content": "4 giai đoạn", "correct": false }
    ],
    "explanation": "Mác-Lênin phân chia chủ nghĩa cộng sản thành 2 giai đoạn: thấp và cao."
  },
  {
    "type": "singlechoice",
    "content": "Câu 281. Cơ chế kinh tế của CNTB độc quyền nhà nước gồm:",
    "answers": [
      { "content": "Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước", "correct": true },
      { "content": "Cơ chế thị trường, các nhà tài phiệt và sự điều tiết của nhà nước", "correct": false },
      { "content": "Cơ chế thị trường và độc quyền tư nhân", "correct": false }
    ],
    "explanation": "CNTB độc quyền nhà nước là sự kết hợp giữa thị trường, độc quyền tư nhân và sự can thiệp của nhà nước."
  },
  {
    "type": "singlechoice",
    "content": "Câu 282. Đâu là nội dung nguyên lý của phép biện chứng duy vật về mối liên hệ phổ biến của các sự vật và hiện tượng",
    "answers": [
      { "content": "Các sự vật và hiện tượng trong thế giới tồn tại tách rời nhau, giữa chúng không có sự phụ thuộc, ràng buộc lẫn nhau.", "correct": false },
      { "content": "Các sự vật có sự liên hệ tác động nhau nhưng không có sự chuyển hóa lẫn nhau", "correct": false },
      { "content": "Sự vật khác nhau ở vẻ bề ngoài, do chủ quan con người quy định, bản chất sự vật không có gì khác nhau", "correct": false },
      { "content": "Thế giới là một chỉnh thể thống nhất bao gồm các sự vật, các quá trình vừa tách biệt nhau, vừa có mối liên hệ qua lại với nhau, vừa thâm nhập và chuyển hóa cho nhau", "correct": true }
    ],
    "explanation": "Phép biện chứng duy vật khẳng định mọi sự vật hiện tượng đều tồn tại trong mối liên hệ phổ biến và chuyển hóa lẫn nhau."
  },
  {
    "type": "singlechoice",
    "content": "Câu 283. Giai cấp công nhân hình thành và phát triển mạnh trong xã hội nào.",
    "answers": [
      { "content": "Xã hội chiếm hữu nô lệ", "correct": false },
      { "content": "Xã hội phong kiến", "correct": false },
      { "content": "Xã hội tư bản chủ nghĩa", "correct": true },
      { "content": "Xã hội xã hội chủ nghĩa", "correct": false }
    ],
    "explanation": "Giai cấp công nhân ra đời cùng nền đại công nghiệp tư bản chủ nghĩa và phát triển mạnh trong xã hội tư bản."
  },
  {
    "type": "singlechoice",
    "content": "Câu 284. Điều kiện thực hiện tổng sản phẩm xã hội trong tái sản xuất mở rộng.",
    "answers": [
      { "content": "(c+v+m) I> cl + cl; (v+m)I + (v+m)II > (c+v+m)ll; (v + m )I >cl", "correct": false },
      { "content": "(c+v+m) I> cl + cll; (v+m)I + (v+m)ll > (c+v+m)l; (v + m )I >cll", "correct": false },
      { "content": "(c+v+m) I> cl + cll; (v+m)I + (v+m)ll > (c+v+m)ll, (v + m )l>cll", "correct": true },
      { "content": "(c+v+m) II> cl + cll; (v+m)I + (v+m)II > (c+v+m)II, (v + m)l>cll", "correct": false }
    ],
    "explanation": "Trong tái sản xuất mở rộng, sản phẩm xã hội phải phân phối hợp lý giữa các khu vực để đảm bảo phát triển liên tục."
  },
  {
    "type": "singlechoice",
    "content": "Câu 285. Công cuộc đổi mới xã hội chủ nghĩa diễn ra ở nước nào sau đây",
    "answers": [
      { "content": "Trung Quốc", "correct": false },
      { "content": "Việt Nam", "correct": true },
      { "content": "Cu Ba", "correct": false }
    ],
    "explanation": "Đổi mới xã hội chủ nghĩa được khởi xướng và thực hiện thành công ở Việt Nam từ năm 1986."
  },
  {
    "type": "singlechoice",
    "content": "Câu 286. Hai khái niệm triết học cùng với thế giới quan...",
    "answers": [
      { "content": "Là trùng nhau vì đều là hệ thống quan điểm chung về thế giới", "correct": false },
      { "content": "Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan", "correct": true },
      { "content": "Không phải mọi triết học đều là hạt nhân lý luận của thế giới quan mà chỉ có triết học Mác - Lênin mới là hạt nhân lý luận của thế giới quan", "correct": false },
      { "content": "Là hoàn toàn khác nhau", "correct": false }
    ],
    "explanation": "Triết học là hạt nhân lý luận của thế giới quan, không đồng nhất nhưng có vai trò định hướng cho thế giới quan."
  },
  {
    "type": "singlechoice",
    "content": "Câu 287. Nhà nước xã hội chủ nghĩa",
    "answers": [
      { "content": "Tôn trọng quyền tự quyết và bình đẳng giữa các dân tộc", "correct": true },
      { "content": "Không tôn trọng quyền tự quyết và bình đẳng giữa các dân tộc", "correct": false },
      { "content": "Không can thiệp vào vấn đề dân tộc", "correct": false }
    ],
    "explanation": "Nhà nước XHCN thực hiện chính sách dân tộc bình đẳng, đoàn kết và tôn trọng quyền tự quyết."
  },
  {
    "type": "singlechoice",
    "content": "Câu 288. Cạnh tranh kinh tế được hiểu là",
    "answers": [
      { "content": "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành chi phí tối đa cho mình.", "correct": false },
      { "content": "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành lợi ích tối đa cho mình.", "correct": true },
      { "content": "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành thị phần tối đa cho mình.", "correct": false },
      { "content": "Sự đấu tranh ở giữa các chủ thể kinh tế.", "correct": false }
    ],
    "explanation": "Cạnh tranh kinh tế là sự ganh đua giữa các chủ thể để giành lợi ích kinh tế tối đa."
  },
  {
    "type": "singlechoice",
    "content": "Câu 289. Trong nền sản xuất lớn hiện đại, yếu tố nào giữ vai trò quyết định của quá trình lao động sản xuất?",
    "answers": [
      { "content": "Sức lao động", "correct": true },
      { "content": "Tư liệu sản xuất hiện đại", "correct": false },
      { "content": "Công cụ sản xuất tiên tiến", "correct": false },
      { "content": "Đối tượng lao động", "correct": false }
    ],
    "explanation": "Trong sản xuất hiện đại, sức lao động của con người là yếu tố quyết định hiệu quả sản xuất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 290. Khái niệm nào dùng để chỉ khoảng giới hạn trong đó sự thay đổi về lượng chưa dẫn đến sự thay đổi căn bản về chất của sự vật ấy?",
    "answers": [
      { "content": "Lượng", "correct": false },
      { "content": "Độ", "correct": true },
      { "content": "Điểm nút", "correct": false }
    ],
    "explanation": "Độ là giới hạn mà trong đó sự thay đổi về lượng chưa làm thay đổi chất của sự vật."
  },
  {
    "type": "singlechoice",
    "content": "Câu 291. Ngày lao động của công nhân bao gồm?",
    "answers": [
      { "content": "Thời gian lao động giản đơn, thời gian lao động thặng dư.", "correct": false },
      { "content": "Thời gian lao động phức tạp, thời gian lao động thặng dư.", "correct": false },
      { "content": "Thời gian lao động cần thiết, thời gian lao động thặng dư.", "correct": true },
      { "content": "Tất cả phương án trên", "correct": false }
    ],
    "explanation": "Ngày lao động của công nhân được chia thành thời gian cần thiết và thời gian thặng dư."
  },
  {
    "type": "singlechoice",
    "content": "Câu 292. Tích lũy tư bản dẫn đến",
    "answers": [
      { "content": "Hình thành chủ nghĩa tư bản độc quyền", "correct": true },
      { "content": "Hình thành chủ nghĩa tư bản độc quyền nhà nước", "correct": false },
      { "content": "Hình thành chủ nghĩa tư bản", "correct": false }
    ],
    "explanation": "Tích lũy tư bản tập trung tư bản vào tay ít nhà tư bản, dẫn tới độc quyền tư bản."
  },
  {
    "type": "singlechoice",
    "content": "Câu 293. Cái chung chỉ tồn tại trong",
    "answers": [
      { "content": "Cái riêng", "correct": true },
      { "content": "Cái đơn nhất", "correct": false },
      { "content": "Cái cụ thể", "correct": false }
    ],
    "explanation": "Cái chung luôn biểu hiện thông qua cái riêng và tồn tại trong cái riêng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 294. Luận điểm \"Mối liên hệ nhân quả là do cảm giác con người quy định\" thuộc lập trường triết học nào?",
    "answers": [
      { "content": "Chủ nghĩa duy tâm khách quan", "correct": false },
      { "content": "Chủ nghĩa duy tâm chủ quan", "correct": true },
      { "content": "Chủ nghĩa duy vật biện chứng", "correct": false },
      { "content": "Chủ nghĩa duy vật siêu hình", "correct": false }
    ],
    "explanation": "Lập trường duy tâm chủ quan cho rằng nhân quả chỉ là sự quy định do cảm giác con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 295. Theo quan điểm của chủ nghĩa duy vật biện chứng thì đứng im là một trạng thái đặc biệt của vận động.",
    "answers": [
      { "content": "Tuyệt đối", "correct": false },
      { "content": "Trong cân bằng", "correct": true },
      { "content": "Tại chỗ", "correct": false },
      { "content": "Tỉnh tại", "correct": false }
    ],
    "explanation": "Đứng im chỉ là trạng thái tương đối của vận động, biểu hiện sự cân bằng tạm thời."
  },
  {
    "type": "singlechoice",
    "content": "Câu 296. Theo chủ nghĩa Mác - Lênin, triết học khác với các khoa học khác ở chỗ nào?",
    "answers": [
      { "content": "Tính đặc thù của hệ thống tri thức khoa học và phương pháp nghiên cứu", "correct": true },
      { "content": "Tính đặc thù của hệ thống tri thức và phương pháp nghiên cứu khoa học", "correct": false },
      { "content": "Tính đặc thù của khoa học và phương pháp nghiên cứu đặc thù", "correct": false },
      { "content": "Tính biện chứng và siêu hình", "correct": false }
    ],
    "explanation": "Triết học nghiên cứu quy luật chung nhất của thế giới và tư duy, khác biệt với khoa học cụ thể."
  },
  {
    "type": "singlechoice",
    "content": "Câu 297. Về cấu trúc, tư liệu sản xuất thuộc mặt nào trong lực lượng sản xuất?",
    "answers": [
      { "content": "Kinh tế - kỹ thuật", "correct": false },
      { "content": "Người lao động", "correct": true },
      { "content": "Nhà xưởng, máy móc", "correct": false },
      { "content": "Phương tiện thanh toán", "correct": false }
    ],
    "explanation": "Trong cấu trúc lực lượng sản xuất, người lao động với tư liệu sản xuất là yếu tố trung tâm."
  },
  {
    "type": "singlechoice",
    "content": "Câu 298. Nền tảng quan hệ giữa các cá nhân và xã hội là:",
    "answers": [
      { "content": "Lợi ích", "correct": true },
      { "content": "Pháp luật", "correct": false },
      { "content": "Đạo đức", "correct": false }
    ],
    "explanation": "Lợi ích là cơ sở của các mối quan hệ giữa cá nhân và xã hội."
  },
  {
    "type": "singlechoice",
    "content": "Câu 299. Nội dung cơ bản của cuộc đấu tranh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay là gì?",
    "answers": [
      { "content": "Thực hiện thắng lợi mục tiêu độc lập dân tộc", "correct": false },
      { "content": "Xây dựng một xã hội phát triển toàn diện", "correct": false },
      { "content": "Đảm bảo sự phát triển toàn diện cho mọi người dân", "correct": false },
      { "content": "Thực hiện thắng lợi mục tiêu độc lập dân tộc và chủ nghĩa xã hội, xây dựng một xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "correct": true }
    ],
    "explanation": "Đấu tranh giai cấp ở Việt Nam hiện nay gắn với mục tiêu độc lập dân tộc và xây dựng CNXH."
  },
  {
    "type": "singlechoice",
    "content": "Câu 300. Nếu quá đề cao triết học duy tâm sẽ dẫn đến",
    "answers": [
      { "content": "Xa rời thực tế", "correct": true },
      { "content": "Cực đoan", "correct": false },
      { "content": "Thực dụng", "correct": false }
    ],
    "explanation": "Đề cao duy tâm quá mức khiến nhận thức và hành động xa rời hiện thực khách quan."
  },
  {
  "type": "singlechoice",
  "content": "301. Phát triển là quá trình",
  "answers": [
    {
      "content": "Tiến lên theo đường vòng khép kín",
      "correct": false
    },
    {
      "content": "Tiến lên theo đường quanh co khúc khuỷu, thăng trầm, phức tạp",
      "correct": true
    },
    {
      "content": "Quá trình tiến lên theo đường thẳng tắp",
      "correct": false
    }
  ],
  "explanation": "Khái niệm phát triển được hiểu là quá trình tiến lên không tuyến tính, có thăng trầm, khúc khuỷu, phản ánh đúng tính chất biện chứng của sự vật."
},
{
  "type": "singlechoice",
  "content": "302. Khẳng định mối liên hệ giữa các sự vật, hiện tượng do sự quy định của các lực lượng siêu nhiên là quan điểm của",
  "answers": [
    {
      "content": "Chủ nghĩa duy tâm chủ quan",
      "correct": false
    },
    {
      "content": "Chủ nghĩa duy tâm khách quan",
      "correct": true
    },
    {
      "content": "Chủ nghĩa duy vật siêu hình",
      "correct": false
    }
  ],
  "explanation": "Chủ nghĩa duy tâm khách quan cho rằng mối liên hệ trong thế giới do các lực lượng siêu nhiên hoặc tinh thần tuyệt đối chi phối."
},
{
  "type": "singlechoice",
  "content": "303. Vấn đề cơ bản của triết học gồm hai mặt đó là",
  "answers": [
    {
      "content": "Bản thể luận và nhận thức luận",
      "correct": true
    },
    {
      "content": "Lý luận và thực tiễn",
      "correct": false
    },
    {
      "content": "Tri thức và chân lý",
      "correct": false
    }
  ],
  "explanation": "Hai mặt cơ bản của vấn đề triết học là mặt bản thể luận (quan hệ vật chất - ý thức) và mặt nhận thức luận (khả năng nhận thức thế giới)."
},
{
  "type": "singlechoice",
  "content": "304. Phương pháp luận là lý luận chung về",
  "answers": [
    {
      "content": "Phương pháp",
      "correct": true
    },
    {
      "content": "Giải pháp",
      "correct": false
    },
    {
      "content": "Phương châm",
      "correct": false
    }
  ],
  "explanation": "Phương pháp luận nghiên cứu các nguyên tắc chung chỉ đạo việc xây dựng và vận dụng phương pháp."
},
{
  "type": "singlechoice",
  "content": "305. Tác phẩm nào được xem là đánh dấu cho sự chín muồi về tư tưởng xã hội chủ nghĩa của Mác và Ăng-ghen",
  "answers": [
    {
      "content": "Gia đình thần thánh (1842)",
      "correct": false
    },
    {
      "content": "Hệ tư tưởng Đức (1842)",
      "correct": false
    },
    {
      "content": "Tuyên ngôn của Đảng cộng sản (1848)",
      "correct": true
    }
  ],
  "explanation": "Tuyên ngôn của Đảng Cộng sản (1848) là tác phẩm tiêu biểu, khẳng định sự chín muồi của tư tưởng xã hội chủ nghĩa khoa học."
},
{
  "type": "singlechoice",
  "content": "306. Triết học duy vật biện chứng là sự thống nhất giữa",
  "answers": [
    {
      "content": "Thế giới quan duy vật và phương pháp luận biện chứng",
      "correct": true
    },
    {
      "content": "Nhân sinh quan duy vật và phương pháp luận biện chứng",
      "correct": false
    },
    {
      "content": "Thế giới quan duy vật và phương pháp luận siêu hình",
      "correct": false
    }
  ],
  "explanation": "Triết học duy vật biện chứng kết hợp thế giới quan duy vật với phương pháp luận biện chứng, tạo thành hệ thống khoa học."
},
{
  "type": "singlechoice",
  "content": "307. Biện chứng là phương pháp của khoa học nào sau đây",
  "answers": [
    {
      "content": "Triết học",
      "correct": true
    },
    {
      "content": "Đạo đức học",
      "correct": false
    },
    {
      "content": "Chính trị học",
      "correct": false
    }
  ],
  "explanation": "Biện chứng là phương pháp đặc thù của triết học, dùng để nhận thức sự vận động, phát triển trong thế giới."
},
{
  "type": "singlechoice",
  "content": "308. Triết học duy tâm khách quan và triết học duy tâm chủ quan đều có điểm chung là",
  "answers": [
    {
      "content": "Đề cao lĩnh vực tinh thần của con người",
      "correct": true
    },
    {
      "content": "Đề cao lĩnh vực vật chất và tinh thần của con người",
      "correct": false
    },
    {
      "content": "Đề cao đời sống tâm linh của con người",
      "correct": false
    }
  ],
  "explanation": "Cả hai trường phái duy tâm đều xem tinh thần là yếu tố quyết định, chỉ khác nhau ở cách giải thích."
},
{
  "type": "singlechoice",
  "content": "309. Giữa phạm trù triết học và phạm trù của các khoa học khác có mối quan hệ biện chứng với nhau. Mối quan hệ đó là",
  "answers": [
    {
      "content": "Quan hệ giữa bản chất và hiện tượng",
      "correct": false
    },
    {
      "content": "Quan hệ giữa cái chung và cái riêng",
      "correct": true
    },
    {
      "content": "Quan hệ giữa nội dung và hình thức",
      "correct": false
    }
  ],
  "explanation": "Phạm trù triết học mang tính khái quát nhất (cái chung), còn phạm trù các khoa học cụ thể phản ánh cái riêng."
},
{
  "type": "singlechoice",
  "content": "310. Sự vật mới ra đời bao giờ cũng trên cơ sở những cái đã có của sự vật cũ, qua đó tiến hành chọn lọc những cái tích cực, tiến bộ, phù hợp để tiếp tục phát triển. Điều này thể hiện tính chất gì của sự phát triển",
  "answers": [
    {
      "content": "Tính kế thừa",
      "correct": true
    },
    {
      "content": "Tính lặp đi lặp lại",
      "correct": false
    },
    {
      "content": "Tính tiến lên",
      "correct": false
    }
  ],
  "explanation": "Quy luật phát triển thể hiện ở chỗ cái mới kế thừa và phát triển từ cái cũ trên cơ sở chọn lọc yếu tố tích cực."
},
{
  "type": "singlechoice",
  "content": "311. Mác đã kế thừa \"hạt nhân hợp lý\" trong triết học của ông để xây dựng phép biện chứng duy vật. Ông là ai?",
  "answers": [
    {
      "content": "Phơ bách",
      "correct": false
    },
    {
      "content": "Platon",
      "correct": false
    },
    {
      "content": "Hê ghen",
      "correct": true
    }
  ],
  "explanation": "Mác kế thừa phép biện chứng của Hêghen nhưng cải tạo nó thành phép biện chứng duy vật."
},
{
  "type": "singlechoice",
  "content": "312. Hạt nhân hợp lý của thế giới quan khoa học là chủ nghĩa nào?",
  "answers": [
    {
      "content": "Duy vật",
      "correct": false
    },
    {
      "content": "Mác",
      "correct": false
    },
    {
      "content": "Duy vật biện chứng",
      "correct": true
    },
    {
      "content": "Lênin",
      "correct": false
    }
  ],
  "explanation": "Chủ nghĩa duy vật biện chứng được coi là hạt nhân hợp lý của thế giới quan khoa học."
},
{
  "type": "singlechoice",
  "content": "313. Theo sự phát triển của xã hội, thứ tự phát triển của các hình thức cộng đồng trong lịch sử là",
  "answers": [
    {
      "content": "Thị tộc - Bộ lạc - Bộ tộc - Dân tộc",
      "correct": true
    },
    {
      "content": "Thị tộc - Bộ tộc - Bộ lạc - Dân tộc",
      "correct": false
    },
    {
      "content": "Dân tộc - Thị tộc - Bộ lạc - Bộ tộc",
      "correct": false
    }
  ],
  "explanation": "Lịch sử xã hội loài người phát triển qua các hình thức cộng đồng từ thị tộc, bộ lạc, bộ tộc cho đến dân tộc."
},
{
  "type": "singlechoice",
  "content": "314. Theo quan điểm của Triết học Mác-Lênin, có thể định nghĩa về vật chất như sau:",
  "answers": [
    {
      "content": "Vật chất là những chất tạo nên vũ trụ",
      "correct": false
    },
    {
      "content": "Vật chất là tồn tại khách quan",
      "correct": false
    },
    {
      "content": "Vật chất là thực tại khách quan",
      "correct": true
    }
  ],
  "explanation": "Định nghĩa của Lênin: Vật chất là thực tại khách quan, tồn tại độc lập với ý thức và được ý thức phản ánh."
},
{
  "type": "singlechoice",
  "content": "315. Vật chất là tất cả những gì",
  "answers": [
    {
      "content": "Tồn tại một cách cụ thể, có thể nhìn thấy",
      "correct": false
    },
    {
      "content": "Tồn tại vô hình, thần bí ở bên ngoài thế giới khách quan",
      "correct": false
    },
    {
      "content": "Tồn tại ở bên ngoài ý thức, được ý thức con người phản ánh",
      "correct": true
    },
    {
      "content": "Tồn tại vô hình, không thể nhìn thấy",
      "correct": false
    }
  ],
  "explanation": "Vật chất tồn tại khách quan, không phụ thuộc vào ý thức con người nhưng được ý thức phản ánh."
},
{
  "type": "singlechoice",
  "content": "316. Vấn đề cơ bản của triết học là",
  "answers": [
    {
      "content": "Quan hệ giữa vật chất và ý thức",
      "correct": true
    },
    {
      "content": "Quan hệ giữa khách quan và chủ quan",
      "correct": false
    },
    {
      "content": "Quan hệ giữa thực tiễn và lí luận",
      "correct": false
    }
  ],
  "explanation": "Câu hỏi triết học cơ bản chính là xem xét mối quan hệ giữa vật chất và ý thức."
},
{
  "type": "singlechoice",
  "content": "317. Kết cấu của ý thức theo chiều dọc thì bao gồm",
  "answers": [
    {
      "content": "Tự ý thức, tiềm thức, vô thức",
      "correct": false
    },
    {
      "content": "Tự ý thức, tri thức, tiềm thức, vô thức",
      "correct": false
    },
    {
      "content": "Các phương án trả lời đều sai",
      "correct": true
    }
  ],
  "explanation": "Trong triết học Mác - Lênin, ý thức được phân tích theo nhiều chiều cạnh, không chỉ đơn giản như các phương án trên."
},
{
  "type": "singlechoice",
  "content": "318. Định nghĩa vật chất của Lênin được viết trong tác phẩm:",
  "answers": [
    {
      "content": "Bút ký triết học",
      "correct": false
    },
    {
      "content": "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
      "correct": true
    },
    {
      "content": "Chủ nghĩa đế quốc - giai đoạn tột cùng của chủ nghĩa tư bản",
      "correct": false
    },
    {
      "content": "Làm gì?",
      "correct": false
    }
  ],
  "explanation": "Trong tác phẩm 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' (1909), Lênin đã đưa ra định nghĩa nổi tiếng về vật chất."
},
{
  "type": "singlechoice",
  "content": "319. Nền tảng lý luận của chủ nghĩa Mác-Lênin là",
  "answers": [
    {
      "content": "Triết học",
      "correct": true
    },
    {
      "content": "Kinh tế chính trị học",
      "correct": false
    },
    {
      "content": "Chủ nghĩa xã hội khoa học",
      "correct": false
    }
  ],
  "explanation": "Triết học Mác-Lênin đóng vai trò là nền tảng lý luận, định hướng cho kinh tế chính trị học và chủ nghĩa xã hội khoa học."
},
{
  "type": "singlechoice",
  "content": "320. Bản chất của triết học duy tâm như thế nào",
  "answers": [
    {
      "content": "Đi ngược lại với khoa học",
      "correct": false
    },
    {
      "content": "Không hoàn toàn phản khoa học",
      "correct": true
    },
    {
      "content": "Rất khoa học",
      "correct": false
    }
  ],
  "explanation": "Triết học duy tâm không phải hoàn toàn phản khoa học, nhưng có hạn chế cơ bản là tuyệt đối hóa vai trò tinh thần."
},
   {
    "type": "singlechoice",
    "content": "Câu 321. Quan điểm nào sau đây đúng nhất",
    "answers": [
      {
        "content": "Phạm trù là những thực thể ý niệm, tồn tại bên ngoài và độc lập với ý thứ",
        "correct": false
      },
      {
        "content": "B. Phạm trù là những từ trống rỗng, do con người tưởng tượng ra, không biểu hiện một cái gì của hiện thự",
        "correct": true
      },
      {
        "content": "Phạm trù là kết quả của quá trình nhận thức, là hình ảnh chủ quan của thế giới khách quan.",
        "correct": true
      }
    ],
    "explanation": "Lưu ý: đề gốc đánh dấu cả phương án 2 và 3 là đúng (mâu thuẫn). Theo quan điểm triết học Mác-Lênin, phương án hợp lý là 3 — phạm trù là khái niệm do nhận thức tạo ra để phản ánh những mặt chung, cơ bản của hiện thực. Nếu đề ghi phương án 2 là đúng thì đó là nhầm lẫn."
  },
  {
    "type": "singlechoice",
    "content": "Câu 322. Tất nhiên là phạm trù triết học dùng để chỉ",
    "answers": [
      {
        "content": "Những gì đang tồn tại và phát triển",
        "correct": false
      },
      {
        "content": "Những gì sẽ xuất hiện do nguyên nhân bên trong quyết định",
        "correct": true
      },
      {
        "content": "Những gì sẽ xuất hiện trong thực tế",
        "correct": false
      }
    ],
    "explanation": "Tất nhiên (necessity) chỉ những gì xảy ra do nguyên nhân cơ bản, nội tại của kết cấu sự vật; khi các điều kiện nội tại hội tụ thì sự kiện đó phải xảy ra."
  },
  {
    "type": "singlechoice",
    "content": "Câu 323. Quan điểm nào cho rằng sự phát triển chỉ là sự tăng, giảm đơn thuần về mặt lượng, không có sự thay đổi về chất",
    "answers": [
      {
        "content": "Quan điểm duy vật",
        "correct": false
      },
      {
        "content": "Quan điểm duy tâm",
        "correct": false
      },
      {
        "content": "Quan điểm siêu hình",
        "correct": true
      }
    ],
    "explanation": "Quan điểm siêu hình (phi-biện chứng) xem sự biến đổi chỉ là thay đổi đơn thuần về lượng, phủ nhận khả năng chuyển hoá lượng → chất; phép biện chứng bác bỏ quan điểm này."
  },
  {
    "type": "singlechoice",
    "content": "Câu 324. Thuộc tính cơ bản được Lênin rút ra trong định nghĩa phạm trù vật chất là",
    "answers": [
      {
        "content": "Thực tại khách quan",
        "correct": true
      },
      {
        "content": "Thực tế khách quan",
        "correct": false
      },
      {
        "content": "Tồn tại khách quan",
        "correct": false
      }
    ],
    "explanation": "Lênin nhấn mạnh vật chất là thực tại khách quan — tức là tồn tại độc lập và khách quan ngoài ý thức con người, đây là thuộc tính cơ bản trong định nghĩa của ông."
  },
  {
    "type": "singlechoice",
    "content": "Câu 325. Chủ nghĩa Mác-Lênin ra đời vào khoảng thời gian nào",
    "answers": [
      {
        "content": "Giữa thế kỷ XIX",
        "correct": true
      },
      {
        "content": "Đầu thế kỷ XIX",
        "correct": false
      },
      {
        "content": "Đầu thế kỷ XX",
        "correct": false
      },
      {
        "content": "Cuối thế kỷ XIX",
        "correct": false
      }
    ],
    "explanation": "Chủ nghĩa Mác (cơ sở triết học và kinh tế) được hình thành giữa thế kỷ XIX; về phát triển thành Mác-Lênin là quá trình tiếp nối từ đó, nên mốc 'giữa thế kỷ XIX' là phù hợp."
  },
  {
    "type": "singlechoice",
    "content": "Câu 326. Cặp phạm trù nguyên nhân, kết quả chỉ ra",
    "answers": [
      {
        "content": "Một kết quả có thể được tạo ra bởi nhiều nguyên nhân khác nhau",
        "correct": true
      },
      {
        "content": "Một kết quả chỉ được tạo ra bởi một nguyên nhân cơ bản",
        "correct": false
      },
      {
        "content": "Các phương án trả lời đều sai",
        "correct": false
      }
    ],
    "explanation": "Quan hệ nhân-quả mang tính phong phú: một kết quả thường là hệ quả của nhiều nguyên nhân kết hợp, có nguyên nhân chủ yếu và các nguyên nhân phụ trợ."
  },
  {
    "type": "singlechoice",
    "content": "Câu 327. Tính chất phong phú, đa dạng trong quan hệ nhân quả thể hiện ở chỗ một kết quả có thể do:",
    "answers": [
      {
        "content": "Một nguyên nhân sinh ra",
        "correct": false
      },
      {
        "content": "Nhiều nguyên nhân khác nhau sinh ra",
        "correct": true
      },
      {
        "content": "Các phương án trà lời đêu sai",
        "correct": false
      }
    ],
    "explanation": "Nhấn mạnh rằng nguyên nhân-kết quả không đơn giản, một kết quả thường do nhiều nguyên nhân phối hợp (đa dạng về loại, mức độ, thời điểm)."
  },
  {
    "type": "singlechoice",
    "content": "Câu 328. Theo Ăng-ghen, có thể chia vận động thành:",
    "answers": [
      {
        "content": "Bốn hình thức vận động cơ bản",
        "correct": false
      },
      {
        "content": "Năm hình thức vận động cơ bản",
        "correct": true
      },
      {
        "content": "Sáu hình thức vận động cơ bản",
        "correct": false
      }
    ],
    "explanation": "Ăngghen nêu ra nhiều hình thức vận động cơ bản của vật chất; trong truyền thống triết học Mác-Lênin người ta thường nói đến 5 hình thức vận động cơ bản (ví dụ: vận động cơ học, vật lý, hóa học, sinh học, xã hội)."
  },
  {
    "type": "singlechoice",
    "content": "Câu 329. Mối liên hệ nhân quả có các tính chất cơ bản nào sau đây",
    "answers": [
      {
        "content": "Tính khách quan, tính phổ biến, tính đa dạng.",
        "correct": true
      },
      {
        "content": "Tính khách quan, tính phổ biến, kế thừ",
        "correct": false
      },
      {
        "content": "Tính khách quan, tính phổ biến, tính tất yếu.",
        "correct": false
      }
    ],
    "explanation": "Quan hệ nhân-quả: khách quan (không phụ thuộc ý thức), phổ biến (xảy ra ở nhiều hiện tượng), và đa dạng (có nhiều dạng, mức độ khác nhau)."
  },
  {
    "type": "singlechoice",
    "content": "Câu 330. Phạm trù triết học nào dùng để chỉ tính quy định khách quan vốn có của sự vật và hiện tượng, sự thống nhất hữu cơ của các thuộc tính làm cho nó là nó mà không phải là cái khác",
    "answers": [
      {
        "content": "Bước nhảy",
        "correct": false
      },
      {
        "content": "Lượng",
        "correct": false
      },
      {
        "content": "Chất",
        "correct": true
      }
    ],
    "explanation": "Phạm trù 'chất' dùng để chỉ bản chất, tính quy định nội tại của sự vật — những thuộc tính làm nên nó khác với vật khác."
  },
  {
    "type": "singlechoice",
    "content": "Câu 331. Khẳng định nào sau đây là đúng?",
    "answers": [
      {
        "content": "Mỗi sự vật cụ thể được đặc trưng bằng nhiều hình thức vận động",
        "correct": false
      },
      {
        "content": "Hình thức vận động cao luôn bao hàm các hình thức vận động thấp, nhưng không có chiều ngược lại",
        "correct": true
      },
      {
        "content": "Có sự vật không vận động",
        "correct": false
      },
      {
        "content": "Có thể quy hình thức vận động cao về hình thức vận động thấp và ngược lại",
        "correct": false
      }
    ],
    "explanation": "Trong phép biện chứng, hình thức vận động cao hơn bao hàm và phát triển từ các hình thức thấp hơn (ví dụ, vận động sống bao hàm các vận động vật lý-hóa học), nên chiều tiến hóa là từ thấp lên cao."
  },
  {
    "type": "singlechoice",
    "content": "Câu 332. Chọn phương án phản ánh quan điểm Mác-Lênin",
    "answers": [
      {
        "content": "Trong giới hạn của độ, lượng của sự vật thay đổi nhưng chất của sự vật chưa thay đổi cơ bản",
        "correct": false
      },
      {
        "content": "Trong giới hạn của độ, sự thay đổi về lượng hoàn toàn không làm ảnh hưởng tới sự thay đổi chất của sự vật",
        "correct": true
      },
      {
        "content": "Bước nhảy là sự thay đổi về lượng của sự vật",
        "correct": false
      },
      {
        "content": "Sự thay đổi về lượng sẽ làm thay đổi ngay lập tức chất của sự vật",
        "correct": false
      }
    ],
    "explanation": "Ý cơ bản: trong phạm vi 'độ' (tiêu chuẩn/ngưỡng), những biến đổi về lượng chưa đủ để làm thay đổi bản chất (chất) — tức chưa đạt điểm nút để xảy ra chuyển hóa lượng → chất."
  },
  {
    "type": "singlechoice",
    "content": "Câu 333. Quan điểm toàn diện yêu cầu",
    "answers": [
      {
        "content": "Phải xem xét tất cả các mối liên hệ, đồng thời phân loại được vị trí, vai trò của các mối liên hệ.",
        "correct": true
      },
      {
        "content": "Xem xét tất cả các mối liên hệ, lấy mối liên hệ thứ yếu làm mối liên hệ chủ yếu, không cơ bản làm cơ bản.",
        "correct": false
      },
      {
        "content": "Xem xét tất cả các mối liên hệ và coi vị trí, vai trò của các mối liên hệ đó là như nhau.",
        "correct": false
      },
      {
        "content": "Chỉ xem xét những mối liên hệ đóng vai trò quyết định sự tồn tại và phát triển của sự vật.",
        "correct": false
      }
    ],
    "explanation": "Quan điểm toàn diện đòi hỏi nhìn nhận mọi mối liên hệ, đồng thời xác định thứ tự ưu tiên, vai trò của từng mối liên hệ (không coi tất cả như bằng nhau)."
  },
  {
    "type": "singlechoice",
    "content": "Câu 334. Vật chất là tất cả những gì",
    "answers": [
      {
        "content": "Chỉ có một thế giới duy nhất là thế giới vật chất",
        "correct": false
      },
      {
        "content": "Mọi bộ phận của thế giới vật chất đều liên hệ chuyển hóa lẫn nhau",
        "correct": false
      },
      {
        "content": "Thế giới vật chất tồn tại vĩnh viễn, khách quan, vô hạn, vô tận, không do ai sinh ra và không mất đi",
        "correct": false
      },
      {
        "content": "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau",
        "correct": true
      }
    ],
    "explanation": "Phương án được chọn nhấn mạnh rằng thế giới vật chất có các bộ phận riêng biệt (các hệ, sự vật cụ thể); đồng thời triết học Mác-Lênin cũng khẳng định các bộ phận ấy liên hệ với nhau."
  },
  {
    "type": "singlechoice",
    "content": "Câu 335. Chọn phương án đúng theo quan điểm của triết học Mác Lênin",
    "answers": [
      {
        "content": "Mâu thuẫn biện chứng là sự liên hệ, tác động qua lại giữa các mặt đối lập",
        "correct": true
      },
      {
        "content": "Trong tư duy không có mâu thuẫn biện chứng",
        "correct": false
      },
      {
        "content": "Cứ hai mặt đối lập là tạo thành một mâu thuẫn biện chứng",
        "correct": false
      },
      {
        "content": "Mâu thuẫn biện chứng trong tư duy độc lập với mâu thuẫn trong hiện thực",
        "correct": false
      }
    ],
    "explanation": "Mâu thuẫn biện chứng là mối quan hệ thống nhất nhưng đấu tranh giữa các mặt đối lập; đó là nguồn động lực của sự vận động và phát triển."
  },
  {
    "type": "singlechoice",
    "content": "Câu 336. Chọn phương án đúng theo quan điểm triết học Mác- Lênin",
    "answers": [
      {
        "content": "Lượng của sự vật luôn được diễn tả bằng những con số chính xác",
        "correct": false
      },
      {
        "content": "Có những lượng không biểu thị yếu tố nào của sự vật",
        "correct": false
      },
      {
        "content": "Mỗi sự vật chỉ có một lượng",
        "correct": false
      },
      {
        "content": "Có những lượng biểu thị yếu tố quy định kết cấu bên trong sự vật",
        "correct": true
      }
    ],
    "explanation": "Một số lượng (ví dụ tỷ lệ, mật độ, trình độ) phản ánh kết cấu nội tại, tính chất quy định bên trong sự vật — đây là ý nghĩa lượng trong phép biện chứng."
  },
  {
    "type": "singlechoice",
    "content": "Câu 337. Quy luật bao giờ cũng mang tính",
    "answers": [
      {
        "content": "Khách quan",
        "correct": true
      },
      {
        "content": "Chủ quan",
        "correct": false
      },
      {
        "content": "Cả khách quan và chủ quan",
        "correct": false
      },
      {
        "content": "Các phương án trả lời đều sai",
        "correct": false
      }
    ],
    "explanation": "Quy luật là biểu hiện của mối quan hệ khách quan giữa các sự vật hiện tượng, tồn tại độc lập với ý thức con người."
  },
  {
    "type": "singlechoice",
    "content": "Câu 338. Luận điểm nào sau đây là đúng?",
    "answers": [
      {
        "content": "Chất mới của sự vật ra đời không tác động trở lại lượng của sự vật",
        "correct": false
      },
      {
        "content": "Chất mới ra đời chỉ làm thay đổi kết cấu nhưng không làm thay đổi quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật",
        "correct": false
      },
      {
        "content": "Chất mới ra đời có thể làm thay đổi kết cấu, quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật",
        "correct": true
      },
      {
        "content": "Chất mới ra đời chỉ làm thay đổi quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật nhưng không làm thay đổi kết cấu của sự vật",
        "correct": false
      }
    ],
    "explanation": "Khi chất mới xuất hiện, nó thường tác động trở lại làm thay đổi kết cấu, quy mô và nhịp độ vận động của sự vật — chất mới có tác động toàn diện."
  },
  {
    "type": "singlechoice",
    "content": "Câu 339. Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
    "answers": [
      {
        "content": "Nguyên nhân là cái sản sinh ra kết quả",
        "correct": true
      },
      {
        "content": "Mọi sự kế tiếp nhau về mặt thời gian đều là quan hệ nhân quả",
        "correct": false
      },
      {
        "content": "Nguyên nhân tác động đến kết quả",
        "correct": false
      },
      {
        "content": "Cái xuất hiện trước luôn là nguyên nhân của cái xuất hiện sau",
        "correct": false
      }
    ],
    "explanation": "Nguyên nhân là yếu tố sinh ra kết quả; không phải mọi sự kế tiếp về thời gian đều là quan hệ nhân-quả (phải có quan hệ quy định)."
  },
  {
    "type": "singlechoice",
    "content": "Câu 340. Tính quy định nói lên quy mô, trình độ phát triển của sự vật gọi là gì?",
    "answers": [
      {
        "content": "Bước nhảy",
        "correct": false
      },
      {
        "content": "Độ",
        "correct": false
      },
      {
        "content": "Lượng",
        "correct": true
      },
      {
        "content": "Chất",
        "correct": false
      }
    ],
    "explanation": "Phạm trù 'lượng' chỉ quy mô, trình độ, mức độ phát triển của sự vật; lượng thay đổi là yếu tố quyết định khi đạt tới điểm nút có thể dẫn đến thay đổi chất."
  },
  {
  "type": "singlechoice",
  "content": "341. Yếu tố cách mạng nhất trong lực lượng sản xuất là:",
  "answers": [
    { "content": "Phương tiện lao động", "correct": false },
    { "content": "Người lao động", "correct": false },
    { "content": "Đối tượng lao động", "correct": false },
    { "content": "Công cụ lao động", "correct": true }
  ],
  "explanation": "Công cụ lao động luôn cải tiến, cách mạng hóa phương thức sản xuất, do đó là yếu tố cách mạng nhất."
},
{
  "type": "singlechoice",
  "content": "342. Cách thức của sự phát triển là",
  "answers": [
    { "content": "Đấu tranh của các mặt đối lập để giải quyết mâu thuẫn", "correct": false },
    { "content": "Sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại", "correct": true },
    { "content": "Hai lần phủ định", "correct": false }
  ],
  "explanation": "Sự phát triển diễn ra qua bước nhảy về chất do sự thay đổi dần dần về lượng tích lũy đủ."
},
{
  "type": "singlechoice",
  "content": "343. Quy luật xã hội nào giữ vai trò quyết định nhất đối với sự vận động, phát triển của xã hội?",
  "answers": [
    { "content": "Quy luật tồn tại xã hội quyết định ý thức xã hội", "correct": false },
    { "content": "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất", "correct": true },
    { "content": "Quy luật đấu tranh giai cấp", "correct": false },
    { "content": "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng", "correct": false }
  ],
  "explanation": "Quan hệ sản xuất phù hợp với lực lượng sản xuất là nhân tố quyết định sự phát triển xã hội."
},
{
  "type": "singlechoice",
  "content": "344. Nguồn gốc lý luận trực tiếp của triết học Mác là",
  "answers": [
    { "content": "Triết học Hy Lạp cổ đại", "correct": false },
    { "content": "Triết học cổ điển Đức", "correct": true },
    { "content": "Triết học tây Âu trung cổ", "correct": false }
  ],
  "explanation": "Triết học cổ điển Đức (Hegel, Feuerbach) là nguồn gốc lý luận trực tiếp của triết học Mác."
},
{
  "type": "singlechoice",
  "content": "345. Theo triết học Mác-Lênin, khẳng định nào sau đây là đúng?",
  "answers": [
    { "content": "Ý thức là sự phản ánh hiện thực khách quan theo nhu cầu nhận thức của con người", "correct": false },
    { "content": "Ý thức là hình ảnh chủ quan của thế giới khách quan, là tinh thần so với thế giới vật chất.", "correct": true },
    { "content": "Ý thức con người mang tính năng động sáng tạo lại hiện thực theo nhu cầu của nhận thứ", "correct": false },
    { "content": "Ý thức là quá trình phản ánh hiện thực khách quan vào trong bộ óc con người một cách đơn giản, nguyên xi", "correct": false }
  ],
  "explanation": "Ý thức là hình ảnh chủ quan của thế giới khách quan, phản ánh một cách năng động sáng tạo."
},
{
  "type": "singlechoice",
  "content": "346. Luận điểm nào sau đây là đúng?",
  "answers": [
    { "content": "Nguyên nhân giống nhau tác động trong những điều kiện giống nhau cũng có thể đưa đến kết quả khác nhau", "correct": false },
    { "content": "Nguyên nhân khác nhau tác động trong những điều kiện như nhau luôn đưa đến kết quả như nhau", "correct": false },
    { "content": "Nguyên nhân tác động trong những điều kiện và hoàn cảnh càng ít khác nhau bao nhiêu thì kết quả do chúng gây ra càng giống nhau bấy nhiêu", "correct": true },
    { "content": "Nguyên nhân giống nhau tác động trong những điều kiện khác nhau có thể đưa đến kết quả như nhau", "correct": false }
  ],
  "explanation": "Kết quả phụ thuộc cả nguyên nhân và điều kiện, điều kiện càng giống thì kết quả càng tương tự."
},
{
  "type": "singlechoice",
  "content": "347. Chọn phương án phản ánh quan điểm của chủ nghĩa duy tâm",
  "answers": [
    { "content": "Ý thức là thực thể độc lập, sáng tạo ra vật chất", "correct": true },
    { "content": "Ý thức là sự phản ánh nguyên xi hiện thực khách quan vào bộ óc con người.", "correct": false },
    { "content": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan vào bộ óc con người", "correct": false },
    { "content": "Ýthức là sự phản ánh thụ động hiện thực khách quan vào bộ óc con người.", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy tâm cho rằng ý thức có trước và quyết định vật chất."
},
{
  "type": "singlechoice",
  "content": "348. Khẳng định nào sau đây là đúng?",
  "answers": [
    { "content": "Có sự vật không vận động", "correct": false },
    { "content": "Hình thức vận động cao luôn bao hàm các hình thức vận động thấp, nhưng không có chiều ngược lại", "correct": true },
    { "content": "Mỗi sự vật cụ thể được đặc trưng bằng nhiều hình thức vận động", "correct": false },
    { "content": "Có thể quy hình thức vận động cao về hình thức vận động thấp và ngược lại", "correct": false }
  ],
  "explanation": "Vận động là phổ biến, hình thức vận động cao bao hàm hình thức thấp nhưng không ngược lại."
},
{
  "type": "singlechoice",
  "content": "349. Luận điểm nào không phải là câu trả lời của chủ nghĩa Mác-lênin về tính thống nhất vật chất của thế giới?",
  "answers": [
    { "content": "Mọi bộ phận của thế giới vật chất đều liên hệ chuyển hóa lẫn nhau", "correct": false },
    { "content": "Chỉ có một thế giới duy nhất là thế giới vật chất", "correct": false },
    { "content": "Thế giới vật chất tồn tại vĩnh viễn, khách quan, vô hạn, vô tận, không do ai sinh ra và không mất đi", "correct": false },
    { "content": "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau", "correct": true }
  ],
  "explanation": "Chủ nghĩa Mác khẳng định sự thống nhất, liên hệ phổ biến, không phải tách biệt."
},
{
  "type": "singlechoice",
  "content": "350. \"Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa phong kiến, cái cối xay chạy bằng máy hơi nước đưa xã hội có nhà tư bản công nghiệp\". Thí dụ này nêu bật vai trò quyết định của yếu tố nào?",
  "answers": [
    { "content": "Đối tượng lao động", "correct": false },
    { "content": "Lực lượng sản xuất", "correct": false },
    { "content": "Tư liệu sản xuất", "correct": false },
    { "content": "Công cụ lao động", "correct": true }
  ],
  "explanation": "Công cụ lao động quyết định trình độ phát triển lực lượng sản xuất và phương thức sản xuất."
},
{
  "type": "singlechoice",
  "content": "351. Mỗi sự vật trong điều kiện xác định:",
  "answers": [
    { "content": "Chỉ có một thuộc tính xác định", "correct": false },
    { "content": "Có một số thuộc tính xác định", "correct": false },
    { "content": "Có vô văn thuộc tỉnh xác định", "correct": false },
    { "content": "Có một hoặc một số thuộc tính xác định", "correct": true }
  ],
  "explanation": "Mỗi sự vật cụ thể được đặc trưng bởi một hoặc một số thuộc tính nhất định trong hoàn cảnh cụ thể."
},
{
  "type": "singlechoice",
  "content": "352. Theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? \"Điều kiện sinh hoạt vật chất của xã hội biến đổi đến đâu thì ngay lập tức tâm lý xã hội và hệ tư tưởng xã hội cũng lập tức biến đổi đến đó\"",
  "answers": [
    { "content": "Đúng. Vì tồn tại xã hội nào thì ý thức xã hội đó", "correct": false },
    { "content": "Đúng. Vì ý thức xã hội chỉ là sự phản ánh tồn tại xã hội", "correct": false },
    { "content": "Sai. Vì ý thức xã hội phụ thuộc vào tồn tại xã hội nhưng nó có tính độc lập tương đối của nó", "correct": true },
    { "content": "Sai. Vì thực tế lịch sử cho thấy không phải như vậy", "correct": false }
  ],
  "explanation": "Ý thức xã hội phụ thuộc vào tồn tại xã hội nhưng biến đổi không đồng thời, có tính độc lập tương đối."
},
{
  "type": "singlechoice",
  "content": "353. \"Phải giải thích ý thức xã hội bằng những mâu thuẫn, những sự xung đột hiện có giữa lực lượng sản xuất và quan hệ sản xuất của xã hội\". Luận điểm này nhấn mạnh điểm nào?",
  "answers": [
    { "content": "Vai trò chi phối của phương thức sản xuất đối với ý thức xã hội", "correct": true },
    { "content": "Vai trò của cơ sở hạ tầng đối với kiến trúc thượng tầng", "correct": false },
    { "content": "Vai trò quyết định của ý thức xã hội đối với tồn tại xã hội", "correct": false },
    { "content": "Vai trò quyết định của tồn tại xã hội đối với ý thức xã hội", "correct": false }
  ],
  "explanation": "Ý thức xã hội chịu sự chi phối của phương thức sản xuất hiện hành."
},
{
  "type": "singlechoice",
  "content": "354. Triết học trở thành \"nữ tì\" của thần học khi nào?",
  "answers": [
    { "content": "Khi quyền lực của Nhà thờ, kinh viện bao trùm mọi lĩnh vực đời sống xã hội", "correct": false },
    { "content": "Khi quyền lực của Thánh chủ bao trùm mọi lĩnh vực đời sống xã hội", "correct": false },
    { "content": "Khi quyền lực của Giáo hội bao trùm mọi lĩnh vực đời sống xã hội", "correct": true },
    { "content": "Khi quyền lực của nhà vua kém quyền lực giáo phái", "correct": false }
  ],
  "explanation": "Trong thời trung cổ, triết học bị Giáo hội chi phối và phục vụ thần học."
},
{
  "type": "singlechoice",
  "content": "355. Theo duy vật lịch sử, yếu tố nào giữ vai trò đặc trưng cho chế độ kinh tế của một xã hội nhất định?",
  "answers": [
    { "content": "Quan hệ sản xuất mới", "correct": false },
    { "content": "Quan hệ sản xuất thống trị", "correct": true },
    { "content": "Quan hệ sản xuất mạnh nhất", "correct": false },
    { "content": "Quan hệ sản xuất đương thời", "correct": false }
  ],
  "explanation": "Quan hệ sản xuất thống trị phản ánh bản chất của chế độ kinh tế xã hội."
},
{
  "type": "singlechoice",
  "content": "356. Vận dụng Triết học vào thực tế phải dựa trên quan điểm:",
  "answers": [
    { "content": "Lịch sử cụ thể", "correct": true },
    { "content": "Phát triển", "correct": false },
    { "content": "Kế thừa", "correct": false },
    { "content": "Tất cả các đáp án đều đúng", "correct": false }
  ],
  "explanation": "Phải xuất phát từ hoàn cảnh lịch sử cụ thể mới có thể vận dụng đúng đắn."
},
{
  "type": "singlechoice",
  "content": "357. Từ định nghĩa con người của Ph.Ăngghen, đặc điểm nào cho thấy con người khác với động vật?",
  "answers": [
    { "content": "Biết tư duy", "correct": false },
    { "content": "Biết ứng xử theo các quy phạm đạo đức", "correct": false },
    { "content": "Chính trị", "correct": false },
    { "content": "Biết chế tạo và sử dụng công cụ lao động", "correct": true }
  ],
  "explanation": "Lao động chế tạo và sử dụng công cụ là đặc trưng cơ bản phân biệt con người với động vật."
},
{
  "type": "singlechoice",
  "content": "358. Triết học coi vật chất và tinh thần cùng quyết định nguồn gốc và sự tồn tại của thế giới như nhau gọi là",
  "answers": [
    { "content": "Triết học duy vật", "correct": false },
    { "content": "Triết học duy tâm", "correct": false },
    { "content": "Triết học nhị nguyên", "correct": true }
  ],
  "explanation": "Nhị nguyên luận cho rằng vật chất và tinh thần cùng tồn tại độc lập, quyết định thế giới."
},
{
  "type": "singlechoice",
  "content": "359. Theo duy vật lịch sử thì:",
  "answers": [
    { "content": "Con người là chủ thể tùy ý sáng tạo ra lịch sử", "correct": false },
    { "content": "Lịch sử sáng tạo ra con người, con người không thể sáng tạo ra lịch sử", "correct": false },
    { "content": "Con người không thể sáng tạo ra lịch sử mà chỉ có thể thích ứng với những điều kiện có sẵn", "correct": false },
    { "content": "Con người sáng tạo ra lịch sử trong phạm vi những điều kiện khách quan mà chính lịch sử trước đó đã tạo nên cho nó", "correct": true }
  ],
  "explanation": "Con người là chủ thể sáng tạo lịch sử nhưng bị ràng buộc bởi điều kiện khách quan."
},
{
  "type": "singlechoice",
  "content": "360. Vai trò của cách mạng xã hội đối với tiến hóa xã hội là gì?",
  "answers": [
    { "content": "Cách mạng xã hội làm gián đoạn quá trình tiến hóa xã hội", "correct": false },
    { "content": "Cách mạng xã hội phủ định tiến hóa xã hội", "correct": false },
    { "content": "Cách mạng xã hội không có quan hệ với tiến hóa xã hội", "correct": false },
    { "content": "Cách mạng xã hội mở đường cho quá trình tiến hoá xã hội lên giai đoạn cao hơn.", "correct": true }
  ],
  "explanation": "Cách mạng xã hội phá bỏ cái cũ, mở đường cho sự tiến hóa xã hội lên giai đoạn phát triển mới."
},
  {
  "type": "singlechoice",
  "content": "361. Khái niệm \"những nguyên lý cơ bản của chủ nghĩa Mác - Lênin\" là chỉ",
  "answers": [
    { "content": "Những quan điểm cơ bản của chủ nghĩa Mác - Lênin", "correct": false },
    { "content": "Những quan điểm cơ bản, nền tảng của chủ nghĩa Mác - Lênin", "correct": false },
    { "content": "Những quan điểm mang tính chất chân lý bền vững của chủ nghĩa Mác - Lênin", "correct": false },
    { "content": "Những quan điểm cơ bản, nền tảng và có tính chất chân lý bền vững của chủ nghĩa Mác - Lênin", "correct": true }
  ],
  "explanation": "Nguyên lý cơ bản là những quan điểm nền tảng, chân lý bền vững làm cơ sở cho toàn bộ hệ thống lý luận Mác - Lênin."
},
{
  "type": "singlechoice",
  "content": "362. Theo quan điểm của chủ nghĩa duy vật biện chứng thì thông qua vận động mà các dạng cụ thể của vật chất",
  "answers": [
    { "content": "Tạo ra ý thức", "correct": false },
    { "content": "Không tồn tại", "correct": false },
    { "content": "Mất dần đi", "correct": false },
    { "content": "Biểu hiện", "correct": true }
  ],
  "explanation": "Vận động là phương thức tồn tại của vật chất, nhờ vận động mà các dạng vật chất biểu hiện ra."
},
{
  "type": "singlechoice",
  "content": "363. Về cấu trúc, người lao động thuộc mặt nào trong các phương thức sản xuất?",
  "answers": [
    { "content": "Kinh tế - giai cấp", "correct": false },
    { "content": "Lực lượng sản xuất", "correct": true },
    { "content": "Tư liệu sản xuất", "correct": false },
    { "content": "Kiến trúc thượng tầng", "correct": false }
  ],
  "explanation": "Người lao động là yếu tố quan trọng nhất trong lực lượng sản xuất."
},
{
  "type": "singlechoice",
  "content": "364. Theo Mác, vấn đề tìm hiểu xem tư duy của con người có thể đạt được chân lý khách quan toàn không phải là vấn đề lý luận mà là vấn đề",
  "answers": [
    { "content": "Thực tế", "correct": false },
    { "content": "Hiện thực", "correct": false },
    { "content": "Thực tiễn", "correct": true },
    { "content": "Khoa học", "correct": false }
  ],
  "explanation": "Mác khẳng định thực tiễn là tiêu chuẩn để kiểm nghiệm chân lý khách quan."
},
{
  "type": "singlechoice",
  "content": "365. Nguồn gốc kinh tế của sự vận động và phát triển của hình thái kinh tế - xã hội là gì?",
  "answers": [
    { "content": "Mâu thuẫn giai cấp gay gắt trong xã hội có giai cấp", "correct": false },
    { "content": "Sự tăng lên không ngừng của năng suất lao động", "correct": false },
    { "content": "Mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất", "correct": true },
    { "content": "Sự phát triển mạnh mẽ, đột phá của khoa học kỹ thuật công nghệ", "correct": false }
  ],
  "explanation": "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất là nguồn gốc kinh tế thúc đẩy xã hội phát triển."
},
{
  "type": "singlechoice",
  "content": "366. Trong hoạt động nhận thức, cần nhìn nhận sự vật trong trạng thái vận động và phát triển. Điều đó dựa trên cơ sở lý luận của nguyên lý nào?",
  "answers": [
    { "content": "Nguyên lý về mối liên hệ phổ biến", "correct": false },
    { "content": "Nguyên lý về sự phát triển", "correct": true },
    { "content": "Nguyên lý về tính thống nhất vật chất của thế giới", "correct": false }
  ],
  "explanation": "Nguyên lý về sự phát triển yêu cầu nhận thức sự vật trong trạng thái vận động, biến đổi."
},
{
  "type": "singlechoice",
  "content": "367. Nguồn gốc trực tiếp của sự ra đời giai cấp trong xã hội?",
  "answers": [
    { "content": "Do sự phát triển lực lượng sản xuất làm xuất hiện \"của dư\" tương đối", "correct": false },
    { "content": "Do sự chênh lệch về khả năng giữa các tập đoàn người", "correct": false },
    { "content": "Do sự phân hóa giữa giàu và nghèo trong xã hội", "correct": false },
    { "content": "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất", "correct": true }
  ],
  "explanation": "Chế độ tư hữu về tư liệu sản xuất tạo ra sự phân hóa giai cấp."
},
{
  "type": "singlechoice",
  "content": "368. Sai lầm của các nhà duy vật chất phác thời cổ đại là gì?",
  "answers": [
    { "content": "Đồng nhất vật chất với vật thể", "correct": true },
    { "content": "Đồng nhất vật thể với bản thân nó", "correct": false },
    { "content": "Đồng nhất vật chất duy vật và thế giới duy tâm", "correct": false },
    { "content": "Không có đáp án nào đúng", "correct": false }
  ],
  "explanation": "Các nhà duy vật cổ đại đã đồng nhất vật chất với một số vật thể cụ thể."
},
{
  "type": "singlechoice",
  "content": "369. Ý thức xã hội là phạm trù triết học dùng để chỉ",
  "answers": [
    { "content": "Toàn bộ đời sống tinh thần của xã hội", "correct": true },
    { "content": "Toàn bộ điều kiện vật chất của xã hội", "correct": false },
    { "content": "Toàn bộ điều kiện tinh thần của xã hội", "correct": false },
    { "content": "Toàn bộ đời sống nói chung của xã hội", "correct": false }
  ],
  "explanation": "Ý thức xã hội phản ánh toàn bộ đời sống tinh thần của cộng đồng xã hội."
},
{
  "type": "singlechoice",
  "content": "370. Theo quan điểm của chủ nghĩa Mác - Lênin, \"Bộ tộc\" được định nghĩa là gì?",
  "answers": [
    { "content": "Bộ tộc là hình thức cộng đồng người hình thành khi xã hội có sự phân chia thành giai cấp. Các bộ tộc được hình thành từ sự liên kết của nhiều bộ lạc sống trên một lãnh thổ nhất định", "correct": false },
    { "content": "Những tộc người sống lưu vong", "correct": false },
    { "content": "Nhiều bộ lạc hợp lại", "correct": false },
    { "content": "Những người có chung lãnh thổ, ngôn ngữ, văn hóa, kinh tế", "correct": true }
  ],
  "explanation": "Bộ tộc là cộng đồng người có chung lãnh thổ, ngôn ngữ, văn hóa và kinh tế."
},
{
  "type": "singlechoice",
  "content": "371. Theo quan điểm của chủ nghĩa duy vật lịch sử, nhà nước là yếu tố cơ bản trong kiến trúc thượng tầng của xã hội, nó:",
  "answers": [
    { "content": "Luôn luôn có tác động tích cực đối với cơ sở hạ tầng", "correct": false },
    { "content": "Luôn luôn có tác động tiêu cực đối với cơ sở hạ tầng", "correct": false },
    { "content": "Có thể tác động tích cực hoặc tiêu cực, tùy theo từng điều kiện nhất định", "correct": true },
    { "content": "Không có tác dụng gì tới cơ sở hạ tầng kinh tế mà chỉ có tác dụng tới các yếu tố khác trong hệ thống kiến trúc thượng tầng", "correct": false }
  ],
  "explanation": "Nhà nước có thể tác động tích cực hoặc tiêu cực đến cơ sở hạ tầng kinh tế tùy bối cảnh."
},
{
  "type": "singlechoice",
  "content": "372. Phạm trù triết học phản ánh thời kỳ hình thành đối tượng, khi nó mới chỉ tồn tại dưới dạng tiền đề hay với tư cách là xu hướng gọi là gì?",
  "answers": [
    { "content": "Nguyên nhân", "correct": false },
    { "content": "Kết quả", "correct": false },
    { "content": "Khả năng", "correct": true },
    { "content": "Hiện thực", "correct": false }
  ],
  "explanation": "Khả năng phản ánh sự vật khi mới tồn tại dưới dạng tiền đề, xu hướng."
},
{
  "type": "singlechoice",
  "content": "373. Đâu là một trong những tác phẩm của Lênin?",
  "answers": [
    { "content": "Chủ nghĩa xã hội không tưởng Pháp", "correct": false },
    { "content": "Chủ nghĩa Duy vật và chủ nghĩa kinh viện phê phán", "correct": false },
    { "content": "Chủ nghĩa Duy vật và chủ nghĩa kinh nghiệm phê phán", "correct": true },
    { "content": "Đường Kách Mệnh", "correct": false }
  ],
  "explanation": "Tác phẩm \"Chủ nghĩa Duy vật và chủ nghĩa kinh nghiệm phê phán\" là một công trình nổi bật của Lênin."
},
{
  "type": "singlechoice",
  "content": "374. Theo triết học Mác, con người là gì?",
  "answers": [
    { "content": "Thực thể sinh học - xã hội", "correct": true },
    { "content": "Thực thể tự nhiên - sinh học", "correct": false },
    { "content": "Kết hợp con vật và con người", "correct": false },
    { "content": "Là thực thể do thánh thần tạo ra", "correct": false }
  ],
  "explanation": "Con người là thực thể sinh học - xã hội, vừa mang yếu tố tự nhiên vừa mang tính xã hội."
},
{
  "type": "singlechoice",
  "content": "375. Khi xem xét, đánh giá con người trong mối quan hệ với gia đình, bạn bè, đồng nghiệp và các mối quan hệ xã hội được gọi là cách nhìn nhận gì?",
  "answers": [
    { "content": "Biện chứng", "correct": false },
    { "content": "Toàn diện", "correct": true },
    { "content": "Lịch sử, cụ thể", "correct": false },
    { "content": "Phiến diện", "correct": false }
  ],
  "explanation": "Cách nhìn toàn diện đòi hỏi xem xét con người trong nhiều mối quan hệ xã hội."
},
{
  "type": "singlechoice",
  "content": "376. Yếu tố nào không thuộc lực lượng sản xuất?",
  "answers": [
    { "content": "Người lao động", "correct": false },
    { "content": "Nhà xưởng, công trường", "correct": false },
    { "content": "Đối tượng lao động", "correct": false },
    { "content": "Kinh tế thượng tầng", "correct": true }
  ],
  "explanation": "Kinh tế thượng tầng thuộc kiến trúc thượng tầng, không thuộc lực lượng sản xuất."
},
{
  "type": "singlechoice",
  "content": "377. Giải quyết mặt thứ nhất trong vấn đề cơ bản của triết học đã chia nó thành hai trường phái triết học lớn trong lịch sử, đó là các chủ nghĩa",
  "answers": [
    { "content": "Duy vật và duy tâm", "correct": true },
    { "content": "Duy vật và siêu hình", "correct": false },
    { "content": "Duy vật biện chứng và duy tâm", "correct": false },
    { "content": "Duy vật máy móc và duy tâm", "correct": false }
  ],
  "explanation": "Vấn đề cơ bản của triết học về quan hệ vật chất và ý thức dẫn đến hai trường phái: duy vật và duy tâm."
},
{
  "type": "singlechoice",
  "content": "378. Nguồn gốc xã hội dẫn đến sự ra đời của Triết học là?",
  "answers": [
    { "content": "Do sự phát triển của lực lượng sản xuất", "correct": true },
    { "content": "Cách mạng nổ ra, những tộc người tan rã", "correct": false },
    { "content": "Lao động trí óc đã tách khỏi lao động chân tay", "correct": false },
    { "content": "Phân tích đúng tình hình trên toàn thế giới, sản xuất phát triển", "correct": false }
  ],
  "explanation": "Triết học ra đời khi lực lượng sản xuất phát triển, tạo điều kiện cho phân công lao động trí óc và chân tay."
},
{
  "type": "singlechoice",
  "content": "379. Theo quan điểm của chủ nghĩa Mác - Lênin, \"Bộ lạc\" được định nghĩa là gì?",
  "answers": [
    { "content": "Là cộng đồng bao gồm những bộ lạc có quan hệ cùng huyết thống hoặc các thị tộc có quan hệ hôn nhân liên kết với nhau", "correct": false },
    { "content": "Là cộng đồng bao gồm những thị tộc có quan hệ hôn nhân liên kết với nhau", "correct": false },
    { "content": "Là cộng đồng bao gồm những thị tộc có quan hệ cùng huyết thống hoặc các thị tộc có quan hệ hôn nhân liên kết với nhau", "correct": true },
    { "content": "Là cộng đồng bao gồm những thị tộc có quan hệ cùng huyết thống", "correct": false }
  ],
  "explanation": "Bộ lạc là cộng đồng gồm các thị tộc có quan hệ huyết thống hoặc liên kết hôn nhân."
},
{
  "type": "singlechoice",
  "content": "380. Theo quan điểm của chủ nghĩa duy vật biện chứng, sự vật khi mới ra đời chúng tồn tại dưới dạng",
  "answers": [
    { "content": "Cái đơn nhất", "correct": true },
    { "content": "Cái cụ thể", "correct": false },
    { "content": "Cái chung", "correct": false }
  ],
  "explanation": "Sự vật mới ra đời tồn tại dưới dạng cái đơn nhất trước khi phát triển thành cái chung, cái cụ thể."
},
  {
  "type": "singlechoice",
  "content": "381. Hoạt động sản xuất vật chất là cơ sở hình thành nên quan hệ gì?",
  "answers": [
    { "content": "Quan hệ kinh tế giữa người với người", "correct": false },
    { "content": "Quan hệ vật chất giữa người với người", "correct": false },
    { "content": "Quan hệ kinh tế - vật chất giữa người với vật", "correct": false },
    { "content": "Quan hệ kinh tế - vật chất giữa người với người", "correct": true }
  ],
  "explanation": "Sản xuất vật chất là cơ sở hình thành nên quan hệ kinh tế - vật chất giữa người với người, vì trong quá trình sản xuất con người buộc phải liên hệ, hợp tác với nhau."
},
{
  "type": "singlechoice",
  "content": "382. Về hình thức cơ bản, chủ nghĩa nào cũng thừa nhận tính thứ nhất của ý thức, nhưng theo họ đây là thực thể tinh thần khách quan có trước và tồn tại độc lập với giới tự nhiên và con người?",
  "answers": [
    { "content": "Duy vật thô sơ", "correct": false },
    { "content": "Duy ý chí", "correct": false },
    { "content": "Duy tâm chủ quan", "correct": false },
    { "content": "Duy tâm khách quan", "correct": true }
  ],
  "explanation": "Chủ nghĩa duy tâm khách quan coi ý thức là thực thể tinh thần khách quan, có trước và quyết định thế giới vật chất."
},
{
  "type": "singlechoice",
  "content": "383. Đâu là một trong những hình thức cộng đồng người trước khi hình thành dân tộc?",
  "answers": [
    { "content": "Thị tộc", "correct": true },
    { "content": "Chủng tộc", "correct": false },
    { "content": "Sắc tộc", "correct": false },
    { "content": "Dân tộc", "correct": false }
  ],
  "explanation": "Trước khi có dân tộc, loài người đã trải qua hình thức cộng đồng là thị tộc, bộ lạc, bộ tộc."
},
{
  "type": "singlechoice",
  "content": "384. Khi một sự vật, một hiện tượng mới được nảy sinh thì yếu tố nào sẽ xuất hiện đầu tiên?",
  "answers": [
    { "content": "Cái chung", "correct": false },
    { "content": "Cái riêng", "correct": false },
    { "content": "Cái đơn nhất", "correct": true },
    { "content": "Cái phổ biến", "correct": false }
  ],
  "explanation": "Cái đơn nhất xuất hiện đầu tiên, sau đó mới hình thành cái riêng và cái chung trong quá trình phát triển."
},
{
  "type": "singlechoice",
  "content": "385. Một trong ba hình thức cơ bản của chủ nghĩa duy vật là gì?",
  "answers": [
    { "content": "Chủ nghĩa duy vật chất phác thời cổ đại", "correct": true },
    { "content": "Chủ nghĩa duy vật trung đại", "correct": false },
    { "content": "Chủ nghĩa duy vật Mác thời cận đại", "correct": false },
    { "content": "Chủ nghĩa Sôphanh thời hiện đại", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy vật chất phác thời cổ đại là hình thức đầu tiên, còn ngây thơ và chưa hoàn thiện."
},
{
  "type": "singlechoice",
  "content": "386. Khẳng định nào sau đây về thế giới vật chất là đúng?",
  "answers": [
    { "content": "Chỉ có một thế giới duy nhất là thế giới vật chất", "correct": true },
    { "content": "Chỉ có một thế giới duy nhất là thế giới tinh thần", "correct": false },
    { "content": "Có nhiều thế giới vật chất", "correct": false },
    { "content": "Có nhiều thế giới tinh thần", "correct": false }
  ],
  "explanation": "Theo quan điểm duy vật biện chứng, chỉ có một thế giới duy nhất là thế giới vật chất, tồn tại khách quan."
},
{
  "type": "singlechoice",
  "content": "387. Cái ... là cái toàn bộ, phong phú hơn cái ...",
  "answers": [
    { "content": "Chung/Riêng.", "correct": true },
    { "content": "Riêng/Chung.", "correct": false },
    { "content": "Chung/Đơn nhất.", "correct": false },
    { "content": "Đơn nhất/Riêng.", "correct": false }
  ],
  "explanation": "Cái chung là cái khái quát, phong phú và bao trùm hơn cái riêng."
},
{
  "type": "singlechoice",
  "content": "388. Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
  "answers": [
    { "content": "Có tất nhiên thuần tuý tồn tại khách quan", "correct": false },
    { "content": "Có ngẫu nhiên thuần tuý tồn tại khách quan", "correct": false },
    { "content": "Không có cái tất nhiên và ngẫu nhiên thuần tuý tồn tại bên ngoài nhau", "correct": true },
    { "content": "Tất nhiên và ngẫu nhiên cùng tồn tại song song với nhau trong tư duy", "correct": false }
  ],
  "explanation": "Trong hiện thực, tất nhiên và ngẫu nhiên luôn gắn bó, tác động qua lại, không tồn tại tách rời."
},
{
  "type": "singlechoice",
  "content": "389. Toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội đó được gọi là gì?",
  "answers": [
    { "content": "Cơ sở hạ tầng", "correct": false },
    { "content": "Cơ sở thượng tầng", "correct": true },
    { "content": "Quan hệ sản xuất", "correct": false },
    { "content": "Quan hệ phân phối", "correct": false }
  ],
  "explanation": "Theo Mác, toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế - tức là cơ sở hạ tầng của xã hội."
},
{
  "type": "singlechoice",
  "content": "390. Trong hoạt động thực tiễn, sai lầm của sự trì trệ bảo thủ là do không tôn trọng quy luật nào?",
  "answers": [
    { "content": "Quy luật mâu thuẫn", "correct": false },
    { "content": "Quy luật lượng - chất", "correct": false },
    { "content": "Quy luật tự nhiên", "correct": false },
    { "content": "Quy luật xã hội", "correct": true }
  ],
  "explanation": "Bảo thủ trì trệ là do không tôn trọng các quy luật xã hội, đặc biệt là sự vận động khách quan của lịch sử."
},
{
  "type": "singlechoice",
  "content": "391. Quá trình quang hợp và hô hấp của cây Sầu riêng nằm trong quy luật nào?",
  "answers": [
    { "content": "Quy luật thống nhất và đấu tranh giữa các mặt đối lập", "correct": false },
    { "content": "Quy luật từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại", "correct": true },
    { "content": "Quy luật phủ định của phủ định", "correct": false },
    { "content": "Quy luật phát triển", "correct": false }
  ],
  "explanation": "Quang hợp và hô hấp phản ánh sự biến đổi lượng dẫn đến thay đổi chất, tuân theo quy luật lượng - chất."
},
{
  "type": "singlechoice",
  "content": "392. Cách mạng xã hội được khái quát bởi?",
  "answers": [
    { "content": "Thay đổi thể chế chính trị xã hội này bằng thể chế chính trị khác", "correct": true },
    { "content": "Thay đổi thể chế kinh tế này bằng một thể chế kinh tế khác cao hơn", "correct": false },
    { "content": "Thay đổi căn bản, toàn diện và triệt để một hình thái kinh tế - xã hội này bằng một hình thái kinh tế - xã hội khác cao hơn", "correct": false },
    { "content": "Thay đổi hệ tư tưởng quản lý này bằng hệ tư tưởng quản lý khác", "correct": false }
  ],
  "explanation": "Cách mạng xã hội được khái quát là sự thay đổi căn bản về thể chế chính trị, nhằm xây dựng chế độ mới."
},
{
  "type": "singlechoice",
  "content": "393. Định nghĩa đúng triết học Mác - Lênin là?",
  "answers": [
    { "content": "Hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy", "correct": true },
    { "content": "Khoa học làm cầu nối giữa các khoa học", "correct": false },
    { "content": "Chính trị", "correct": false },
    { "content": "Một thứ tôn giáo", "correct": false }
  ],
  "explanation": "Triết học Mác - Lênin là hệ thống quan điểm duy vật biện chứng và duy vật lịch sử về thế giới."
},
{
  "type": "singlechoice",
  "content": "394. Theo Triết học Mác, vật chất tồn tại thế nào?",
  "answers": [
    { "content": "Chủ quan", "correct": false },
    { "content": "Phụ thuộc vào con người", "correct": false },
    { "content": "Khách quan", "correct": true },
    { "content": "Theo ý muốn của thần linh", "correct": false }
  ],
  "explanation": "Vật chất tồn tại khách quan, không phụ thuộc vào ý thức con người."
},
{
  "type": "singlechoice",
  "content": "395. Theo Triết học Mác - Lênin cái bàn, cái ghế có phải vật chất không?",
  "answers": [
    { "content": "Có. Vì nó là dạng của vật chất trong không gian.", "correct": false },
    { "content": "Không. Vì nó không có vật chất trong không gian.", "correct": false },
    { "content": "Có. Vì nó có tồn tại cụ thể, có kích thước và tồn tại cùng thời gian.", "correct": true },
    { "content": "Không. Vì nó chỉ là một dạng cụ thể của vật chất.", "correct": false }
  ],
  "explanation": "Theo quan điểm duy vật, bàn ghế là vật chất vì chúng tồn tại khách quan, có hình dạng và kích thước cụ thể."
},
{
  "type": "singlechoice",
  "content": "396. Những sự vật, hiện tượng nếu có cùng nguyên nhân, trong những điều kiện giống nhau thì sẽ tạo nên kết quả như nhau. Điều này thể hiện tính chất gì trong mối liên hệ nhân quả?",
  "answers": [
    { "content": "Tính khách quan", "correct": false },
    { "content": "Tính phổ biến", "correct": false },
    { "content": "Tính tất yếu", "correct": true },
    { "content": "Tính biện chứng", "correct": false }
  ],
  "explanation": "Trong quan hệ nhân quả, nếu điều kiện giống nhau thì kết quả tất yếu cũng giống nhau."
},
{
  "type": "singlechoice",
  "content": "397. Ai đã tìm ra tia phóng xạ?",
  "answers": [
    { "content": "Rônghen", "correct": false },
    { "content": "Nicolai Copernic", "correct": false },
    { "content": "Béccoren", "correct": true },
    { "content": "Giordano Bruno", "correct": false }
  ],
  "explanation": "Henri Becquerel là người phát hiện ra hiện tượng phóng xạ vào năm 1896."
},
{
  "type": "singlechoice",
  "content": "398. Cơ sở hạ tầng là tổng hợp các quan hệ sản xuất hợp thành ..... của xã hội.",
  "answers": [
    { "content": "Cơ sở vật chất - kỹ thuật", "correct": false },
    { "content": "Hệ thống điện, đường, trường, trạm", "correct": false },
    { "content": "Cơ cấu kinh tế", "correct": true },
    { "content": "Đời sống vật chất", "correct": false }
  ],
  "explanation": "Theo Mác, cơ sở hạ tầng là toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội."
},
{
  "type": "singlechoice",
  "content": "399. Triết học duy vật biện chứng cho rằng:",
  "answers": [
    { "content": "Vật chất quyết định ý thức, ý thức tác động trở lại vật chất", "correct": true },
    { "content": "Ý thức quyết định vật chất, vật chất tác động trở lại ý thức", "correct": false },
    { "content": "Vật chất quyết định ý thức, ý thức không thể tác động đến vật chất", "correct": false },
    { "content": "Vật chất và ý thức đều có vai trò quyết định", "correct": false }
  ],
  "explanation": "Triết học Mác - Lênin khẳng định vật chất giữ vai trò quyết định, còn ý thức có tác động trở lại vật chất."
},
{
  "type": "singlechoice",
  "content": "400. Anh A có tri thức, năng lực, trình độ, kinh nghiệm và kỹ năng lao động. Vậy có thể gọi A là?",
  "answers": [
    { "content": "Trí thức", "correct": false },
    { "content": "Người lao động", "correct": false },
    { "content": "Lao động trí thức", "correct": true },
    { "content": "Năng lực lao động", "correct": false }
  ],
  "explanation": "Người có tri thức, kỹ năng, năng lực lao động được gọi là lao động trí thức."
},
  {
  "type": "singlechoice",
  "content": "401. Sự thống nhất giữa lực lượng sản xuất ở một trình độ nhất định và quan hệ sản xuất tương ứng tạo thành:",
  "answers": [
    { "content": "hình thái kinh tế - xã hội", "correct": false },
    { "content": "phương thức sản xuất", "correct": true },
    { "content": "cơ sở hạ tầng", "correct": false },
    { "content": "kiến trúc thượng tầng", "correct": false }
  ],
  "explanation": "Theo Mác, sự kết hợp giữa lực lượng sản xuất và quan hệ sản xuất tương ứng tạo thành phương thức sản xuất."
},
{
  "type": "singlechoice",
  "content": "402. Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Lực lượng cơ bản nhất trong quần chúng nhân dân là:",
  "answers": [
    { "content": "Giai cấp thống trị xã hội.", "correct": false },
    { "content": "Tầng lớp trí thức", "correct": false },
    { "content": "Người lao động.", "correct": true },
    { "content": "Công nhân và nông dân.", "correct": false }
  ],
  "explanation": "Quan điểm duy vật lịch sử cho rằng người lao động là lực lượng cơ bản nhất tạo nên sức mạnh quần chúng."
},
{
  "type": "singlechoice",
  "content": "403. Chỉ có một thế giới duy nhất là thế giới vật chất là thể hiện tính chất gì của thế giới vật chất?",
  "answers": [
    { "content": "Đồng nhất", "correct": false },
    { "content": "Thống nhất", "correct": true },
    { "content": "Thuần nhất", "correct": false },
    { "content": "Duy nhất", "correct": false }
  ],
  "explanation": "Thế giới vật chất tồn tại khách quan và thống nhất, không có thế giới nào khác ngoài nó."
},
{
  "type": "singlechoice",
  "content": "404. Theo Mác và Ph. Ăngghen, để tồn tại và phát triển, con người cần phải thực hiện hoạt động gì?",
  "answers": [
    { "content": "Vận động", "correct": false },
    { "content": "Sản xuất", "correct": true },
    { "content": "Làm giàu", "correct": false },
    { "content": "Kinh doanh", "correct": false }
  ],
  "explanation": "Mác và Ăngghen khẳng định con người muốn tồn tại phải sản xuất ra của cải vật chất."
},
{
  "type": "singlechoice",
  "content": "406. Các nhà triết học duy tâm được chia thành mấy trường phái?",
  "answers": [
    { "content": "2", "correct": true },
    { "content": "5", "correct": false }
  ],
  "explanation": "Triết học duy tâm có hai trường phái cơ bản: duy tâm chủ quan và duy tâm khách quan."
},
{
  "type": "singlechoice",
  "content": "407. Cơ sở của sự tồn tại và phát triển của xã hội là sản xuất:",
  "answers": [
    { "content": "Hàng hóa, dịch vụ", "correct": false },
    { "content": "Tư liệu sản xuất", "correct": false },
    { "content": "Tư liệu tiêu dùng", "correct": false },
    { "content": "Sản xuất vật chất", "correct": true }
  ],
  "explanation": "Sản xuất vật chất là cơ sở quyết định sự tồn tại và phát triển của xã hội."
},
{
  "type": "singlechoice",
  "content": "408. Trong xã hội có giai cấp, nội dung và hình thức phát triển của ý thức xã hội khác nhau do đâu?",
  "answers": [
    { "content": "Những điều kiện sinh hoạt vật chất, lợi ích và địa vị của các giai cấp khác nhau", "correct": true },
    { "content": "Thói quen khác nhau", "correct": false },
    { "content": "Sở thích khác nhau", "correct": false },
    { "content": "Những điều kiện sinh hoạt tinh thần, địa vị, thói quen của các giai cấp khác nhau", "correct": false }
  ],
  "explanation": "Ý thức xã hội phản ánh những điều kiện sinh hoạt vật chất và lợi ích giai cấp, nên có sự khác biệt."
},
{
  "type": "singlechoice",
  "content": "409. Vấn đề cơ bản của triết học có hai mặt. Mặt thứ hai phải trả lời câu hỏi con người có khả năng hay không trong:",
  "answers": [
    { "content": "Nhận thức được bản thân", "correct": false },
    { "content": "Hòa hợp với tự nhiên", "correct": false },
    { "content": "Chinh phục được thế giới", "correct": false },
    { "content": "Nhận thức được thế giới", "correct": true }
  ],
  "explanation": "Mặt thứ hai của vấn đề cơ bản triết học là khả năng con người nhận thức thế giới."
},
{
  "type": "singlechoice",
  "content": "410. Theo Mác, các nền kinh tế căn bản phân biệt với nhau bởi:",
  "answers": [
    { "content": "Phương thức sản xuất ra của cải vật chất", "correct": true },
    { "content": "Mục đích của quá trình sản xuất ra của cải vật chất", "correct": false },
    { "content": "Mục đích tự nhiên của quá trình sản xuất ra của cải vật chất", "correct": false },
    { "content": "Mục đích xã hội của quá trình sản xuất ra của cải vật chất", "correct": false }
  ],
  "explanation": "Theo Mác, các nền kinh tế khác nhau được phân biệt dựa vào phương thức sản xuất."
},
{
  "type": "singlechoice",
  "content": "411. Luận điểm sau đây thuộc lập trường triết học nào: \"Cái mới ra đời trên cơ sở phá hủy hoàn toàn cái cũ\"?",
  "answers": [
    { "content": "Quan điểm siêu hình", "correct": true },
    { "content": "Quan điểm duy tâm", "correct": false },
    { "content": "Quan điểm phát triển", "correct": false },
    { "content": "Quan điểm biện chứng duy vật", "correct": false }
  ],
  "explanation": "Quan điểm siêu hình cho rằng cái mới ra đời bằng sự thay thế, phủ định hoàn toàn cái cũ."
},
{
  "type": "singlechoice",
  "content": "412. Những ý thức lạc hậu tiêu cực không mất đi một cách dễ dàng, là do:",
  "answers": [
    { "content": "Thói quen tập quán lâu đời", "correct": false },
    { "content": "Ý thức xã hội không phản ánh kịp tồn tại xã hội", "correct": false },
    { "content": "Thói quen tập quán lâu đời và ý thức xã hội không phản ánh kịp tồn tại xã hội", "correct": true },
    { "content": "Ý thức xã hội phản ánh tồn tại xã hội và thói quen tập quán", "correct": false }
  ],
  "explanation": "Ý thức xã hội lạc hậu gắn với thói quen lâu đời và sự phản ánh chậm so với tồn tại xã hội."
},
{
  "type": "singlechoice",
  "content": "413. Thời gian phát hiện ra tia Rơnghen là khi nào?",
  "answers": [
    { "content": "Năm 1895", "correct": true },
    { "content": "Năm 1896", "correct": false },
    { "content": "Năm 1897", "correct": false },
    { "content": "Năm 1898", "correct": false }
  ],
  "explanation": "Nhà vật lý Wilhelm Röntgen phát hiện tia X (tia Rơnghen) vào năm 1895."
},
{
  "type": "singlechoice",
  "content": "414. Trong xã hội Ấn Độ cổ đại, triết học được hiểu là:",
  "answers": [
    { "content": "Con đường suy ngẫm để dẫn dắt con người tới lẽ phải", "correct": true },
    { "content": "Con đường tu tập", "correct": false },
    { "content": "Con đường giải thoát", "correct": false },
    { "content": "Con đường giác ngộ", "correct": false }
  ],
  "explanation": "Trong Ấn Độ cổ đại, triết học là sự suy ngẫm nhằm tìm ra con đường đến chân lý."
},
{
  "type": "singlechoice",
  "content": "415. Theo triết học Mác, hình thái kinh tế - xã hội cuối cùng là?",
  "answers": [
    { "content": "Phong kiến", "correct": false },
    { "content": "Tư bản chủ nghĩa", "correct": false },
    { "content": "Xã hội chủ nghĩa", "correct": false },
    { "content": "Cộng sản chủ nghĩa", "correct": true }
  ],
  "explanation": "Theo Mác, sự phát triển của xã hội loài người sẽ tiến tới hình thái kinh tế - xã hội cộng sản chủ nghĩa."
},
{
  "type": "singlechoice",
  "content": "416. Theo quan điểm của chủ nghĩa duy vật lịch sử, trong kiến trúc thượng tầng của xã hội có giai cấp, yếu tố cơ bản nhất, có tác động trực tiếp và mạnh mẽ nhất tới cơ sở hạ tầng là yếu tố:",
  "answers": [
    { "content": "Tổ chức chính đảng", "correct": false },
    { "content": "Tổ chức nhà nước", "correct": true },
    { "content": "Tổ chức tôn giáo", "correct": false },
    { "content": "Các tổ chức văn hóa - xã hội", "correct": false }
  ],
  "explanation": "Trong kiến trúc thượng tầng, nhà nước là yếu tố cơ bản, tác động mạnh nhất đến cơ sở hạ tầng."
},
{
  "type": "singlechoice",
  "content": "417. Theo quan điểm của chủ nghĩa duy vật biện chứng, khẳng định nào sau đây là đúng?",
  "answers": [
    { "content": "Cái ngẫu nhiên không có nguyên nhân", "correct": false },
    { "content": "Chỉ có cái tất yếu mới có nguyên nhân", "correct": false },
    { "content": "Không phải cái gì con người chưa nhận thức được nguyên nhân là cái ngẫu nhiên", "correct": true },
    { "content": "Cái ngẫu nhiên luôn trở thành cái tất nhiên", "correct": false }
  ],
  "explanation": "Ngẫu nhiên cũng có nguyên nhân, chỉ là con người chưa nhận thức được hết."
},
{
  "type": "singlechoice",
  "content": "418. \"Góp gió thành bão\" giúp anh/chị liên hệ tới quy luật nào trong triết học?",
  "answers": [
    { "content": "Lượng - chất", "correct": true },
    { "content": "Mâu thuẫn", "correct": false },
    { "content": "Phủ định của phủ định", "correct": false },
    { "content": "Không có phương án nào đúng", "correct": false }
  ],
  "explanation": "Tích lũy về lượng đủ lớn sẽ dẫn đến sự thay đổi về chất, được ví như \"góp gió thành bão\"."
},
{
  "type": "singlechoice",
  "content": "419. Theo quan điểm của triết học Mác - Lênin thì sự thay đổi quan hệ sản xuất phụ thuộc vào:",
  "answers": [
    { "content": "Trình độ của công cụ sản xuất", "correct": false },
    { "content": "Trình độ kỹ thuật sản xuất", "correct": false },
    { "content": "Trình độ phân công lao động xã hội", "correct": false },
    { "content": "Trình độ phát triển của lực lượng sản xuất", "correct": true }
  ],
  "explanation": "Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất."
},
{
  "type": "singlechoice",
  "content": "420. Bản chất của nhà nước là gì?",
  "answers": [
    { "content": "Mang bản chất của giai cấp thống trị", "correct": true },
    { "content": "Mang bản chất của giai cấp bị trị", "correct": false },
    { "content": "Mang bản chất của tất cả các giai cấp", "correct": false },
    { "content": "Mang bản chất của xã hội", "correct": false }
  ],
  "explanation": "Theo Mác, nhà nước là công cụ chuyên chính của giai cấp thống trị để duy trì địa vị của mình."
},
  {
  "type": "singlechoice",
  "content": "421. Galilê là nhà triết học thuộc trường phái triết học nào?",
  "answers": [
    { "content": "Chủ nghĩa duy vật biện chứng", "correct": true },
    { "content": "Chủ nghĩa duy vật siêu hình", "correct": false },
    { "content": "Chủ nghĩa duy tâm siêu hình", "correct": false },
    { "content": "Chủ nghĩa duy tâm máy móc", "correct": false }
  ],
  "explanation": "Galilê được coi là nhà triết học theo xu hướng duy vật biện chứng vì ông nhấn mạnh vai trò của thực nghiệm và xem tự nhiên tuân theo các quy luật khách quan."
},
{
  "type": "singlechoice",
  "content": "422. Xác định mệnh đề sai:",
  "answers": [
    { "content": "Vật thễ là dạng cụ thế của vật chất", "correct": false },
    { "content": "Vật chất tồn tại thông qua những dạng cụ thể của nó", "correct": false },
    { "content": "Vật chất là một dạng tồn tại của vật thể", "correct": false },
    { "content": "Vật thể không đồng nghĩa với vật chất", "correct": true }
  ],
  "explanation": "Mệnh đề sai là 'Vật thể không đồng nghĩa với vật chất'. Thực chất, vật chất tồn tại dưới dạng các vật thể cụ thể, nên vật thể là hình thức biểu hiện của vật chất."
},
{
  "type": "singlechoice",
  "content": "423. Theo Mác, trong tính hiện thực của nó, bản chất con người là tổng hợp:",
  "answers": [
    { "content": "Các phẩm chất xã hội", "correct": false },
    { "content": "Quan hệ lợi ích", "correct": false },
    { "content": "Các quan hệ xã hội", "correct": true },
    { "content": "Quan hệ hiện thực", "correct": false }
  ],
  "explanation": "Mác cho rằng 'bản chất con người không phải là một cái trừu tượng cố hữu cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội'."
},
{
  "type": "singlechoice",
  "content": "424. Ý thức xã hội có tính chất nào sau đây?",
  "answers": [
    { "content": "Tính độc lập tương đối", "correct": true },
    { "content": "Tính độc lập tuyệt đối", "correct": false },
    { "content": "Tính sáng tạo", "correct": false },
    { "content": "Tính bất biến", "correct": false }
  ],
  "explanation": "Ý thức xã hội phản ánh tồn tại xã hội nhưng có tính độc lập tương đối vì nó có thể đi trước hoặc lạc hậu hơn so với tồn tại xã hội."
},
{
  "type": "singlechoice",
  "content": "425. Ở Trung Quốc thời cổ đại có Triết học không?",
  "answers": [
    { "content": "Có", "correct": true },
    { "content": "Không", "correct": false },
    { "content": "Chi có hệ tư tưởng chứ không có triết học", "correct": false },
    { "content": "Không có hệ tư tưởng và triết học", "correct": false }
  ],
  "explanation": "Ở Trung Quốc thời cổ đại đã hình thành nhiều trường phái triết học lớn như Nho gia, Đạo gia, Pháp gia… cho thấy đã có triết học phát triển."
},
{
  "type": "singlechoice",
  "content": "426. Mối quan hệ giữa lĩnh vực kinh tế và lĩnh vực chính trị của xã hội được khái quát trong quy luật nào?",
  "answers": [
    { "content": "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng", "correct": true },
    { "content": "Quy luật đấu tranh giai cấp", "correct": false },
    { "content": "Quy luật tồn tại xã hội quyết định ý thức xã hội", "correct": false },
    { "content": "Tất cả đều sai", "correct": false }
  ],
  "explanation": "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng thể hiện mối quan hệ giữa kinh tế (cơ sở hạ tầng) và chính trị (một bộ phận kiến trúc thượng tầng)."
},
{
  "type": "singlechoice",
  "content": "427. Lơxíp và Đêmôcrít có điểm chung là gì?",
  "answers": [
    { "content": "Cà hai ông đều cho rằng, vật chất là nước", "correct": false },
    { "content": "Cả hai ông đều cho rằng, vật chất là lửa", "correct": false },
    { "content": "Cả hai ông đều cho răng, vật chất là không khí", "correct": false },
    { "content": "Cả hai ông đều cho rằng, vật chất là nguyên tử", "correct": true }
  ],
  "explanation": "Lơxíp và Đêmôcrít đều là những triết gia Hy Lạp cổ đại, xây dựng thuyết nguyên tử, coi vật chất được cấu tạo từ các hạt nguyên tử nhỏ bé, vĩnh cửu."
},
{
  "type": "singlechoice",
  "content": "428. Hiện tượng là:",
  "answers": [
    { "content": "Một bộ phận của bản chất", "correct": false },
    { "content": "Luôn đồng nhất với bản chất", "correct": false },
    { "content": "Biểu hiện bên ngoài của bản chất", "correct": true },
    { "content": "Kết quả của bản chất", "correct": false }
  ],
  "explanation": "Hiện tượng là biểu hiện ra bên ngoài của bản chất. Nó có thể phản ánh đúng hoặc che giấu bản chất."
},
{
  "type": "singlechoice",
  "content": "429. Về cơ bản, nhà nước có mấy chức năng?",
  "answers": [
    { "content": "2", "correct": true },
    { "content": "4", "correct": false },
    { "content": "5", "correct": false }
  ],
  "explanation": "Nhà nước có hai chức năng cơ bản: chức năng đối nội (quản lý xã hội trong phạm vi quốc gia) và chức năng đối ngoại (quan hệ với các quốc gia khác)."
},
{
  "type": "singlechoice",
  "content": "430. Thời đại kinh tế ngày nay được gọi là gì?",
  "answers": [
    { "content": "Nền kinh tế 4.0", "correct": false },
    { "content": "Nền kinh tế tri thức", "correct": true },
    { "content": "Nền kinh tế thị trường", "correct": false },
    { "content": "Nền kinh tế hàng hóa nhiều thành phần", "correct": false }
  ],
  "explanation": "Ngày nay, kinh tế được gọi là nền kinh tế tri thức vì tri thức, khoa học - công nghệ trở thành lực lượng sản xuất trực tiếp quan trọng nhất."
},
{
  "type": "singlechoice",
  "content": "431. Trước khi chủ nghĩa duy vật biện chứng ra đời, nhìn chung các nhà triết học duy vật quan niệm vật chất là gì?",
  "answers": [
    { "content": "Một hay một số chất tự có, đầu tiên", "correct": true },
    { "content": "Toàn bộ vật chất", "correct": false },
    { "content": "Vũ trụ quan", "correct": false },
    { "content": "Giới tự nhiên", "correct": false },
    { "content": "Ý thức", "correct": false }
  ],
  "explanation": "Trước khi có quan niệm khoa học về vật chất, các nhà duy vật cổ đại thường đồng nhất vật chất với một hay một số chất đầu tiên như nước, lửa, không khí..."
},
{
  "type": "singlechoice",
  "content": "432. \"Cái đơn nhất\" là phạm trù triết học dùng để chỉ:",
  "answers": [
    { "content": "Thuộc tính tồn tại duy nhất ở một sự vật", "correct": true },
    { "content": "Thuộc tính tồn tại trong nhiều sự vật hiện tượng", "correct": false },
    { "content": "Những sự vật hiện tượng khách quan", "correct": false }
  ],
  "explanation": "Cái đơn nhất là những đặc điểm chỉ tồn tại ở một sự vật, không lặp lại ở sự vật khác."
},
{
  "type": "singlechoice",
  "content": "433. Khi đánh giá một con người, quan điểm toàn diện đòi hỏi điều gì?",
  "answers": [
    { "content": "Phải đặc biệt nhấn mạnh một mặt nào đó, bỏ qua những mặt còn lại", "correct": false },
    { "content": "Phải đặt họ vào những điều kiện, thời đại của mình mà đánh giá", "correct": false },
    { "content": "Phải đặt họ trong những mối quan hệ với những người khác, với những việc khác có thể ảnh hưởng đến sự phát triển của họ mà đánh giá", "correct": true },
    { "content": "Phải xuất phát từ mục đích và lợi ích của họ mà đánh giá", "correct": false }
  ],
  "explanation": "Quan điểm toàn diện yêu cầu đánh giá con người trong toàn bộ mối quan hệ xã hội và lịch sử, không phiến diện."
},
{
  "type": "singlechoice",
  "content": "434. Trong các yếu tố cấu thành cơ sở hạ tầng của xã hội, yếu tố nào đóng vai trò quyết định?",
  "answers": [
    { "content": "Quan hệ sản xuất tàn dư của xã hội cũ", "correct": false },
    { "content": "Quan hệ sản xuất mầm mống của xã hội tương lai", "correct": false },
    { "content": "Quan hệ sản xuất thống trị", "correct": true },
    { "content": "Quan hệ sản xuất chủ đạo", "correct": false }
  ],
  "explanation": "Trong cơ sở hạ tầng, quan hệ sản xuất thống trị phù hợp với lực lượng sản xuất giữ vai trò quyết định."
},
{
  "type": "singlechoice",
  "content": "435. Theo quan điểm của triết học Mác - Lênin, thuộc tính phản ánh là thuộc tính:",
  "answers": [
    { "content": "Riêng có ở con người", "correct": false },
    { "content": "Chỉ có ở các cơ thể sống", "correct": false },
    { "content": "Chỉ có ở các chất vô cơ", "correct": false },
    { "content": "Phổ biến ở mọi tổ chức vật chất", "correct": true }
  ],
  "explanation": "Phản ánh là thuộc tính phổ biến của mọi dạng vật chất, từ vô cơ đến hữu cơ và cao nhất ở con người với ý thức."
},
{
  "type": "singlechoice",
  "content": "436. Định nghĩa vật chất của Lênin bao gồm mấy nội dung cơ bản?",
  "answers": [
    { "content": "2", "correct": false },
    { "content": "3", "correct": true },
    { "content": "4", "correct": false },
    { "content": "5", "correct": false }
  ],
  "explanation": "Định nghĩa vật chất của Lênin có 3 nội dung cơ bản: (1) Vật chất tồn tại khách quan; (2) Vật chất được phản ánh vào ý thức; (3) Ý thức là sự phản ánh vật chất."
},
{
  "type": "singlechoice",
  "content": "437. Hiện tượng, quá trình khác nhau đều có những mối liên hệ cụ thể khác nhau, là biểu hiện của tính chất nào trong mối liên hệ?",
  "answers": [
    { "content": "Đa dạng, phong phú", "correct": true },
    { "content": "Khách quan", "correct": false },
    { "content": "Phổ biến", "correct": false },
    { "content": "Chung nhất", "correct": false }
  ],
  "explanation": "Các mối liên hệ trong tự nhiên, xã hội và tư duy rất đa dạng, phong phú, biểu hiện trong từng hiện tượng, quá trình cụ thể."
},
{
  "type": "singlechoice",
  "content": "438. Hiện thực là phạm trù triết học dùng để chỉ những gì:",
  "answers": [
    { "content": "Sẽ tồn tại khi có đủ điều kiện", "correct": false },
    { "content": "Đang tồn tại trong thực tế", "correct": true },
    { "content": "Sẽ xuất hiện khi hội đủ mọi điều kiện", "correct": false }
  ],
  "explanation": "Hiện thực là cái đang tồn tại trong thực tế, đối lập với khả năng (cái chưa tồn tại nhưng có thể có)."
},
{
  "type": "singlechoice",
  "content": "439. Toàn bộ những chính sách, quan điểm, tư tưởng, đường lối chỉ đạo của nhà nước được gọi là gì?",
  "answers": [
    { "content": "Cơ sở hạ tầng", "correct": false },
    { "content": "Cơ sở thượng tầng", "correct": false },
    { "content": "Quan hệ sản xuất", "correct": false },
    { "content": "Kiến trúc thượng tầng", "correct": true }
  ],
  "explanation": "Kiến trúc thượng tầng bao gồm hệ thống chính trị, pháp luật, tư tưởng, quan điểm... trong đó có đường lối, chính sách của nhà nước."
},
{
  "type": "singlechoice",
  "content": "440. Đâu là hình thức thế giới quan tồn tại trước thế giới quan triết học?",
  "answers": [
    { "content": "Thế giới quan tiền tệ", "correct": false },
    { "content": "Thế giới quan tôn giáo", "correct": true },
    { "content": "Thế giới quan nhân sinh", "correct": false },
    { "content": "Thế giới quan pháp luật", "correct": false }
  ],
  "explanation": "Trước khi triết học ra đời, thế giới quan tôn giáo là hình thức phổ biến, lý giải thế giới bằng niềm tin vào thần linh."
},
  {
  "type": "singlechoice",
  "content": "441. Trong tư liệu sản xuất thì cái gì phản ánh rõ nhất trình độ phát triển của lực lượng sản xuất?",
  "answers": [
    { "content": "Công cụ lao động", "correct": true },
    { "content": "Máy móc", "correct": false },
    { "content": "Đối tượng lao động", "correct": false },
    { "content": "Công cụ tin học", "correct": false }
  ],
  "explanation": "Công cụ lao động là yếu tố trực tiếp thể hiện trình độ phát triển khoa học - kỹ thuật và công nghệ, do đó phản ánh rõ nhất trình độ phát triển của lực lượng sản xuất."
},
{
  "type": "singlechoice",
  "content": "442. Điền vào chỗ trống: '... là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác'",
  "answers": [
    { "content": "Vật chất", "correct": true },
    { "content": "Ý thức", "correct": false },
    { "content": "Năng lực", "correct": false },
    { "content": "Thế giới", "correct": false }
  ],
  "explanation": "Theo Lênin, vật chất là thực tại khách quan, tồn tại độc lập với ý thức con người, được cảm giác phản ánh lại."
},
{
  "type": "singlechoice",
  "content": "443. Đâu là tác phẩm của Ph. Ángghen?",
  "answers": [
    { "content": "\"Biện chứng của thiên nhiên\"", "correct": false },
    { "content": "\"Biện chứng của tự nhiên\"", "correct": true },
    { "content": "\"Biện chứng của tự do\"", "correct": false },
    { "content": "\"Tự nhiên của biện chúng\"", "correct": false }
  ],
  "explanation": "Tác phẩm 'Biện chứng của tự nhiên' của Ph. Ángghen trình bày quan điểm duy vật biện chứng về giới tự nhiên."
},
{
  "type": "singlechoice",
  "content": "444. Vị trí, vai trò của Triết học Mác - Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam hiện nay?",
  "answers": [
    { "content": "Thúc đẩy", "correct": false },
    { "content": "Đối lập", "correct": false },
    { "content": "Mâu thuẫn", "correct": false },
    { "content": "Quan trọng, là nền tảng tư tưởng, kim chỉ nam cho hành động", "correct": true }
  ],
  "explanation": "Triết học Mác - Lênin giữ vai trò nền tảng tư tưởng, kim chỉ nam cho hành động trong công cuộc đổi mới ở Việt Nam."
},
{
  "type": "singlechoice",
  "content": "445. Theo triết học Mác, sự chuyển dịch từ hình thái kinh tế chiếm hữu nô lệ, sang phong kiến rồi đến xã hội chủ nghĩa thuộc loại vận động nào?",
  "answers": [
    { "content": "Vận động vật lý", "correct": false },
    { "content": "Vận động hóa học", "correct": false },
    { "content": "Vận động sinh học", "correct": false },
    { "content": "Vận động xã hội", "correct": true }
  ],
  "explanation": "Sự thay thế các hình thái kinh tế - xã hội là sự vận động của xã hội loài người, thuộc hình thức vận động xã hội."
},
{
  "type": "singlechoice",
  "content": "446. Theo quan điểm của chủ nghĩa duy vật lịch sử, lực lượng chủ thể sáng tạo ra lịch sử là:",
  "answers": [
    { "content": "Quần chúng nhân dân", "correct": true },
    { "content": "Vĩ nhân, lãnh tụ", "correct": false },
    { "content": "Tầng lớp trí thức", "correct": false },
    { "content": "Trí thức, vĩ nhân", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy vật lịch sử khẳng định quần chúng nhân dân mới là lực lượng sáng tạo chân chính của lịch sử."
},
{
  "type": "singlechoice",
  "content": "447. Theo quan điểm của chủ nghĩa duy vật lịch sử, nhà nước là gì?",
  "answers": [
    { "content": "Tổ chức phi chính phủ", "correct": false },
    { "content": "Tổ chúc quyền lực phi giai cấp", "correct": false },
    { "content": "Tổ chức quyền lực mang bản chất của giai cấp sở hữu tư liệu sản xuất chủ yếu của xã hội", "correct": true },
    { "content": "Tổ chức quyền lực mang bản chất của mọi giai cấp trong xã hội", "correct": false }
  ],
  "explanation": "Nhà nước là công cụ chuyên chính của giai cấp thống trị, phản ánh lợi ích của giai cấp sở hữu tư liệu sản xuất chủ yếu."
},
{
  "type": "singlechoice",
  "content": "448. Theo quan niệm duy vật biện chứng về lịch sử thì những quan hệ sản xuất cũ được thay thế bằng quan hệ sản xuất mới, phù hợp trình độ phát triển của lực lượng sản xuất nhờ điều gì?",
  "answers": [
    { "content": "Cải cách triệt để", "correct": false },
    { "content": "Cách mạng vô sản", "correct": false },
    { "content": "Cách mạng xã hội", "correct": true },
    { "content": "Đảo chính", "correct": false }
  ],
  "explanation": "Quan hệ sản xuất cũ được thay thế bằng quan hệ sản xuất mới thông qua cách mạng xã hội."
},
{
  "type": "singlechoice",
  "content": "449. Triết học do Mác và Ph. Ăngghen thực hiện là bước ngoặt cách mạng trong sự phát triển của triết học. Biểu hiện vĩ đại nhất của bước ngoặt đó là:",
  "answers": [
    { "content": "Thay đổi căn bản tính chất của triết học, đối tượng và mối quan hệ với khoa học", "correct": false },
    { "content": "Gắn bó chặt chẽ giữa triết học với phong trào cách mạng của giai cấp vô sản và quần chúng lao động", "correct": true },
    { "content": "Sáng tạo ra chủ nghĩa duy vật lịch sử", "correct": false },
    { "content": "Làm cho triết học trở nên phổ biến trong cuộc sống", "correct": false }
  ],
  "explanation": "Điểm nổi bật nhất của triết học Mác là gắn triết học với thực tiễn cách mạng của giai cấp công nhân."
},
{
  "type": "singlechoice",
  "content": "450. Các hình thức cơ bản của chủ nghĩa duy tâm:",
  "answers": [
    { "content": "Duy tâm chủ quan và duy tâm khách quan", "correct": true },
    { "content": "Duy tâm biện chứng và duy tâm siêu hình", "correct": false },
    { "content": "Duy tâm trung cổ và duy tâm cổ điển Đức", "correct": false },
    { "content": "Duy tâm khách quan và duy tâm cổ đại", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy tâm tồn tại dưới hai hình thức cơ bản: duy tâm chủ quan và duy tâm khách quan."
},
{
  "type": "singlechoice",
  "content": "451. Sự sinh ra, lớn lên, già đi thuộc hình thức vận động nào trong triết học?",
  "answers": [
    { "content": "Vận động cơ học", "correct": false },
    { "content": "Vận động sinh học", "correct": true },
    { "content": "Vận động vật lý", "correct": false },
    { "content": "Vận động hóa học", "correct": false }
  ],
  "explanation": "Quá trình sinh ra, lớn lên, già đi là vận động sinh học của cơ thể sống."
},
{
  "type": "singlechoice",
  "content": "452. Cấu trúc của phương thức sản xuất gồm những yếu tố nào sau đây?",
  "answers": [
    { "content": "Công cụ lao động, đối tượng lao động", "correct": false },
    { "content": "Trình độ lao động, quan hệ sản xuất", "correct": false },
    { "content": "Lực lượng sản xuất, quan hệ sản xuất", "correct": true },
    { "content": "Tư liệu sản xuất và con người", "correct": false }
  ],
  "explanation": "Phương thức sản xuất gồm hai yếu tố cơ bản: lực lượng sản xuất và quan hệ sản xuất."
},
{
  "type": "singlechoice",
  "content": "453. Các hình thức tồn tại của các dạng cụ thể của vật chất ở một vị trí nhất định, có một khoảng thời gian nhất định và tồn tại trong mối tương quan nhất định với các dạng khác được gọi là:",
  "answers": [
    { "content": "Tồn tại của vật chất", "correct": false },
    { "content": "Thời gian", "correct": false },
    { "content": "Không gian", "correct": true },
    { "content": "Sự tồn tại", "correct": false }
  ],
  "explanation": "Các dạng cụ thể của vật chất luôn tồn tại trong không gian nhất định."
},
{
  "type": "singlechoice",
  "content": "454. Chủ nghĩa duy tâm có nguồn gốc nhận thức là trong quá trình nhận thức nó xem xét phiến diện, tuyệt đối hóa, thần thánh hóa cái gì?",
  "answers": [
    { "content": "Một đối tượng", "correct": false },
    { "content": "Những đặc tính nào đó", "correct": false },
    { "content": "Một số mặt nào đó", "correct": false },
    { "content": "Một mặt, một đặc tính nào đó", "correct": true }
  ],
  "explanation": "Nguồn gốc nhận thức của duy tâm là do tuyệt đối hóa một mặt, một đặc tính trong quá trình nhận thức."
},
{
  "type": "singlechoice",
  "content": "455. Giả sử khái niệm Việt Nam là một 'cái riêng' thì yếu tố nào sau đây là cái đơn nhất?",
  "answers": [
    { "content": "Con người", "correct": false },
    { "content": "Quốc gia", "correct": false },
    { "content": "Văn hóa", "correct": false },
    { "content": "Hà Nội", "correct": true }
  ],
  "explanation": "Trong phạm vi 'cái riêng' Việt Nam, Hà Nội là một cái đơn nhất cụ thể."
},
{
  "type": "singlechoice",
  "content": "456. Triết học Mác - Lênin chỉ ra nguồn gốc của sự hình thành và phân chia giai cấp trong xã hội là do đâu?",
  "answers": [
    { "content": "Trời định", "correct": false },
    { "content": "Tài năng", "correct": false },
    { "content": "Kinh tế", "correct": true },
    { "content": "Chính quyền", "correct": false }
  ],
  "explanation": "Nguồn gốc kinh tế, cụ thể là sự phát triển của lực lượng sản xuất và quan hệ sản xuất, dẫn đến phân chia giai cấp."
},
{
  "type": "singlechoice",
  "content": "457. Nhận thức lý tính được thực hiện dưới hình thức nào?",
  "answers": [
    { "content": "Cảm giác, tri giác và phán đoán", "correct": false },
    { "content": "Khái niệm, phán đoán và suy lý", "correct": true },
    { "content": "Cảm giác, khái niệm, suy lý", "correct": false },
    { "content": "Cảm giác, tri giác, biểu tượng", "correct": false }
  ],
  "explanation": "Nhận thức lý tính bao gồm các hình thức: khái niệm, phán đoán và suy lý."
},
{
  "type": "singlechoice",
  "content": "458. Ý thức xã hội phản ánh tồn tại xã hội với hai trình độ khác nhau đó là:",
  "answers": [
    { "content": "Tâm lý xã hội và hệ tư tưởng xã hội", "correct": true },
    { "content": "Tâm lý con người và hệ tư tưởng", "correct": false },
    { "content": "Tinh thần xã hội và hệ tư tưởng", "correct": false },
    { "content": "Nền tảng vật chất và giá trị tinh thần", "correct": false }
  ],
  "explanation": "Ý thức xã hội phản ánh tồn tại xã hội ở hai trình độ: tâm lý xã hội và hệ tư tưởng xã hội."
},
{
  "type": "singlechoice",
  "content": "459. Cái tất nhiên là cái do:",
  "answers": [
    { "content": "Những nguyên nhân cơ bản bên trong sự vật quy định", "correct": true },
    { "content": "Những nguyên nhân bên ngoài sự vật quy định", "correct": false },
    { "content": "Cả nguyên nhân bên trong và bên ngoài sự vật quy định", "correct": false },
    { "content": "Những nguyên nhân bản chất bên trong quy định", "correct": false }
  ],
  "explanation": "Cái tất nhiên xuất phát từ những nguyên nhân bản chất, cơ bản bên trong sự vật."
},
{
  "type": "singlechoice",
  "content": "460. Cơ sở khách quan của xây dựng liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong cách mạng xã hội chủ nghĩa là công nghiệp và nông nghiệp có vai trò như thế nào?",
  "answers": [
    { "content": "Sản xuất", "correct": true },
    { "content": "Đảm bảo các nhu cầu xã hội", "correct": false },
    { "content": "Đảm bảo cân đối cung-cầu", "correct": false },
    { "content": "Sản xuất chính", "correct": false }
  ],
  "explanation": "Công nghiệp và nông nghiệp đều là ngành sản xuất cơ bản, tạo nên cơ sở khách quan cho liên minh công - nông."
},
  {
  "type": "singlechoice",
  "content": "461. Một nhóm sinh viên tranh luận về chân lý, hãy xác định ý kiến nào đúng nhất, chân lý là gì?",
  "answers": [
    { "content": "Quan điễm được mọi người trong cuộc bò phiếu tán thành", "correct": false },
    { "content": "Quan điểm được đa số ủng hộ", "correct": false },
    { "content": "Một phán đoán đúng quy tắc logic", "correct": false },
    { "content": "Một quan điểm được chứng minh trong thực tiễn là đúng", "correct": true }
  ],
  "explanation": "Theo triết học Mác - Lênin, chân lý là sự phản ánh đúng đắn hiện thực khách quan và được kiểm nghiệm qua thực tiễn."
},
{
  "type": "singlechoice",
  "content": "462. Theo quan điểm duy vật lịch sử, sản xuất ra của cải vật chất giữ vai trò là:",
  "answers": [
    { "content": "Nền tảng của xã hội", "correct": false },
    { "content": "Nền tảng vật chất của xã hội", "correct": true },
    { "content": "Nền tăng tinh thần của xã hội", "correct": false },
    { "content": "Nền tảng kỹ thuật, công nghệ của xã hội", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy vật lịch sử khẳng định sản xuất vật chất là nền tảng vật chất quyết định sự tồn tại và phát triển của xã hội."
},
{
  "type": "singlechoice",
  "content": "463. Phép biện chứng chất phác thời cổ đại là",
  "answers": [
    { "content": "Một hình thức của chủ nghĩa duy tâm", "correct": false },
    { "content": "Một phần của chủ nghĩa duy vật", "correct": false },
    { "content": "Tất cà đêu đúng", "correct": false },
    { "content": "Một hình thức của phép biện chứng", "correct": true }
  ],
  "explanation": "Phép biện chứng chất phác là hình thức sơ khai của tư duy biện chứng, xuất hiện trong triết học Hy Lạp cổ đại."
},
{
  "type": "singlechoice",
  "content": "464. Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật gọi là gì?",
  "answers": [
    { "content": "Bản chất", "correct": true },
    { "content": "Hiện tượng", "correct": false },
    { "content": "Nội dung", "correct": false },
    { "content": "Hình thức", "correct": false }
  ],
  "explanation": "Bản chất là cái tất nhiên, ổn định bên trong sự vật, quyết định sự tồn tại và phát triển của sự vật."
},
{
  "type": "singlechoice",
  "content": "465. Vấn đề cơ bản của Triết học là gì?",
  "answers": [
    { "content": "Mối quan hệ giữa tự nhiên và bản thể", "correct": false },
    { "content": "Mối quan hệ giữa tư duy và tồn tại", "correct": true },
    { "content": "Mối quan hệ giữa cái chung và cái riêng", "correct": false },
    { "content": "Con người và bản thể", "correct": false }
  ],
  "explanation": "Vấn đề cơ bản của triết học là mối quan hệ giữa tư duy và tồn tại, tức vật chất hay ý thức cái nào có trước."
},
{
  "type": "singlechoice",
  "content": "466. Chủ nghĩa duy vật biện chứng khẳng định rằng, nguyên nhân sinh ra kết quả phải có thêm yếu tố nào?",
  "answers": [
    { "content": "Điều kiện", "correct": true },
    { "content": "Nguyên cũ", "correct": false },
    { "content": "Ý chí", "correct": false }
  ],
  "explanation": "Nguyên nhân chỉ trở thành hiện thực và sinh ra kết quả khi có đủ điều kiện."
},
{
  "type": "singlechoice",
  "content": "467. Theo quan điểm của chủ nghĩa duy vật thì những mối liên hệ tồn tại ở mọi sự vật, hiện tượng của thế giới là mối liên hệ",
  "answers": [
    { "content": "Chung", "correct": false },
    { "content": "Quan trọng", "correct": false },
    { "content": "Khá phổ biến", "correct": false },
    { "content": "Phổ biến", "correct": true }
  ],
  "explanation": "Theo phép biện chứng duy vật, mọi sự vật, hiện tượng đều tồn tại trong mối liên hệ phổ biến."
},
{
  "type": "singlechoice",
  "content": "468. Nguyên nhân và kết quả cái nào có trước?",
  "answers": [
    { "content": "Nguyên nhân", "correct": true },
    { "content": "Kết quả", "correct": false },
    { "content": "Cả hai cùng xuất hiện trước", "correct": false },
    { "content": "Không cái nào xuất hiện trước", "correct": false }
  ],
  "explanation": "Trong quan hệ nhân - quả, nguyên nhân luôn có trước và sinh ra kết quả."
},
{
  "type": "singlechoice",
  "content": "469. Mối liên hệ thống nhất và đấu tranh, chuyển hoá giữa các mặt đối lập của mỗi sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng với nhau gọi là khái niệm gì?",
  "answers": [
    { "content": "Sự thống nhất", "correct": false },
    { "content": "Quan hệ hài hò", "correct": false },
    { "content": "Mâu thuẫn", "correct": true }
  ],
  "explanation": "Mâu thuẫn là sự thống nhất và đấu tranh giữa các mặt đối lập, là nguồn gốc của sự vận động, phát triển."
},
{
  "type": "singlechoice",
  "content": "470. Ai là người khẳng định: \"lao động đã sáng tạo ra bản thân con người\"?",
  "answers": [
    { "content": "Ph.Ăngghen", "correct": true },
    { "content": "L.Phoiobác", "correct": false },
    { "content": "Immanuel Kant", "correct": false },
    { "content": "Béccdren", "correct": false }
  ],
  "explanation": "Ph. Ăngghen khẳng định lao động là nhân tố quyết định sự hình thành và phát triển của con người."
},
{
  "type": "singlechoice",
  "content": "471. Theo quan niệm duy vật biện chứng về lịch sử thì để giải thích đúng đắn các vấn đề của đời sống xã hội thì phải tìm nguyên nhân cuối cùng từ thực trạng phát triển của sản xuất vật chất, mà căn bản là từ trình độ phát triển của",
  "answers": [
    { "content": "Phương thức sản xuất của nó", "correct": false },
    { "content": "Quan hệ sản xuất của nó", "correct": true },
    { "content": "Tư liệu sản xuất của nó", "correct": false },
    { "content": "Cơ sở vật chất", "correct": false }
  ],
  "explanation": "Theo chủ nghĩa duy vật lịch sử, quan hệ sản xuất giữ vai trò quyết định trong việc giải thích các hiện tượng xã hội."
},
{
  "type": "singlechoice",
  "content": "472. Trong bài thơ Hồ Chí Minh: \"Tinh thiên - Trời hửng ... Hết khổ là vui vốn lẽ đời.\" cặp phạm trù nào được nhắc đến?",
  "answers": [
    { "content": "Cái chung, cái riêng", "correct": false },
    { "content": "Bản chất, hiện tượng", "correct": false },
    { "content": "Tất nhiên, ngẫu nhiên", "correct": true },
    { "content": "Nguyên nhân, kết quả", "correct": false }
  ],
  "explanation": "Bài thơ phản ánh sự chuyển biến tất yếu từ khổ đau sang hạnh phúc, thể hiện cặp phạm trù tất nhiên và ngẫu nhiên."
},
{
  "type": "singlechoice",
  "content": "473. Lơ xíp (khoảng 500 - 440 trước CN) được xem là?",
  "answers": [
    { "content": "Nhà triết học Giáo hội Cổ đại", "correct": false },
    { "content": "Nhà toán học Hi Lạp Cổ đại", "correct": false },
    { "content": "Nhà triết học Hi Lạp Cổ đại", "correct": true },
    { "content": "Nhà thần học Hi Lạp Cổ đại", "correct": false }
  ],
  "explanation": "Lơ xíp (Leucippus) là một trong những nhà triết học Hy Lạp cổ đại, người sáng lập thuyết nguyên tử."
},
{
  "type": "singlechoice",
  "content": "474. Ai được xem là nhà triết học thiên tài vào thế kỷ XVIII - XIX?",
  "answers": [
    { "content": "Hecralitus", "correct": false },
    { "content": "Immanuel Kant", "correct": true },
    { "content": "Socrates", "correct": false },
    { "content": "Bruno Fesnades", "correct": false }
  ],
  "explanation": "Immanuel Kant là triết gia người Đức, nhà triết học thiên tài thế kỷ XVIII - XIX với các tác phẩm nền tảng cho triết học hiện đại."
},
{
  "type": "singlechoice",
  "content": "488. Sản xuất vật chất là hoạt động có tính chất gì?",
  "answers": [
    { "content": "Tính khách quan, tính tất yếu, tính xã hội, tính văn hóa và tính mục đích", "correct": false },
    { "content": "Tính tất yếu, tính tư duy, tính cộng đồng, tính văn hóa và tính mục đích", "correct": false },
    { "content": "Tính khách quan, tính mục đích, tính xã hội, tính lịch sử và tính sáng tạo", "correct": true },
    { "content": "Tính xã hội, tính lịch sử, tính sáng tạo, tính văn hóa và tính mục đích tự thân", "correct": false }
  ],
  "explanation": "Sản xuất vật chất mang tính khách quan, có mục đích, mang tính xã hội - lịch sử và sáng tạo, phản ánh quy luật phát triển của xã hội."
},
{
  "type": "singlechoice",
  "content": "489. Đâu là một trong những hình thức tồn tại của vật chất?",
  "answers": [
    { "content": "Không gian, thời gian", "correct": true },
    { "content": "Vật thể", "correct": false },
    { "content": "Cái bàn, cái quạt", "correct": false },
    { "content": "Không có phương án đúng", "correct": false }
  ],
  "explanation": "Theo triết học Mác - Lênin, không gian và thời gian là hình thức tồn tại cơ bản của vật chất."
},
{
  "type": "singlechoice",
  "content": "490. Theo chủ nghĩa duy vật lịch sử, lực lượng sản xuất có quan hệ thế nào với quan hệ sản xuất?",
  "answers": [
    { "content": "Quyết định", "correct": false },
    { "content": "Tác động trở lại", "correct": false },
    { "content": "Phụ thuộc", "correct": true },
    { "content": "Không phụ thuộc", "correct": false }
  ],
  "explanation": "Quan hệ sản xuất phụ thuộc vào trình độ phát triển của lực lượng sản xuất. Khi lực lượng sản xuất thay đổi, quan hệ sản xuất cũng cần thay đổi để phù hợp."
},
{
  "type": "singlechoice",
  "content": "491. Chủ nghĩa duy vật cho rằng đâu là bản nguyên của thế giới?",
  "answers": [
    { "content": "Bản chất thế giới là vật chất", "correct": true },
    { "content": "Bản nguyên thế giới là ý thức", "correct": false },
    { "content": "Bản nguyên thế giới là lực lượng siêu nhiên", "correct": false },
    { "content": "Bản nguyên thế giới là Thượng đế", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy vật khẳng định vật chất là bản nguyên của thế giới, ý thức chỉ là sự phản ánh."
},
{
  "type": "singlechoice",
  "content": "492. Thừa nhận sự tồn tại của vật chất và tinh thần là bản nguyên có thể cùng quyết định nguồn gốc và sự vận động của thế giới là trường phái nào?",
  "answers": [
    { "content": "Nhị nguyên luận", "correct": true },
    { "content": "Biện chứng", "correct": false },
    { "content": "Biện chứng luận", "correct": false },
    { "content": "Chủ nghĩa Mác - Lênin", "correct": false }
  ],
  "explanation": "Nhị nguyên luận cho rằng cả vật chất và tinh thần cùng tồn tại song song và quyết định sự vận động của thế giới."
},
{
  "type": "singlechoice",
  "content": "493. Tại sao khi nhìn lên trời, mỗi người đều nhìn thấy đám mây với những hình thù khác nhau?",
  "answers": [
    { "content": "Sự phản ánh năng động, sáng tạo của ý thức", "correct": true },
    { "content": "Do ý muốn chủ quan của mỗi người", "correct": false },
    { "content": "Thế giới khách quan đa dạng phong phú", "correct": false },
    { "content": "Do đám mây hôm đó có hình thù như vật cụ thể nên mỗi người nhìn khác nhau", "correct": false }
  ],
  "explanation": "Sự khác nhau trong tri giác của con người phản ánh tính sáng tạo và năng động của ý thức khi tiếp nhận hiện thực."
},
{
  "type": "singlechoice",
  "content": "494. Theo triết học Mác-xít thì siêu hình và biện chứng là hai phương pháp như thế nào?",
  "answers": [
    { "content": "Đối lập nhau", "correct": true },
    { "content": "Tương tác lẫn nhau", "correct": false },
    { "content": "Bổ sung cho nhau", "correct": false },
    { "content": "Có mối liên hệ với nhau", "correct": false }
  ],
  "explanation": "Phương pháp siêu hình và biện chứng đối lập nhau: siêu hình tách rời sự vật, biện chứng xem xét sự vật trong mối liên hệ và phát triển."
},
{
  "type": "singlechoice",
  "content": "495. Cơ sở của sự tồn tại và phát triển xã hội có nguồn gốc trực tiếp từ đâu?",
  "answers": [
    { "content": "Nền tảng xã hội", "correct": false },
    { "content": "Sản xuất vật chất", "correct": true },
    { "content": "Thế giới vật chất", "correct": false },
    { "content": "Thế giới khách quan", "correct": false }
  ],
  "explanation": "Sản xuất vật chất là cơ sở trực tiếp của sự tồn tại và phát triển xã hội."
},
{
  "type": "singlechoice",
  "content": "496. Tồn tại xã hội là gì?",
  "answers": [
    { "content": "Sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội", "correct": true },
    { "content": "Toàn bộ các giá trị tinh thần của xã hội", "correct": false },
    { "content": "Toàn bộ các điều kiện sinh hoạt của xã hội", "correct": false },
    { "content": "Toàn bộ hệ tư tưởng về sự tồn tại của xã hội", "correct": false }
  ],
  "explanation": "Tồn tại xã hội là toàn bộ sinh hoạt vật chất và điều kiện vật chất của xã hội, quyết định ý thức xã hội."
},
{
  "type": "singlechoice",
  "content": "497. Theo quan điểm của chủ nghĩa duy vật biện chứng thì những mối liên hệ tồn tại ở mọi sự vật, hiện tượng của thế giới là mối liên hệ như thế nào?",
  "answers": [
    { "content": "Chung", "correct": true },
    { "content": "Quan trọng", "correct": false },
    { "content": "Khá phổ biến", "correct": false },
    { "content": "Phổ biến", "correct": false }
  ],
  "explanation": "Theo quan điểm duy vật biện chứng, mối liên hệ phổ biến là mối liên hệ tồn tại ở mọi sự vật và hiện tượng."
},
{
  "type": "singlechoice",
  "content": "498. Vấn đề cơ bản của triết học có hai mặt. Mặt thứ nhất phải trả lời cho hỏi cái nào có trước, cái nào có sau, cái nào quyết định cái nào. Đó là quan hệ giữa cái gì với cái gì?",
  "answers": [
    { "content": "Tư duy với thực tế", "correct": false },
    { "content": "Tư duy với xã hội", "correct": false },
    { "content": "Ý thức và vật chất", "correct": true },
    { "content": "Ý thức và bộ não", "correct": false }
  ],
  "explanation": "Mặt thứ nhất của vấn đề cơ bản triết học là quan hệ giữa vật chất và ý thức – cái nào có trước, cái nào quyết định cái nào."
},
{
  "type": "singlechoice",
  "content": "499. Theo quan điểm của chủ nghĩa duy vật lịch sử, mỗi hình thái kinh tế - xã hội được cấu thành từ những nhân tố nào?",
  "answers": [
    { "content": "Lực lượng sản xuất, kiến trúc thượng tầng", "correct": false },
    { "content": "Quan hệ kinh tế, lực lượng sản xuất và kiến trúc thượng tầng", "correct": false },
    { "content": "Quan hệ sản xuất và kiến trúc thượng tầng", "correct": false },
    { "content": "Lực lượng sản xuất, quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội và kiến trúc thượng tầng", "correct": true }
  ],
  "explanation": "Một hình thái kinh tế - xã hội bao gồm: lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng."
},
{
  "type": "singlechoice",
  "content": "500. Theo quan điểm của chủ nghĩa duy tâm khách quan, mối quan hệ giữa các sự vật do cái gì quyết định?",
  "answers": [
    { "content": "Lực lượng siêu nhiên (thượng đế, ý niệm tuyệt đối)", "correct": true },
    { "content": "Cảm giác, thói quen của con người", "correct": false },
    { "content": "Bản chất của thế giới tự nhiên", "correct": false },
    { "content": "Phức hợp của cảm giác", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy tâm khách quan cho rằng các mối quan hệ giữa sự vật do một lực lượng siêu nhiên hay ý niệm tuyệt đối quyết định."
},
  {
  "type": "singlechoice",
  "content": "501. Nguồn gốc tự nhiên của ý thức bao gồm yếu tố nào?",
  "answers": [
    { "content": "Thế giới vật chất của con người", "correct": false },
    { "content": "Thế giới khách quan", "correct": false },
    { "content": "Não người", "correct": false },
    { "content": "B và C", "correct": true }
  ],
  "explanation": "Ý thức có nguồn gốc tự nhiên từ bộ não con người và sự tác động của thế giới khách quan. Bộ não là cơ sở sinh lý, còn thế giới khách quan cung cấp nội dung phản ánh."
},
{
  "type": "singlechoice",
  "content": "502. Chọn phương án trả lời phù hợp nhất. 'Sự ra đời của Triết học Mác là một quá trình...' Từ còn thiếu trong chỗ trống là gì?",
  "answers": [
    { "content": "Tất yếu khách quan", "correct": true },
    { "content": "Thiết yếu", "correct": false },
    { "content": "\"nhiều hơn và đồ sộ hơn\"... \"thế hệ trước\"", "correct": false },
    { "content": "Đấu tranh của giai cấp", "correct": false }
  ],
  "explanation": "Triết học Mác ra đời là tất yếu khách quan của lịch sử, xuất phát từ yêu cầu phát triển của khoa học, phong trào công nhân và triết học cổ điển Đức."
},
{
  "type": "singlechoice",
  "content": "503. Quan điểm nào thuộc chủ nghĩa duy tâm?",
  "answers": [
    { "content": "Vật chất quyết định ý thức", "correct": false },
    { "content": "Vật chất là tính thứ nhất, ý thức là tính thứ hai", "correct": false },
    { "content": "Vật chất và ý thức song song tồn tại, không cái nào phụ thuộc cái nào", "correct": false },
    { "content": "Ý thức có trước, vật chất có sau; ý thức quyết định vật chất", "correct": true }
  ],
  "explanation": "Chủ nghĩa duy tâm khẳng định ý thức có trước và quyết định vật chất, trái ngược với chủ nghĩa duy vật."
},
{
  "type": "singlechoice",
  "content": "504. Bộ phận nào của tư liệu lao động được coi là tiêu chí phản ánh đặc trưng phát triển của một thời đại kinh tế?",
  "answers": [
    { "content": "Công cụ lao động", "correct": true },
    { "content": "Kết cấu hạ tầng sản xuất", "correct": false },
    { "content": "Nhà cửa, kho bãi để chứa đựng, bảo quản", "correct": false },
    { "content": "Quan hệ sản xuất", "correct": false }
  ],
  "explanation": "Công cụ lao động là thước đo trình độ phát triển của lực lượng sản xuất, phản ánh đặc trưng của một thời đại kinh tế."
},
{
  "type": "singlechoice",
  "content": "505. Theo quan điểm của phép biện chứng duy vật, quy luật nào là quy luật về khuynh hướng cơ bản, phổ biến của mọi sự vận động và phát triển?",
  "answers": [
    { "content": "Vận động", "correct": false },
    { "content": "Lượng đổi, chất đổi", "correct": false },
    { "content": "Mâu thuẫn", "correct": false },
    { "content": "Phủ định của phủ định", "correct": true }
  ],
  "explanation": "Quy luật phủ định của phủ định chỉ ra khuynh hướng phát triển đi lên theo hình thức xoáy ốc, kế thừa và phát triển."
},
{
  "type": "singlechoice",
  "content": "506. Đâu không phải là quan điểm của Chủ nghĩa Mác-Lênin về lãnh tụ?",
  "answers": [
    { "content": "Những cá nhân kiệt xuất trong nhiều lĩnh vực", "correct": true },
    { "content": "Những cá nhân kiệt xuất có sự gắn bó với quần chúng nhân dân", "correct": false },
    { "content": "Những cá nhân kiệt xuất được quần chúng tín nhiệm", "correct": false },
    { "content": "Những cá nhân kiệt xuất tự nguyện hy sinh bản thân mình vì lợi ích của quần chúng nhân dân", "correct": false }
  ],
  "explanation": "Lãnh tụ trong quan điểm Mác - Lênin luôn gắn bó, phục vụ và được nhân dân tín nhiệm, chứ không chỉ đơn thuần là cá nhân kiệt xuất."
},
{
  "type": "singlechoice",
  "content": "507. Trong các yếu tố của lực lượng sản xuất, yếu tố nào là quan trọng nhất?",
  "answers": [
    { "content": "Tư liệu sản xuất", "correct": false },
    { "content": "Người lao động", "correct": true },
    { "content": "Đối tượng lao động", "correct": false },
    { "content": "Máy móc và công nghệ hiện đại", "correct": false }
  ],
  "explanation": "Người lao động là yếu tố quyết định vì họ trực tiếp vận hành, sáng tạo và sử dụng tư liệu sản xuất."
},
{
  "type": "singlechoice",
  "content": "508. Tiền đề xuất phát của chủ nghĩa duy vật lịch sử là gì?",
  "answers": [
    { "content": "Con người hiện thực", "correct": false },
    { "content": "Con người trừu tượng", "correct": true },
    { "content": "Con người hành động", "correct": false },
    { "content": "Con người tư duy", "correct": false }
  ],
  "explanation": "Chủ nghĩa duy vật lịch sử xuất phát từ con người hiện thực trong đời sống vật chất, nhưng phân tích trên cơ sở khái niệm con người không trừu tượng mà là con người trong quan hệ xã hội cụ thể."
},
{
  "type": "singlechoice",
  "content": "509. Quan điểm lịch sử cụ thể được rút ra từ nghiên cứu nguyên lý triết học nào?",
  "answers": [
    { "content": "Nguyên lý duy vật lịch sử", "correct": false },
    { "content": "Nguyên lý về mối liên hệ phổ biến", "correct": true },
    { "content": "Nguyên lý phát triển", "correct": false },
    { "content": "Nguyên lý triết học thực hành", "correct": false }
  ],
  "explanation": "Quan điểm lịch sử - cụ thể yêu cầu xem xét sự vật trong điều kiện lịch sử cụ thể của nó, rút ra từ nguyên lý về mối liên hệ phổ biến."
},
{
  "type": "singlechoice",
  "content": "510. Theo triết học Mác - Lênin, mối quan hệ giữa 'sự thống nhất và đấu tranh của các mặt đối lập' là như thế nào?",
  "answers": [
    { "content": "Sự thống nhất và đấu tranh của các mặt đối lập là thống nhất. Không có thống nhất thì cũng không có đấu tranh", "correct": true },
    { "content": "Sự đấu tranh của các mặt đối lập vừa tương đối, vừa tuyệt đối", "correct": false },
    { "content": "Không có sự thống nhất thì vẫn có đấu tranh", "correct": false },
    { "content": "Không có sự đấu tranh thì có thể vẫn có sự thống nhất", "correct": false }
  ],
  "explanation": "Trong phép biện chứng, sự thống nhất và đấu tranh của các mặt đối lập gắn bó chặt chẽ, tạo nên động lực phát triển."
},
{
  "type": "singlechoice",
  "content": "511. Ai là người định nghĩa: 'Vật chất là cái phi vật chất đang vận động'?",
  "answers": [
    { "content": "Makho", "correct": false },
    { "content": "Anhxtanh", "correct": false },
    { "content": "Béc cơren", "correct": false },
    { "content": "Henri Berson (Piecson)", "correct": true }
  ],
  "explanation": "Henri Bergson quan niệm vật chất là cái phi vật chất đang vận động, thể hiện quan điểm duy tâm trực quan."
},
{
  "type": "singlechoice",
  "content": "512. Theo chủ nghĩa duy vật lịch sử, những biến đổi từ đâu tạo ra nhu cầu khách quan phải có sự biến đổi tương ứng trong kiến trúc thượng tầng?",
  "answers": [
    { "content": "Cơ sở hạ tầng", "correct": true },
    { "content": "Lực lượng sản xuất", "correct": false },
    { "content": "Quan hệ sản xuất", "correct": false }
  ],
  "explanation": "Cơ sở hạ tầng (bao gồm lực lượng sản xuất và quan hệ sản xuất) quyết định kiến trúc thượng tầng, khi biến đổi sẽ kéo theo sự biến đổi của thượng tầng."
},
{
  "type": "singlechoice",
  "content": "513. Chọn câu trả lời đúng nhất theo quan điểm duy vật lịch sử: Tính lịch sử - tự nhiên của sự phát triển xã hội tức là khẳng định gì?",
  "answers": [
    { "content": "Hoàn toàn tuân theo quy luật khách quan của giới tự nhiên", "correct": false },
    { "content": "Hoàn toàn tuân theo quy luật khách quan của xã hội", "correct": false },
    { "content": "Hoàn toàn tuân theo quy luật khách quan của tự nhiên và xã hội", "correct": false },
    { "content": "Tuân theo quy luật khách quan nhưng đồng thời chịu sự tác động của các nhân tố khác", "correct": true }
  ],
  "explanation": "Sự phát triển xã hội vừa tuân theo quy luật khách quan vừa chịu ảnh hưởng của nhiều nhân tố chủ quan và khách quan khác."
},
{
  "type": "singlechoice",
  "content": "514. Trong phép biện chứng duy vật, giữa hình thức và nội dung, yếu tố nào giữ vai trò quyết định?",
  "answers": [
    { "content": "Quyết định", "correct": true },
    { "content": "Phụ thuộc", "correct": false },
    { "content": "Không phụ thuộc", "correct": false },
    { "content": "Ít phụ thuộc", "correct": false }
  ],
  "explanation": "Nội dung quyết định hình thức, tuy nhiên hình thức có tác động trở lại nội dung."
},
{
  "type": "singlechoice",
  "content": "515. Cơ sở chủ yếu nhất để hình thành nên khái niệm là gì?",
  "answers": [
    { "content": "Thế giới tự nhiên", "correct": false },
    { "content": "Thực tiễn", "correct": true },
    { "content": "Cảm giác", "correct": false },
    { "content": "Tri giác và biểu tượng", "correct": false }
  ],
  "explanation": "Thực tiễn là cơ sở chủ yếu để con người khái quát thành khái niệm, phản ánh bản chất sự vật."
},
{
  "type": "singlechoice",
  "content": "516. Theo chủ nghĩa duy vật, bất kỳ sự vật, hiện tượng nào cũng có mối liên hệ với cái khác. Đây là biểu hiện tính chất nào?",
  "answers": [
    { "content": "Tính đa dạng", "correct": false },
    { "content": "Tính khách quan", "correct": false },
    { "content": "Tính phổ biến", "correct": true },
    { "content": "Tính chung nhất", "correct": false }
  ],
  "explanation": "Mọi sự vật hiện tượng đều liên hệ, tác động qua lại với nhau, thể hiện tính phổ biến của mối liên hệ."
},
{
  "type": "singlechoice",
  "content": "517. 'Phương pháp biện chứng của tôi không những khác phương pháp của Hêghen về cơ bản mà còn đối lập hẳn với phương pháp ấy nữa' là luận điểm của ai?",
  "answers": [
    { "content": "Phoiơbắc", "correct": false },
    { "content": "Ph. Ăngghen", "correct": false },
    { "content": "V.I. Lênin", "correct": false },
    { "content": "C. Mác", "correct": true }
  ],
  "explanation": "C. Mác khẳng định phương pháp biện chứng duy vật đối lập với phép biện chứng duy tâm của Hêghen."
},
{
  "type": "singlechoice",
  "content": "518. Yếu tố biện chứng trong triết học Phật giáo thể hiện qua quan điểm nào?",
  "answers": [
    { "content": "Vô thường, nhân duyên", "correct": false },
    { "content": "Bát chính đạo", "correct": false },
    { "content": "Bát khổ", "correct": false },
    { "content": "Vô thường, vô ngã, vô tạo giả", "correct": true }
  ],
  "explanation": "Triết học Phật giáo thể hiện yếu tố biện chứng ở quan điểm về vô thường, vô ngã và nhân duyên."
},
{
  "type": "singlechoice",
  "content": "519. Đấu tranh của hai mặt đối lập là gì?",
  "answers": [
    { "content": "Sự tác động qua lại theo xu hướng bài trừ và phủ định lẫn nhau", "correct": true },
    { "content": "Sự tác động lẫn nhau theo khuynh hướng biện chứng", "correct": false },
    { "content": "Các phương án trả lời đều sai", "correct": false }
  ],
  "explanation": "Đấu tranh của các mặt đối lập là sự bài trừ, phủ định lẫn nhau, tạo ra động lực phát triển."
},
{
  "type": "singlechoice",
  "content": "520. Theo triết học Mác - Lênin, nhà nước có mấy đặc trưng?",
  "answers": [
    { "content": "Hai đặc trưng", "correct": false },
    { "content": "Ba đặc trưng", "correct": false },
    { "content": "Bốn đặc trưng", "correct": false },
    { "content": "Năm đặc trưng", "correct": true }
  ],
  "explanation": "Theo quan điểm Mác - Lênin, nhà nước có 5 đặc trưng cơ bản, trong đó quan trọng nhất là công cụ giai cấp thống trị."
},
  {
  "type": "singlechoice",
  "content": "521. Thông thường, trong kiến trúc thượng tầng các nhà nước tư bản hiện nay:",
  "answers": [
    { "content": "Đều thực hiện chế độ nhất nguyên chính trị", "correct": false },
    { "content": "Không thực hiện chế độ đa nguyên chính trị", "correct": false },
    { "content": "Tùy từng nước mà có thể thực hiện chế độ đa nguyên chính trị hay không", "correct": false },
    { "content": "Thực hiện chế độ đa đảng nhưng nhất nguyên chính trị", "correct": true }
  ],
  "explanation": "Trong xã hội tư bản, hình thức là đa đảng nhưng thực chất quyền lực chính trị phục vụ lợi ích giai cấp tư sản nên vẫn là nhất nguyên chính trị."
},
{
  "type": "singlechoice",
  "content": "522. Theo quan điểm của phép biện chứng duy vật thì những thay đổi về chất của sự vật lại tạo ra những thay đổi gì của sự vật trên các phương diện khác nhau?",
  "answers": [
    { "content": "Biến đổi mới về lượng", "correct": true },
    { "content": "Biến đổi của chất", "correct": false },
    { "content": "Chất mới", "correct": false },
    { "content": "Cái mới", "correct": false }
  ],
  "explanation": "Khi chất thay đổi sẽ dẫn tới sự biến đổi về lượng mới, tạo vòng phát triển tiếp theo của sự vật."
},
{
  "type": "singlechoice",
  "content": "523. Theo quan điểm của chủ nghĩa Mác-Lênin, Kiến trúc thượng tầng là gì?",
  "answers": [
    { "content": "Toàn bộ thiết chế chính trị của xã hội", "correct": false },
    { "content": "Toàn bộ thiết chế chính trị và pháp luật của xã hội", "correct": false },
    { "content": "Toàn bộ thiết chế chính trị - xã hội", "correct": false },
    { "content": "Toàn bộ hệ thống kết cấu các hình thái ý thức xã hội cùng với các thiết chế chính trị - xã hội tương ứng", "correct": true }
  ],
  "explanation": "Kiến trúc thượng tầng bao gồm hệ thống ý thức xã hội (chính trị, pháp luật, tôn giáo...) và các thiết chế tương ứng, gắn với cơ sở hạ tầng kinh tế."
},
{
  "type": "singlechoice",
  "content": "524. Cơ sở để phân chia triết học thành các trường phái khác nhau là:",
  "answers": [
    { "content": "Vấn đề cơ bản của nhận thức luận", "correct": false },
    { "content": "Vấn đề cơ bản của phương pháp luận", "correct": false },
    { "content": "Vấn đề cơ bản của triết học", "correct": true }
  ],
  "explanation": "Các trường phái triết học được phân chia dựa vào cách giải quyết vấn đề cơ bản của triết học: mối quan hệ giữa vật chất và ý thức."
},
{
  "type": "singlechoice",
  "content": "525. Thuộc tính cơ bản nhất, phổ biến nhất của mọi tồn tại vật chất được khái quát trong phạm trù vật chất của chủ nghĩa duy vật biện chứng là:",
  "answers": [
    { "content": "Không gian và thời gian", "correct": false },
    { "content": "Tồn tại khách quan", "correct": true },
    { "content": "Tồn tại trong vận động", "correct": false },
    { "content": "Vận động và đứng im", "correct": false }
  ],
  "explanation": "Vật chất theo Mác-Lênin có thuộc tính cơ bản nhất là tồn tại khách quan, độc lập với ý thức."
},
{
  "type": "singlechoice",
  "content": "526. Luận điểm 'Bản chất là những thực thể tinh thần tồn tại khách quan, quyết định sự tồn tại của sự vật' thuộc lập trường triết học nào?",
  "answers": [
    { "content": "Chủ nghĩa duy tâm chủ quan", "correct": false },
    { "content": "Chủ nghĩa duy tâm khách quan", "correct": true },
    { "content": "Chủ nghĩa duy vật siêu hình", "correct": false },
    { "content": "Tất cả các đáp án đều đúng", "correct": false }
  ],
  "explanation": "Quan điểm này cho rằng bản chất là các thực thể tinh thần tồn tại khách quan (ý niệm, tinh thần tuyệt đối), tiêu biểu cho chủ nghĩa duy tâm khách quan."
}
]
