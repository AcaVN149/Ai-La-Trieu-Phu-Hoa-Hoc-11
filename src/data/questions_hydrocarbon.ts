import { Question, Topic, Difficulty } from "../types";

const REAL_QUESTIONS: Question[] = [
  // EASY
  { topic: "hydrocarbon", level: "easy", question: "Công thức tổng quát của alkane (no, mạch hở) là:", options: ["A. C<sub>n</sub>H<sub>2n</sub>", "B. C<sub>n</sub>H<sub>2n+2</sub>", "C. C<sub>n</sub>H<sub>2n−2</sub>", "D. C<sub>n</sub>H<sub>2n−6</sub>"], answer: 1, explanation: "Alkane là hydrocarbon no, mạch hở có công thức chung C<sub>n</sub>H<sub>2n+2</sub> (n ≥ 1)." },
  { topic: "hydrocarbon", level: "easy", question: "Hydrocarbon nào sau đây làm mất màu dung dịch brom ngay ở nhiệt độ thường?", options: ["A. Methane", "B. Ethane", "C. Ethylene", "D. Benzene"], answer: 2, explanation: "Ethylene (CH<sub>2</sub>=CH<sub>2</sub>) có liên kết đôi, tham gia phản ứng cộng brom dễ dàng." },
  { topic: "hydrocarbon", level: "easy", question: "Tên gọi của CH<sub>3</sub>−CH<sub>2</sub>−CH<sub>3</sub> là:", options: ["A. Methane", "B. Ethane", "C. Propane", "D. Butane"], answer: 2, explanation: "Mạch chính có 3 nguyên tử carbon nên tên là Propane." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là thành phần chính của khí thiên nhiên?", options: ["A. Methane", "B. Acetylene", "C. Ethylene", "D. Benzene"], answer: 0, explanation: "Methane (CH<sub>4</sub>) chiếm 90−95% thể tích khí thiên nhiên." },
  { topic: "hydrocarbon", level: "easy", question: "Liên kết trong phân tử alkane là:", options: ["A. Chỉ có liên kết đơn", "B. Liên kết đôi", "C. Liên kết ba", "D. Liên kết ion"], answer: 0, explanation: "Alkane chỉ chứa các liên kết đơn C−C và C−H bền vững." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức cấu tạo của acetylene là:", options: ["A. CH<sub>2</sub>=CH<sub>2</sub>", "B. CH≡CH", "C. CH<sub>4</sub>", "D. C<sub>6</sub>H<sub>6</sub>"], answer: 1, explanation: "Acetylene có một liên kết ba: CH≡CH." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng đặc trưng của methane là:", options: ["A. Phản ứng cộng", "B. Phản ứng thế", "C. Phản ứng trùng hợp", "D. Phản ứng thủy phân"], answer: 1, explanation: "Do chỉ có liên kết đơn, methane thực hiện phản ứng thế halogen dưới ánh sáng." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm của phản ứng đốt cháy hoàn toàn hydrocarbon là:", options: ["A. CO và H<sub>2</sub>", "B. C và H<sub>2</sub>O", "C. CO<sub>2</sub> và H<sub>2</sub>O", "D. CO<sub>2</sub> và H<sub>2</sub>"], answer: 2, explanation: "Đốt cháy hoàn toàn hydrocarbon luôn thu được khí CO<sub>2</sub> và hơi nước." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây thuộc dãy đồng đẳng của benzene?", options: ["A. Styrene", "B. Toluene", "C. Naphthalene", "D. Cyclohexane"], answer: 1, explanation: "Toluene (C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>) là đồng đẳng đơn giản nhất của benzene." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức phân tử của benzene là:", options: ["A. C<sub>6</sub>H<sub>12</sub>", "B. C<sub>6</sub>H<sub>6</sub>", "C. C<sub>6</sub>H<sub>14</sub>", "D. C<sub>6</sub>H<sub>10</sub>"], answer: 1, explanation: "Benzene có công thức C<sub>6</sub>H<sub>6</sub> với cấu trúc vòng 6 cạnh bền." },
  { topic: "hydrocarbon", level: "easy", question: "Anken là những hydrocarbon:", options: ["A. No, mạch hở", "B. Không no, mạch hở, có 1 liên kết đôi", "C. Không no, mạch hở, có 1 liên kết ba", "D. Có cấu trúc vòng"], answer: 1, explanation: "Anken (Alkene) là hydrocarbon không no, mạch hở, có một liên kết đôi C=C." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là khí ở điều kiện thường?", options: ["A. Benzene", "B. Hexane", "C. Ethane", "D. Octane"], answer: 2, explanation: "Các alkane từ C<sub>1</sub>−C<sub>4</sub> là chất khí ở điều kiện thường." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng trùng hợp ethylene tạo ra:", options: ["A. PE", "B. PVC", "C. PS", "D. PP"], answer: 0, explanation: "Trùng hợp ethylene thu được Polyethylene (PE)." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức chung của dãy đồng đẳng alkene là:", options: ["A. C<sub>n</sub>H<sub>2n+2</sub> (n ≥ 1)", "B. C<sub>n</sub>H<sub>2n</sub> (n ≥ 2)", "C. C<sub>n</sub>H<sub>2n−2</sub> (n ≥ 2)", "D. C<sub>n</sub>H<sub>2n−6</sub> (n ≥ 6)"], answer: 1, explanation: "Alkene có công thức chung là C<sub>n</sub>H<sub>2n</sub> với n ≥ 2." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây thuộc dãy đồng đẳng alkane?", options: ["A. C<sub>2</sub>H<sub>4</sub>", "B. C<sub>3</sub>H<sub>8</sub>", "C. C<sub>2</sub>H<sub>2</sub>", "D. C<sub>6</sub>H<sub>6</sub>"], answer: 1, explanation: "C<sub>3</sub>H<sub>8</sub> (Propane) thỏa mãn công thức C<sub>n</sub>H<sub>2n+2</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Tên thay thế của CH<sub>3</sub>−CH<sub>3</sub> là:", options: ["A. Methane", "B. Ethane", "C. Propane", "D. Butane"], answer: 1, explanation: "C<sub>2</sub>H<sub>6</sub> có tên thay thế là Ethane." },
  { topic: "hydrocarbon", level: "easy", question: "Số liên kết pi (π) trong phân tử ethylene (CH<sub>2</sub>=CH<sub>2</sub>) là:", options: ["A. 0", "B. 1", "C. 2", "D. 3"], answer: 1, explanation: "Liên kết đôi gồm 1 liên kết sigma (σ) và 1 liên kết pi (π)." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là alkyne?", options: ["A. C<sub>2</sub>H<sub>6</sub>", "B. C<sub>2</sub>H<sub>4</sub>", "C. C<sub>2</sub>H<sub>2</sub>", "D. C<sub>6</sub>H<sub>6</sub>"], answer: 2, explanation: "C<sub>2</sub>H<sub>2</sub> (Acetylene) là alkyne đơn giản nhất." },
  { topic: "hydrocarbon", level: "easy", question: "Trong phân tử thuốc nổ TNT, người ta điều chế từ arene nào?", options: ["A. Benzene", "B. Toluene", "C. Xylene", "D. Naphthalene"], answer: 1, explanation: "TNT (Trinitrotoluene) được điều chế từ arene Toluene thông qua phản ứng nitrat hóa." },
  { topic: "hydrocarbon", level: "easy", question: "Methane (CH<sub>4</sub>) có cấu trúc hình học là:", options: ["A. Hình vuông phẳng", "B. Hình tứ diện đều", "C. Hình chóp tam giác", "D. Đường thẳng"], answer: 1, explanation: "Nguyên tử C ở trạng thái lai hóa sp<sup>3</sup> tạo cấu trúc tứ diện đều." },
  { topic: "hydrocarbon", level: "easy", question: "Đồng phân là những chất có cùng:", options: ["A. Công thức phân tử", "B. Công thức cấu tạo", "C. Tính chất hóa học", "D. Tính chất vật lý"], answer: 0, explanation: "Các chất có cùng công thức phân tử nhưng cấu tạo khác nhau gọi là đồng phân." },
  { topic: "hydrocarbon", level: "easy", question: "Alkene còn có tên gọi khác là:", options: ["A. Paraffin", "B. Olefin", "C. Arene", "D. Naphthene"], answer: 1, explanation: "Olefin là tên gọi cũ của các alkene do khả năng tạo chất lỏng dạng dầu khi phản ứng với halogen." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây có liên kết ba trong phân tử?", options: ["A. Methane", "B. Ethylene", "C. Acetylene", "D. Benzene"], answer: 2, explanation: "Acetylene (CH≡CH) có một liên kết ba." },
  { topic: "hydrocarbon", level: "easy", question: "Tên thông thường của C<sub>6</sub>H<sub>5</sub>−CH<sub>3</sub> là:", options: ["A. Styrene", "B. Toluene", "C. Xylene", "D. Cumene"], answer: 1, explanation: "C<sub>6</sub>H<sub>5</sub>−CH<sub>3</sub> thường được gọi là Toluene." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng của alkane với chlorine dưới ánh sáng khuếch tán thuộc loại phản ứng:", options: ["A. Cộng", "B. Thế", "C. Tách", "D. Trùng hợp"], answer: 1, explanation: "Alkane tham gia phản ứng thế nguyên tử hydrogen bằng halogen." },
  { topic: "hydrocarbon", level: "easy", question: "Số liên kết đơn trong phân tử methane là:", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 3, explanation: "CH<sub>4</sub> có 4 liên kết đơn C−H." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây được dùng để hàn cắt kim loại?", options: ["A. Methane", "B. Ethane", "C. Acetylene", "D. Propane"], answer: 2, explanation: "Đèn xì oxygen−acetylene có nhiệt độ rất cao, dùng để hàn cắt kim loại." },
  { topic: "hydrocarbon", level: "easy", question: "Ank−1−in là những alkyne có liên kết ba ở vị trí:", options: ["A. Cuối mạch", "B. Giữa mạch", "C. Bất kỳ", "D. Đầu mạch"], answer: 3, explanation: "Ank−1−in có liên kết ba nằm ở nguyên tử carbon số 1 (đầu mạch)." },
  { topic: "hydrocarbon", level: "easy", question: "Cấu tạo của benzene gồm:", options: ["A. 6 nguyên tử C tạo vòng lục giác đều", "B. 6 nguyên tử C tạo mạch thẳng", "C. 5 nguyên tử C tạo vòng", "D. 6 nguyên tử C tạo vòng lục giác không đều"], answer: 0, explanation: "Benzene có cấu trúc vòng lục giác đều phẳng, các liên kết C−C tương đương nhau." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây KHÔNG làm mất màu dung dịch brom?", options: ["A. Ethylene", "B. Acetylene", "C. Propene", "D. Methane"], answer: 3, explanation: "Methane là hydrocarbon no, không có phản ứng cộng với dung dịch brom." },
  { topic: "hydrocarbon", level: "easy", question: "Alkane có nhiệt độ sôi thấp nhất là:", options: ["A. Methane", "B. Ethane", "C. Propane", "D. Butane"], answer: 0, explanation: "Trong dãy đồng đẳng, phân tử khối càng nhỏ thì nhiệt độ sôi càng thấp. Methane là nhỏ nhất." },
  { topic: "hydrocarbon", level: "easy", question: "Dãy đồng đẳng của benzene có công thức chung là:", options: ["A. C<sub>n</sub>H<sub>2n−2</sub>", "B. C<sub>n</sub>H<sub>2n−4</sub>", "C. C<sub>n</sub>H<sub>2n−6</sub>", "D. C<sub>n</sub>H<sub>2n</sub>"], answer: 2, explanation: "Công thức chung của arene (đồng đẳng benzene) là C<sub>n</sub>H<sub>2n−6</sub> (n ≥ 6)." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng làm mất màu dung dịch KMnO<sub>4</sub> của ethylene thuộc loại phản ứng:", options: ["A. Oxi hóa − khử", "B. Thế", "C. Cộng", "D. Trùng hợp"], answer: 0, explanation: "Ethylene bị oxi hóa không hoàn toàn bởi KMnO<sub>4</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là hydrocarbon thơm?", options: ["A. Cyclohexane", "B. Benzene", "C. Hexene", "D. Hexyne"], answer: 1, explanation: "Benzene là đại diện tiêu biểu của hydrocarbon thơm (arene)." },
  { topic: "hydrocarbon", level: "easy", question: "Khi cracking butane, ta có thể thu được sản phẩm là:", options: ["A. Methane và Propene", "B. Ethane và Propane", "C. Chỉ có Hydrogen", "D. Carbon và Hydrogen"], answer: 0, explanation: "C<sub>4</sub>H<sub>10</sub> → CH<sub>4</sub> + C<sub>3</sub>H<sub>6</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm thế khi clo hóa methane (tỉ lệ 1:1) là:", options: ["A. CH<sub>3</sub>Cl", "B. CH<sub>2</sub>Cl<sub>2</sub>", "C. CHCl<sub>3</sub>", "D. CCl<sub>4</sub>"], answer: 0, explanation: "CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl." },
  { topic: "hydrocarbon", level: "easy", question: "Tên thay thế của CH<sub>2</sub>=CH<sub>2</sub> là:", options: ["A. Ethane", "B. Ethylene", "C. Ethene", "D. Ethyne"], answer: 2, explanation: "Theo danh pháp IUPAC, alkene C<sub>2</sub>H<sub>4</sub> có tên là Ethene (Ethylene là tên thường)." },
  { topic: "hydrocarbon", level: "easy", question: "Liên kết đôi gồm những loại liên kết nào?", options: ["A. 2 liên kết sigma", "B. 2 liên kết pi", "C. 1 liên kết sigma và 1 liên kết pi", "D. 1 liên kết đơn và 1 liên kết đôi"], answer: 2, explanation: "Liên kết đôi luôn gồm một liên kết σ bền và một liên kết π kém bền." },
  { topic: "hydrocarbon", level: "easy", question: "Acetylene thuộc dãy đồng đẳng nào?", options: ["A. Alkane", "B. Alkene", "C. Alkyne", "D. Arene"], answer: 2, explanation: "Acetylene (Ethyne) có liên kết ba nên thuộc dãy alkyne." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây tan tốt trong nước?", options: ["A. Methane", "B. Benzene", "C. Ethylene", "D. Không chất nào ở trên"], answer: 3, explanation: "Các hydrocarbon hầu như không tan trong nước và nhẹ hơn nước." },
  { topic: "hydrocarbon", level: "easy", question: "Dãy nào sau đây chỉ gồm các hydrocarbon?", options: ["A. CH<sub>4</sub>, C<sub>2</sub>H<sub>2</sub>, C<sub>3</sub>H<sub>7</sub>OH", "B. C<sub>2</sub>H<sub>4</sub>, CH<sub>4</sub>, C<sub>6</sub>H<sub>6</sub>", "C. C<sub>2</sub>H<sub>6</sub>, C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>, CH<sub>3</sub>Cl", "D. C<sub>3</sub>H<sub>8</sub>, C<sub>2</sub>H<sub>5</sub>Cl, C<sub>2</sub>H<sub>2</sub>"], answer: 1, explanation: "Hydrocarbon chỉ chứa hai nguyên tố C và H." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng đặc trưng của anken là phản ứng:", options: ["A. Thế", "B. Cộng", "C. Tách", "D. Oxi hóa"], answer: 1, explanation: "Do có liên kết pi kém bền, anken ưu tiên tham gia phản ứng cộng." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức phân tử của toluene là:", options: ["A. C<sub>6</sub>H<sub>6</sub>", "B. C<sub>7</sub>H<sub>8</sub>", "C. C<sub>8</sub>H<sub>10</sub>", "D. C<sub>7</sub>H<sub>6</sub>"], answer: 1, explanation: "Toluene (methylbenzene) có công thức C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> hay C<sub>7</sub>H<sub>8</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Để thu được nhựa PE, người ta thực hiện phản ứng gì từ ethylene?", options: ["A. Cộng", "B. Thế", "C. Trùng hợp", "D. Phân hủy"], answer: 2, explanation: "Nhựa Polyethylene (PE) được tạo ra từ phản ứng trùng hợp các mắt xích ethylene." },
  { topic: "hydrocarbon", level: "easy", question: "Hóa chất nào dùng để thử sự hiện diện của acetylene (ethyne)?", options: ["A. Quỳ tím", "B. Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>", "C. NaOH", "D. NaCl"], answer: 1, explanation: "Acetylene tạo kết tủa vàng với AgNO<sub>3</sub>/NH<sub>3</sub>, đây là phản ứng nhận biết đặc trưng." },
  { topic: "hydrocarbon", level: "easy", question: "Số nguyên tử C tối thiểu để alkane có đồng phân mạch carbon là:", options: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: 2, explanation: "Butane (C<sub>4</sub>H<sub>10</sub>) là alkane đầu tiên có đồng phân (mạch thẳng và mạch nhánh)." },
  { topic: "hydrocarbon", level: "easy", question: "Tên thay thế của CH≡CH là:", options: ["A. Ethene", "B. Ethyne", "C. Acetylene", "D. Ethane"], answer: 1, explanation: "Theo IUPAC, acetylene có tên là Ethyne." },
  { topic: "hydrocarbon", level: "easy", question: "Trong arene, benzene và các đồng đẳng của nó có tính chất chung là:", options: ["A. Dễ cộng, khó thế", "B. Dễ thế, khó cộng", "C. Dễ cháy", "D. Tan tốt trong nước"], answer: 1, explanation: "Hệ liên kết pi liên hợp bền vững làm cho arene ưu tiên thế và khó cộng (tính thơm)." },
  { topic: "hydrocarbon", level: "easy", question: "Khí thiên nhiên có thành phần chính là chất nào?", options: ["A. Ethane", "B. Propane", "C. Methane", "D. Butane"], answer: 2, explanation: "Methane chiếm tỉ lệ lớn nhất trong khí thiên nhiên (thường trên 90%)." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là đồng đẳng của methane?", options: ["A. Ethane", "B. Ethylene", "C. Acetylene", "D. Benzene"], answer: 0, explanation: "Ethane (C<sub>2</sub>H<sub>6</sub>) thuộc dãy đồng đẳng alkane." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm chính của phản ứng thế bromine vào benzene (xúc tác bột Fe) là:", options: ["A. Bromobenzene", "B. Dibromobenzene", "C. Hexabromocyclohexane", "D. Benzyl bromide"], answer: 0, explanation: "Benzene thế một nguyên tử H bằng Br tạo bromobenzene." },
  { topic: "hydrocarbon", level: "easy", question: "Liên kết đôi C=C dài hơn hay ngắn hơn liên kết đơn C−C?", options: ["A. Dài hơn", "B. Ngắn hơn", "C. Bằng nhau", "D. Không so sánh được"], answer: 1, explanation: "Liên kết bội (đôi, ba) luôn ngắn hơn và bền hơn liên kết đơn tương đương." },
  { topic: "hydrocarbon", level: "easy", question: "Đồng phân cis−trans thuộc loại đồng phân nào?", options: ["A. Đồng phân mạch carbon", "B. Đồng phân hình học", "C. Đồng phân nhóm chức", "D. Đồng phân vị trí liên kết bội"], answer: 1, explanation: "Cis−trans là loại đồng phân hình học phát sinh do sự cản trở quay quanh liên kết đôi." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây được gọi là khí mỏ dầu?", options: ["A. Methane", "B. Ethane", "C. Khí thiên nhiên", "D. Khí đồng hành"], answer: 3, explanation: "Khí mỏ dầu (khí đồng hành) là các hydrocarbon khí hòa tan trong dầu mỏ." },
  { topic: "hydrocarbon", level: "easy", question: "Trong phân tử ethylene, các nguyên tử nằm trên cùng một:", options: ["A. Mặt phẳng", "B. Đường thẳng", "C. Khối tứ diện", "D. Khối hình lập phương"], answer: 0, explanation: "Ethylene có cấu trúc phẳng, tất cả 6 nguyên tử nằm trên một mặt phẳng." },
  { topic: "hydrocarbon", level: "easy", question: "Alkene nào có công thức C<sub>3</sub>H<sub>6</sub>?", options: ["A. Ethene", "B. Propene", "C. Butene", "D. Pentene"], answer: 1, explanation: "Propene là alkene có 3 nguyên tử carbon C<sub>3</sub>H<sub>6</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Alkyne đơn giản nhất là:", options: ["A. Methane", "B. Ethene", "C. Ethyne", "D. Propyne"], answer: 2, explanation: "Ethyne (acetylene) là alkyne đầu tiên trong dãy đồng đẳng." },
  { topic: "hydrocarbon", level: "easy", question: "Benzene có thể được thu được từ quá trình nào sau đây?", options: ["A. Chưng cất nhựa than đá", "B. Phản ứng cháy", "C. Phản ứng trùng hợp alkene", "D. Phản ứng thủy phân"], answer: 0, explanation: "Nhựa than đá là nguồn quan trọng để chiết tách benzene và các hydrocarbon thơm khác." },
  { topic: "hydrocarbon", level: "easy", question: "Gốc C<sub>6</sub>H<sub>5</sub>−CH<sub>2</sub>− được gọi là gốc:", options: ["A. Phenyl", "B. Benzyl", "C. Ethyl", "D. Methyl"], answer: 1, explanation: "Gốc C<sub>6</sub>H<sub>5</sub>−CH<sub>2</sub>− gọi là gốc benzyl." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là chất lỏng ở điều kiện thường?", options: ["A. Methane", "B. Ethylene", "C. Benzene", "D. Propylene"], answer: 2, explanation: "Benzene là chất lỏng, không màu, có mùi đặc trưng." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng của benzene với Cl<sub>2</sub> (xúc tác bột Fe) tạo ra sản phẩm chính là:", options: ["A. Chlorobenzene", "B. Benzyl chloride", "C. Hexachlorocyclohexane", "D. 1,2−dichlorobenzene"], answer: 0, explanation: "Trong điều kiện này, benzene tham gia phản ứng thế Cl<sub>2</sub> tạo chlorobenzene." },
  { topic: "hydrocarbon", level: "easy", question: "LPG (Liquefied Petroleum Gas) là hỗn hợp hai chất nào?", options: ["A. Methane và Ethane", "B. Propane và Butane", "C. Pentane và Hexane", "D. Ethylene và Propylene"], answer: 1, explanation: "LPG (gas nấu ăn) chủ yếu là Propane và Butane nén lỏng." },
  { topic: "hydrocarbon", level: "easy", question: "Hydrocarbon không no là những hydrocarbon:", options: ["A. Chỉ có liên kết đơn", "B. Có liên kết pi (đôi hoặc ba)", "C. Có chu trình vòng no", "D. Tan tốt trong nước"], answer: 1, explanation: "Hydrocarbon không no chứa ít nhất một liên kết pi (π) trong phân tử." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức chung của alkyne là:", options: ["A. C<sub>n</sub>H<sub>2n+2</sub>", "B. C<sub>n</sub>H<sub>2n</sub>", "C. C<sub>n</sub>H<sub>2n−2</sub>", "D. C<sub>n</sub>H<sub>2n−6</sub>"], answer: 2, explanation: "Alkyne có công thức chung là C<sub>n</sub>H<sub>2n−2</sub> (n ≥ 2)." },
  { topic: "hydrocarbon", level: "easy", question: "Trong phân tử toluene (C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>), nhóm methyl (−CH<sub>3</sub>) được gắn vào:", options: ["A. Mạch thẳng", "B. Vòng benzene", "C. Nhóm chức khác", "D. Không gắn vào đâu"], answer: 1, explanation: "Toluene là dẫn xuất methyl của benzene." },
  { topic: "hydrocarbon", level: "easy", question: "Để phân biệt benzene và toluene, có thể dùng thuốc thử:", options: ["A. Dung dịch brom", "B. Dung dịch KMnO<sub>4</sub> (đun nóng)", "C. Quỳ tím", "D. AgNO<sub>3</sub>"], answer: 1, explanation: "Toluene làm mất màu dung dịch KMnO<sub>4</sub> khi đun nóng, benzene thì không." },
  { topic: "hydrocarbon", level: "easy", question: "Bậc của nguyên tử carbon là:", options: ["A. Số nguyên tử H gắn trực tiếp vào C", "B. Số nguyên tử C gắn trực tiếp vào C đó", "C. Số liên kết pi của C", "D. Khối lượng của C"], answer: 1, explanation: "Bậc của một nguyên tử carbon được xác định bằng số nguyên tử carbon khác liên kết trực tiếp với nó." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng của arene với acid nitric (H<sub>2</sub>SO<sub>4</sub> đặc làm xúc tác) gọi là phản ứng:", options: ["A. Halogen hóa", "B. Nitro hóa", "C. Sulfon hóa", "D. Alkyl hóa"], answer: 1, explanation: "Đây là phản ứng thế nhóm nitro (−NO<sub>2</sub>) vào nhân thơm." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây có nhiệt độ sôi cao nhất?", options: ["A. Ethane", "B. Propane", "C. Butane", "D. Pentane"], answer: 3, explanation: "Pentane có phân tử khối lớn nhất trong nhóm này nên nhiệt độ sôi cao nhất." },
  { topic: "hydrocarbon", level: "easy", question: "Nhóm nguyên tử gọi là gốc alkyl có công thức chung là:", options: ["A. C<sub>n</sub>H<sub>2n+1</sub>", "B. C<sub>n</sub>H<sub>2n</sub>", "C. C<sub>n</sub>H<sub>2n−1</sub>", "D. C<sub>n</sub>H<sub>2n+2</sub>"], answer: 0, explanation: "Gốc alkyl được tạo ra khi bớt 1 nguyên tử H từ alkane." },
  { topic: "hydrocarbon", level: "easy", question: "Số liên kết pi trong phân tử benzene là:", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 2, explanation: "Vòng benzene có hệ liên kết pi liên hợp gồm 3 liên kết pi." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng đặc trưng của hydrocarbon no là:", options: ["A. Phản ứng thế", "B. Phản ứng cộng", "C. Phản ứng trùng hợp", "D. Phản ứng oxi hóa"], answer: 0, explanation: "Do chỉ chứa liên kết đơn bền nên hydrocarbon no ưu tiên phản ứng thế." },
  { topic: "hydrocarbon", level: "easy", question: "Đồng phân cấu tạo bao gồm:", options: ["A. Đồng phân mạch carbon", "B. Đồng phân vị trí nhóm chức", "C. Đồng phân nhóm chức", "D. Tất cả các ý trên"], answer: 3, explanation: "Đồng phân cấu tạo bao gồm sự khác nhau về mạch, vị trí và bản chất nhóm chức." },
  { topic: "hydrocarbon", level: "easy", question: "But−1−ene và but−2−ene là đồng phân:", options: ["A. Mạch carbon", "B. Vị trí liên kết đôi", "C. Hình học", "D. Nhóm chức"], answer: 1, explanation: "Chúng khác nhau về vị trí của liên kết đôi trong mạch." },
  { topic: "hydrocarbon", level: "easy", question: "Trong phòng thí nghiệm, methane có thể được điều chế từ:", options: ["A. CH<sub>3</sub>COONa và vôi tôi xút", "B. Đất đèn và nước", "C. Cracking dầu mỏ", "D. Chưng cất nhựa than đá"], answer: 0, explanation: "Đun nóng hỗn hợp natri acetate (CH<sub>3</sub>COONa) và vôi tôi xút (NaOH + CaO) sinh ra methane." },
  { topic: "hydrocarbon", level: "easy", question: "Quy tắc thế vào vòng benzene (với nhóm thế loại I như −CH<sub>3</sub>) ưu tiên thế vào vị trí:", options: ["A. Ortho và Para", "B. Meta", "C. Chỉ vị trí Para", "D. Chỉ vị trí Meta"], answer: 0, explanation: "Các nhóm đẩy electron ưu tiên thế vào vị trí ortho và para." },
  { topic: "hydrocarbon", level: "easy", question: "Để khử mùi xăng dầu bám trên tay, ta nên rửa bằng:", options: ["A. Nước lạnh", "B. Xà phòng", "C. Nước muối", "D. Dung dịch axit"], answer: 1, explanation: "Xà phòng giúp nhũ hóa hydrocarbon không cực để nước có thể rửa trôi." },
  { topic: "hydrocarbon", level: "easy", question: "Nguyên liệu chính của ngành công nghiệp lọc hóa dầu là:", options: ["A. Than đá", "B. Khí thiên nhiên", "C. Dầu mỏ", "D. Gỗ"], answer: 2, explanation: "Dầu mỏ là nguồn nguyên liệu hóa thạch quan trọng nhất cho ngành hóa dầu." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm của phản ứng giữa ethylene và hydrogen (xúc tác Ni, t°) là:", options: ["A. Ethane", "B. Methane", "C. Propane", "D. Acetylene"], answer: 0, explanation: "CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub> → CH<sub>3</sub>−CH<sub>3</sub> (Ethane)." },
  { topic: "hydrocarbon", level: "easy", question: "Danh pháp thay thế của CH<sub>3</sub>−CH(CH<sub>3</sub>)−CH<sub>3</sub> là:", options: ["A. Isobutane", "B. 2−methylpropane", "C. Methylpropane", "D. Propane"], answer: 1, explanation: "Mạch chính 3 C, có nhánh methyl ở carbon số 2." },
  { topic: "hydrocarbon", level: "easy", question: "Dung dịch brom có màu gì?", options: ["A. Xanh lam", "B. Tím", "C. Nâu đỏ", "D. Không màu"], answer: 2, explanation: "Brom lỏng hoặc dung dịch brom có màu nâu đỏ đặc trưng." },
  { topic: "hydrocarbon", level: "easy", question: "Hidrat hóa ethylene thu được chất nào?", options: ["A. Ethanol", "B. Ethanal", "C. Ethyl bromide", "D. Polyethylene"], answer: 0, explanation: "Hidrat hóa là phản ứng cộng nước, tạo ra rượu ethanol." },
  { topic: "hydrocarbon", level: "easy", question: "Alkyne nào sau đây không có đồng phân vị trí liên kết ba?", options: ["A. Butyne", "B. Pentyne", "C. Propyne", "D. Hexyne"], answer: 2, explanation: "Propyne (CH≡C−CH<sub>3</sub>) chỉ có một vị trí duy nhất cho liên kết ba." },
  { topic: "hydrocarbon", level: "easy", question: "Số đồng phân cấu tạo của C<sub>4</sub>H<sub>10</sub> là:", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 1, explanation: "Có 2 đồng phân là n−butane và isobutane." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây là hydrocarbon no mạch vòng?", options: ["A. Benzene", "B. Toluene", "C. Cyclohexane", "D. Hexane"], answer: 2, explanation: "Cyclohexane (C<sub>6</sub>H<sub>12</sub>) là alkane vòng (cycloalkane)." },
  { topic: "hydrocarbon", level: "easy", question: "Trong các arene sau, chất nào có 2 nhân benzene?", options: ["A. Toluene", "B. Xylene", "C. Naphthalene", "D. Styrene"], answer: 2, explanation: "Naphthalene (băng phiến) gồm 2 vòng benzene ngưng tụ." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng cộng Br<sub>2</sub> vào alkyne (tỉ lệ 1:2) tạo ra sản phẩm chứa bao nhiêu nguyên tử Br?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 3, explanation: "1 liên kết ba cộng tối đa 2 phân tử Br<sub>2</sub> tạo dẫn xuất tetrahalogen." },
  { topic: "hydrocarbon", level: "easy", question: "Tên gốc hydrocarbon C<sub>2</sub>H<sub>5</sub>− là:", options: ["A. Methyl", "B. Ethyl", "C. Propyl", "D. Phenyl"], answer: 1, explanation: "C<sub>2</sub>H<sub>5</sub>− là gốc ethyl." },
  { topic: "hydrocarbon", level: "easy", question: "Khi cho benzene tác dụng với chlorine (có chiếu sáng), sản phẩm thu được là thuốc trừ sâu 666. Công thức của nó là:", options: ["A. C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>", "B. C<sub>6</sub>H<sub>5</sub>Cl", "C. C<sub>6</sub>Cl<sub>6</sub>", "D. C<sub>6</sub>H<sub>12</sub>Cl<sub>6</sub>"], answer: 0, explanation: "Thuốc trừ sâu 666 là hexachlorocyclohexane C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây có nhiệt độ sôi cao nhất ở điều kiện thường?", options: ["A. CH<sub>4</sub>", "B. C<sub>2</sub>H<sub>6</sub>", "C. C<sub>3</sub>H<sub>8</sub>", "D. C<sub>6</sub>H<sub>6</sub>"], answer: 3, explanation: "Benzene là chất lỏng, các chất khác là chất khí." },
  { topic: "hydrocarbon", level: "easy", question: "Đồng đẳng là hiện tượng các chất có cấu tạo tương tự nhau nhưng hơn kém nhau một hay nhiều nhóm:", options: ["A. −OH", "B. −CH<sub>2</sub>", "C. −CH<sub>3</sub>", "D. −NH<sub>2</sub>"], answer: 1, explanation: "Dãy đồng đẳng sai khác nhau các nhóm methylene (−CH<sub>2</sub>−)." },
  { topic: "hydrocarbon", level: "easy", question: "Phản ứng nào sau đây chứng minh ethylene có tính không no?", options: ["A. Phản ứng cháy", "B. Phản ứng thế", "C. Phản ứng cộng brom", "D. Phản ứng phân hủy"], answer: 2, explanation: "Phản ứng cộng là minh chứng cho sự hiện diện của liên kết chưa bão hòa." },
  { topic: "hydrocarbon", level: "easy", question: "Trong phân tử benzene, góc liên kết C−C−C là:", options: ["A. 90°", "B. 109,5°", "C. 120°", "D. 180°"], answer: 2, explanation: "Cấu trúc lục giác đều phẳng có góc liên kết 120°." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm của phản ứng clo hóa benzene (bột Fe) là chlorobenzene. Đây là phản ứng:", options: ["A. Cộng", "B. Thế", "C. Tách", "D. Oxi hóa"], answer: 1, explanation: "Nguyên tử Cl thế chỗ nguyên tử H trong vòng thơm." },
  { topic: "hydrocarbon", level: "easy", question: "Khí đất đèn là tên gọi khác của:", options: ["A. Methane", "B. Ethylene", "C. Acetylene", "D. Propane"], answer: 2, explanation: "Acetylene sinh ra khi cho đất đèn (CaC<sub>2</sub>) tác dụng với nước." },
  { topic: "hydrocarbon", level: "easy", question: "Tên thay thế của CH<sub>3</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>3</sub> là:", options: ["A. Butane", "B. Propane", "C. Pentane", "D. Ethane"], answer: 0, explanation: "Mạch thẳng 4 Carbon là Butane." },
  { topic: "hydrocarbon", level: "easy", question: "Sản phẩm chính của phản ứng giữa methane và chlorine (tỉ lệ 1:1, ánh sáng) là:", options: ["A. Methyl chloride", "B. Methylene chloride", "C. Chloroform", "D. Carbon tetrachloride"], answer: 0, explanation: "Phản ứng thế 1 nguyên tử H bằng Cl tạo ra CH<sub>3</sub>Cl (methyl chloride)." },
  { topic: "hydrocarbon", level: "easy", question: "Công thức chung của alkyne có 1 liên kết ba là:", options: ["A. C<sub>n</sub>H<sub>2n+2</sub>", "B. C<sub>n</sub>H<sub>2n</sub>", "C. C<sub>n</sub>H<sub>2n−2</sub>", "D. C<sub>n</sub>H<sub>2n−6</sub>"], answer: 2, explanation: "Alkyne mạch hở có 1 liên kết ba có công thức chung C<sub>n</sub>H<sub>2n−2</sub> (n ≥ 2)." },
  { topic: "hydrocarbon", level: "easy", question: "Chất nào sau đây làm mất màu dung dịch nước brom?", options: ["A. Propane", "B. Cyclobutane", "C. Propene", "D. Methane"], answer: 2, explanation: "Alkene (Propene) có liên kết pi kém bền nên phản ứng cộng làm mất màu nước brom." },
  { topic: "hydrocarbon", level: "easy", question: "Phân tử khối của benzene (C<sub>6</sub>H<sub>6</sub>) là:", options: ["A. 72", "B. 78", "C. 84", "D. 92"], answer: 1, explanation: "M = 12 * 6 + 1 * 6 = 78 g/mol." },

  // MEDIUM (100 câu - Đợt 5.1: 30 câu đầu)
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Cho propene (CH<sub>3</sub>−CH=CH<sub>2</sub>) tác dụng với HBr. Sản phẩm chính của phản ứng là:",
    options: ["A. 1−bromopropane", "B. 2−bromopropane", "C. 1,2−dibromopropane", "D. 1−bromopropene"],
    answer: 1,
    explanation: "Theo quy tắc Markovnikov, Br ưu tiên cộng vào carbon bậc cao hơn (ít H hơn) của liên kết đôi. CH<sub>3</sub>−CH=CH<sub>2</sub> + HBr → CH<sub>3</sub>−CHBr−CH<sub>3</sub> (2−bromopropane)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho toluene (C<sub>6</sub>H<sub>5</sub>−CH<sub>3</sub>) tác dụng với dung dịch KMnO<sub>4</sub>, đun nóng, hiện tượng xảy ra là:",
    options: ["A. Dung dịch thuốc tím bị mất màu ngay ở nhiệt độ thường", "B. Dung dịch thuốc tím bị mất màu và xuất hiện kết tủa đen", "C. Có kết tủa trắng tạo thành", "D. Không có hiện tượng gì"],
    answer: 1,
    explanation: "Toluene không phản ứng với KMnO<sub>4</sub> ở nhiệt độ thường nhưng khi đun nóng, nhóm methyl bị oxi hóa thành nhóm carboxylate (−COOK), làm mất màu dung dịch và tạo kết tủa MnO<sub>2</sub> đen."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm chính thu được khi cho but−1−ene tác dụng với HCl là:",
    options: ["A. 1−chlorobutane", "B. 2−chlorobutane", "C. 1,2−dichlorobutane", "D. 2,2−dichlorobutane"],
    answer: 1,
    explanation: "Áp dụng quy tắc Markovnikov: H cộng vào C<sub>1</sub> (nhiều H hơn), Cl cộng vào C<sub>2</sub> (ít H hơn). Sản phẩm chính là CH<sub>3</sub>−CH<sub>2</sub>−CHCl−CH<sub>3</sub> (2−chlorobutane)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phản ứng thế bromine vào toluene (tỉ lệ 1:1, xúc tác bột Fe, đun nóng), sản phẩm ưu tiên vào các vị trí nào?",
    options: ["A. Chỉ vị trí para", "B. Vị trí ortho và para", "C. Vị trí meta", "D. Vị trí benzylic"],
    answer: 1,
    explanation: "Nhóm −CH<sub>3</sub> là nhóm thế loại I (đẩy electron), định hướng các nhóm thế tiếp theo vào các vị trí ortho và para của vòng thơm."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất nào sau đây phản ứng với dung dịch AgNO<sub>3</sub> trong NH<sub>3</sub> tạo kết tủa vàng nhạt?",
    options: ["A. Ethylene", "B. But−2−yne", "C. Propyne", "D. Propene"],
    answer: 2,
    explanation: "Chỉ các ank−1−in (có liên kết ba ở đầu mạch) mới có hydrogen linh động để thế ion Ag<sup>+</sup>. Propyne (CH≡C−CH<sub>3</sub>) là một ank−1−in."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng cộng H<sub>2</sub>O vào acetylene (xúc tác HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub>, 80°C) tạo ra sản phẩm bền là:",
    options: ["A. Ethanol", "B. Acetaldehyde (Ethanal)", "C. Vinyl alcohol", "D. Ethylene glycol"],
    answer: 1,
    explanation: "Sản phẩm cộng nước vào acetylene là vinyl alcohol CH<sub>2</sub>=CH−OH không bền, lập tức chuyển vị thành acetaldehyde CH<sub>3</sub>CHO."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho 2−methylbutane tác dụng với Cl<sub>2</sub> (tỉ lệ 1:1, ánh sáng), sản phẩm thế monoclo chính là:",
    options: ["A. 1−chloro−2−methylbutane", "B. 2−chloro−2−methylbutane", "C. 2−chloro−3−methylbutane", "D. 1−chloro−3−methylbutane"],
    answer: 1,
    explanation: "Phản ứng thế gốc tự do ưu tiên thế vào nguyên tử H ở carbon bậc cao nhất (carbon bậc 3 trong phân tử này) để tạo gốc tự do trung gian bền nhất."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy gồm các chất đều có khả năng làm mất màu dung dịch nước bromine là:",
    options: ["A. Methane, ethylene, toluene", "B. Ethylene, acetylene, styrene", "C. Benzene, ethylene, cyclopropane", "D. Propane, propene, benzene"],
    answer: 1,
    explanation: "Ethylene, acetylene và styrene đều chứa liên kết pi (π) không bền trong mạch carbon/nhánh, dễ tham gia phản ứng cộng brom."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để phân biệt 3 bình khí mất nhãn: ethane, ethylene và acetylene, ta nên dùng thuốc thử theo thứ tự nào?",
    options: ["A. Dung dịch Br<sub>2</sub>, dung dịch KMnO<sub>4</sub>", "B. Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>, dung dịch Br<sub>2</sub>", "C. Dung dịch NaOH, quỳ tím", "D. Que đốm, nước vôi trong"],
    answer: 1,
    explanation: "Dùng AgNO<sub>3</sub>/NH<sub>3</sub> nhận acetylene (kết tủa vàng). Dùng Br<sub>2</sub> nhận ethylene (mất màu). Còn lại là ethane."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Benzene khó tham gia phản ứng cộng hơn alkene là do:",
    options: ["A. Benzene là hydrocarbon thơm", "B. Benzene có cấu trúc vòng phẳng lục giác đều bão hòa", "C. Hệ electron pi (π) liên hợp trong vòng benzene rất bền vững", "D. Benzene có khối lượng phân tử lớn hơn"],
    answer: 2,
    explanation: "Sự giải tỏa electron pi trên toàn vòng tạo ra năng lượng cộng hưởng lớn, làm vòng benzene cực kỳ bền, khó bị phá vỡ để thực hiện phản ứng cộng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Cho 2−methylbut−2−ene tác dụng với HCl. Theo quy tắc Markovnikov, sản phẩm chính thu được là:",
    options: ["A. 2−chloro−2−methylbutane", "B. 2−chloro−3−methylbutane", "C. 1−chloro−2−methylbutane", "D. 3−chloro−2−methylbutane"],
    answer: 0,
    explanation: "CH<sub>3</sub>−C(CH<sub>3</sub>)=CH−CH<sub>3</sub>. Nguyên tử Cl cộng vào C số 2 (bậc 3), H cộng vào C số 3 (bậc 2). Sản phẩm là 2−chloro−2−methylbutane."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phát biểu nào sau đây về đồng phân hình học của alkene là ĐÚNG?",
    options: ["A. Mọi alkene đều có đồng phân hình học", "B. Chỉ những alkene có liên kết đôi ở đầu mạch mới có đồng phân hình học", "C. Điều kiện cần là mỗi carbon ở liên kết đôi phải liên kết với 2 nhóm nguyên tử khác nhau", "D. Cis và trans luôn có tính chất vật lý giống hệt nhau"],
    answer: 2,
    explanation: " alkene có đồng phân hình học khi thỏa mãn: nguyên tử carbon ở nối đôi liên kết với 2 nguyên tử hoặc nhóm nguyên tử khác nhau (a ≠ b và c ≠ d)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Cơ chế chính của phản ứng giữa alkane và halogen dưới tác dụng của ánh sáng là:",
    options: ["A. Cơ chế thế ái hữu (S<sub>N</sub>)", "B. Cơ chế thế gốc tự do (S<sub>R</sub>)", "C. Cơ chế cộng ái điện tử (A<sub>E</sub>)", "D. Cơ chế tách (E)"],
    answer: 1,
    explanation: "Phản ứng thế halogen của alkane xảy ra theo các giai đoạn: khơi mào (tạo gốc tự do), phát triển mạch và kết thúc mạch."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để điều chế bromobenzene từ benzene, ta cần dùng hóa chất và điều kiện nào?",
    options: ["A. Dung dịch Br<sub>2</sub>, ánh sáng", "B. Br<sub>2</sub> nguyên chất, bột Fe, nhiệt độ", "C. Dung dịch Br<sub>2</sub>, bột Fe", "D. Br<sub>2</sub> hơi, chiếu sáng"],
    answer: 1,
    explanation: "Muốn thế halogen vào nhân thơm benzene cần bromine khan (không phải dung dịch) và xúc tác acid Lewis như Fe/FeBr<sub>3</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy alkane nào sau đây được xếp theo chiều nhiệt độ sôi TĂNG dần?",
    options: ["A. Ethane, propane, butane, isobutane", "B. Pentane, butane, propane, ethane", "C. Ethane, propane, isobutane, butane", "D. Methane, ethane, propane, neopentane"],
    answer: 2,
    explanation: "Nhiệt độ sôi tăng khi phân tử khối tăng. Với các đồng phân (isobutane và butane), đồng phân mạch thẳng có diện tích tiếp xúc lớn hơn nên nhiệt độ sôi cao hơn mạch nhánh."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho toluene tác dụng với bromine (tỉ lệ 1:1) dưới ánh sáng mặt trời, sản phẩm chính là:",
    options: ["A. o−bromotoluene", "B. p−bromotoluene", "C. Benzyl bromide", "D. m−bromotoluene"],
    answer: 2,
    explanation: "Dưới tác dụng của ánh sáng, phản ứng thế xảy ra ở nhóm methyl (nhánh) theo cơ chế gốc tự do tương tự như alkane. C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + Br<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Br + HBr."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để loại bỏ khí ethylene có lẫn trong khí methane, phương pháp thực tế nhất là:",
    options: ["A. Đốt cháy hỗn hợp", "B. Dẫn qua dung dịch nước bromine dư", "C. Cho tác dụng với Hydrogen (Ni, t°)", "D. Dẫn qua bình đựng dung dịch NaOH"],
    answer: 1,
    explanation: "Ethylene phản ứng cộng với Br<sub>2</sub> và bị giữ lại trong dung dịch, methane không phản ứng sẽ đi ra ngoài tinh khiết."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phân tử acetylene (C<sub>2</sub>H<sub>2</sub>), tổng số liên kết sigma (σ) và pi (π) tương ứng là:",
    options: ["A. 2σ và 3π", "B. 3σ và 2π", "C. 5σ và 0π", "D. 3σ và 3π"],
    answer: 1,
    explanation: "Phân tử H−C≡C−H có: 2 liên kết đơn C−H (2σ) và 1 liên kết ba C≡C (1σ + 2π). Tổng cộng 3 liên kết sigma và 2 liên kết pi."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm thu được khi cho propyne phản ứng với H<sub>2</sub> dưới xúc tác Pd/PbCO<sub>3</sub> (t°) là:",
    options: ["A. Propane", "B. Propene", "C. Cyclopropane", "D. Allene"],
    answer: 1,
    explanation: "Sử dụng xúc tác Pd/PbCO<sub>3</sub> (xúc tác Lindlar) giúp khống chế phản ứng cộng H<sub>2</sub> vào alkyne dừng lại ở giai đoạn tạo alkene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Alkene dễ tham gia phản ứng cộng hơn alkane vì:",
    options: ["A. Alkene có khối lượng phân tử thấp hơn", "B. Trong liên kết đôi có 1 liên kết pi (π) kém bền, dễ bị đứt ra", "C. Alkene có nhiều hydrogen hơn", "D. Alkene có cấu trúc mạch vòng"],
    answer: 1,
    explanation: "Liên kết đôi gồm 1 liên kết σ bền và 1 liên kết π kém bền. Liên kết π dễ bị tấn công bởi các tác nhân ái điện tử để tạo liên kết mới."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phản ứng nitro hóa benzene bằng hỗn hợp HNO<sub>3</sub> và H<sub>2</sub>SO<sub>4</sub> đặc, vai trò của H<sub>2</sub>SO<sub>4</sub> là:",
    options: ["A. Chất oxi hóa", "B. Chất khử", "C. Xúc tác và hút nước để cân bằng chuyển dịch theo chiều thuận", "D. Base để nhận proton"],
    answer: 2,
    explanation: "H<sub>2</sub>SO<sub>4</sub> đặc đóng vai trò xúc tác tạo ion nitronium (NO<sub>2</sub><sup>+</sup>) và hút nước để thúc đẩy phản ứng tạo nitrobenzene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm của phản ứng trùng hợp butadiene (polybutadiene) được dùng để làm:",
    options: ["A. Chất dẻo (nhựa)", "B. Cao su tổng hợp", "C. Sợi dệt textile", "D. Thuốc nổ"],
    answer: 1,
    explanation: "Buta−1,3−diene trùng hợp tạo ra cao su buna, một loại cao su tổng hợp phổ biến nhất hiện nay."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy chất nào sau đây gồm các hydrocarbon là đồng đẳng của nhau?",
    options: ["A. CH<sub>4</sub>, C<sub>2</sub>H<sub>6</sub>, C<sub>4</sub>H<sub>10</sub>", "B. C<sub>2</sub>H<sub>4</sub>, C<sub>3</sub>H<sub>4</sub>, C<sub>4</sub>H<sub>4</sub>", "C. C<sub>2</sub>H<sub>2</sub>, C<sub>3</sub>H<sub>6</sub>, C<sub>4</sub>H<sub>8</sub>", "D. C<sub>6</sub>H<sub>6</sub>, C<sub>7</sub>H<sub>8</sub>, C<sub>8</sub>H<sub>8</sub>"],
    answer: 0,
    explanation: "Dãy alkane (paraffin) có công thức chung C<sub>n</sub>H<sub>2n+2</sub>. CH<sub>4</sub>, C<sub>2</sub>H<sub>6</sub>, C<sub>4</sub>H<sub>10</sub> đều thuộc dãy này."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Số đồng phân alkyne có công thức phân tử C<sub>4</sub>H<sub>6</sub> là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 1,
    explanation: "Có 2 đồng phân là but−1−yne (CH≡C−CH<sub>2</sub>−CH<sub>3</sub>) và but−2−yne (CH<sub>3</sub>−C≡C−CH<sub>3</sub>)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cộng H<sub>2</sub>O vào propyne (xúc tác Hg<sup>2+</sup>, t°), sản phẩm chính là:",
    options: ["A. Propanal", "B. Propan−2−one (Acetone)", "C. Propan−1−ol", "D. Propan−2−ol"],
    answer: 1,
    explanation: "Theo quy tắc cộng ái điện tử, OH cộng vào carbon bậc cao của liên kết ba. Enol tạo thành chuyển vị sang ketone (acetone)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi sục khí ethylene vào dung dịch thuốc tím (KMnO<sub>4</sub>), hiện tượng quan sát được là:",
    options: ["A. Dung dịch mất màu và có kết tủa màu nâu đen", "B. Dung dịch chuyển sang màu hồng", "C. Có khí CO<sub>2</sub> thoát ra", "D. Không có hiện tượng gì"],
    answer: 1,
    explanation: "Ethylene bị oxi hóa thành ethylene glycol, KMnO<sub>4</sub> bị khử thành MnO<sub>2</sub> (kết tủa đen)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để sản xuất acetylene trong công nghiệp hiện nay từ methane, người ta dùng phương pháp:",
    options: ["A. Đốt cháy methane", "B. Nhiệt phân methane ở 1500°C và làm lạnh nhanh", "C. Phản ứng với carbon", "D. Thủy phân đất đèn"],
    answer: 1,
    explanation: "Phản ứng nhiệt phân: 2CH<sub>4</sub> → C<sub>2</sub>H<sub>2</sub> + 3H<sub>2</sub> (1500°C, làm lạnh nhanh để tránh acetylene bị phân hủy tiếp)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Đốt cháy hoàn toàn một alkene mạch hở thu được CO<sub>2</sub> và H<sub>2</sub>O theo tỉ lệ mol là:",
    options: ["A. n<sub>CO<sub>2</sub></sub> > n<sub>H<sub>2</sub>O</sub>", "B. n<sub>CO<sub>2</sub></sub> < n<sub>H<sub>2</sub>O</sub>", "C. n<sub>CO<sub>2</sub></sub> = n<sub>H<sub>2</sub>O</sub>", "D. 2 : 1"],
    answer: 2,
    explanation: "Alkene có công thức C<sub>n</sub>H<sub>2n</sub>. Khi cháy luôn cho số mol CO<sub>2</sub> bằng số mol H<sub>2</sub>O."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tỉ lệ thể tích gas C<sub>2</sub>H<sub>2</sub> và khí O<sub>2</sub> trong đèn xì acetylene−oxygen để tạo nhiệt độ cao nhất (phản ứng cháy hoàn toàn) là:",
    options: ["A. 1 : 1", "B. 2 : 5", "C. 1 : 2", "D. 2 : 3"],
    answer: 1,
    explanation: "Phương trình: C<sub>2</sub>H<sub>2</sub> + 2,5O<sub>2</sub> → 2CO<sub>2</sub> + H<sub>2</sub>O. Tỉ lệ V là 1 : 2,5 tương ứng 2 : 5."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Styrene (C<sub>6</sub>H<sub>5</sub>−CH=CH<sub>2</sub>) có khả năng tham gia phản ứng nào sau đây?",
    options: ["A. Cộng brom vào nhánh", "B. Thế nguyên tử hydrogen trên vòng thơm", "C. Trùng hợp tạo polymer", "D. Cả A, B, C đều đúng"],
    answer: 3,
    explanation: "Styrene vừa có vòng thơm (arene), vừa có liên kết đôi ở nhánh (alkene) nên mang đầy đủ tính chất của cả hai loại này."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào dưới đây không làm mất màu dung dịch Br<sub>2</sub> nhưng lại làm mất màu dung dịch KMnO<sub>4</sub> khi đun nóng?",
    options: ["A. Benzene", "B. Toluene", "C. Styrene", "D. Ethylene"],
    answer: 1,
    explanation: "Benzene không làm mất màu cả hai. Styrene và ethylene làm mất màu cả hai ở nhiệt độ thường. Toluene chỉ làm mất màu KMnO<sub>4</sub> khi đun nóng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho isopropylbenzene (cumene) tác dụng với bromine (xúc tác bột Fe, t°), sản phẩm chính là:",
    options: ["A. o−bromocumene và p−bromocumene", "B. m−bromocumene", "C. Benzyl bromide", "D. 1,2,3−tribromobenzene"],
    answer: 0,
    explanation: "Gốc isopropyl −CH(CH<sub>3</sub>)<sub>2</sub> là nhóm đẩy electron mạnh, định hướng vào vị trí ortho và para của vòng thơm."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm chính của phản ứng giữa propylene và dung dịch KMnO<sub>4</sub> ở nhiệt độ thường là:",
    options: ["A. CH<sub>3</sub>CH(OH)CH<sub>2</sub>OH", "B. CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH", "C. CH<sub>3</sub>COCH<sub>3</sub>", "D. CH<sub>2</sub>=CH−COOH"],
    answer: 0,
    explanation: "Phản ứng oxi hóa nhẹ alkene bằng KMnO<sub>4</sub> tạo ra diol (glycol). Propylene tạo thành propan−1,2−diol."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Bậc của nguyên tử carbon trung tâm trong phân tử neopentane (2,2−dimethylpropane) là:",
    options: ["A. Bậc 1", "B. Bậc 2", "C. Bậc 3", "D. Bậc 4"],
    answer: 3,
    explanation: "Nguyên tử C trung tâm liên kết với 4 nguyên tử carbon xung quanh, do đó nó là carbon bậc 4."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng của alkyne với dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> thuộc loại phản ứng:",
    options: ["A. Phản ứng thế", "B. Phản ứng cộng", "C. Phản ứng oxi hóa", "D. Phản ứng tách"],
    answer: 0,
    explanation: "Đây là phản ứng thế nguyên tử hydrogen linh động ở liên kết ba đầu mạch bằng ion bạc Ag<sup>+</sup>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tính chất nào sau đây của benzene là SAI?",
    options: ["A. Là chất lỏng ở nhiệt độ thường, không tan trong nước", "B. Dễ cháy, khi cháy có nhiều khói đen", "C. Làm mất màu nước bromine ở nhiệt độ thường", "D. Có mùi đặc trưng"],
    answer: 2,
    explanation: "Benzene không phản ứng với nước bromine ở điều kiện thường; nó chỉ phản ứng với bromine nguyên chất khi có xúc tác Fe."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cộng H<sub>2</sub> vào vinylacetylene (CH<sub>2</sub>=CH−C≡CH) với xúc tác Pd/PbCO<sub>3</sub> dư, sản phẩm thu được là:",
    options: ["A. Butane", "B. But−1−ene", "C. Buta−1,3−diene", "D. Butyne"],
    answer: 2,
    explanation: "Xúc tác Lindlar chỉ khử liên kết ba thành liên kết đôi, không làm ảnh hưởng đến liên kết đôi có sẵn. Kết quả thu được hệ thống liên hợp butadiene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Alkane nào dưới đây có thể tạo ra tối đa 4 dẫn xuất monoclo khi phản ứng với Cl<sub>2</sub> (as)?",
    options: ["A. Ethane", "B. Propane", "C. Butane", "D. Isopentane"],
    answer: 3,
    explanation: "Isopentane (2−methylbutane) có 4 loại carbon khác nhau về vị trí, dẫn đến 4 sản phẩm thế monoclo khác nhau."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Ứng dụng nào sau đây KHÔNG phải của ethylene?",
    options: ["A. Nguyên liệu sản xuất polyethylene (PE)", "B. Sản xuất ethanol, ethylene glycol", "C. Kích thích quả chín nhanh", "D. Làm nhiên liệu chính cho bếp gas gia đình"],
    answer: 3,
    explanation: "Nhiên liệu bếp gas thường là hỗn hợp propane và butane (LPG), không phải ethylene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi sục khí propyne dư vào dung dịch bromine, sản phẩm cuối cùng thu được là:",
    options: ["A. 1,2−dibromopropene", "B. 1,1,2,2−tetrabromopropane", "C. 1,2,3−tribromopropane", "D. 2,2−dibromopropane"],
    answer: 1,
    explanation: "Alkyne cộng tối đa 2 phân tử Br<sub>2</sub> vào liên kết ba để tạo thành dẫn xuất no tetrabromo."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phương pháp nào dùng để phân biệt ethylbenzene và styrene?",
    options: ["A. Dùng dung dịch KMnO<sub>4</sub> ở nhiệt độ thường", "B. Dùng dung dịch NaOH", "C. Dùng quỳ tím", "D. Đốt cháy"],
    answer: 0,
    explanation: "Styrene làm mất màu KMnO<sub>4</sub> ngay ở nhiệt độ thường (do có nối đôi nhánh), ethylbenzene thì không."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Số liên kết pi (π) trong phân tử buta−1,3−diene là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 1,
    explanation: "Buta−1,3−diene (CH<sub>2</sub>=CH−CH=CH<sub>2</sub>) có hai liên kết đôi, mỗi liên kết đôi chứa 1 liên kết pi."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi hóa lỏng hỗn hợp gồm methane và ethane, nhiệt độ cần hạ thấp xuống dưới −161°C. Khí nào sẽ hóa lỏng trước?",
    options: ["A. Methane", "B. Ethane", "C. Cả hai hóa lỏng cùng lúc", "D. Không khí nào hóa lỏng"],
    answer: 1,
    explanation: "Ethane có phân tử khối lớn hơn methane nên có điểm sôi cao hơn (−88°C so với −161°C). Do đó, ethane sẽ hóa lỏng trước khi hạ nhiệt độ."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng cộng HCl vào methylacetylene tạo ra sản phẩm chính là:",
    options: ["A. 1−chloropropene", "B. 2−chloropropene", "C. 1,2−dichloropropane", "D. 3−chloropropene"],
    answer: 1,
    explanation: "Tương tự alkene, alkyne tuân theo quy tắc Markovnikov: Cl ưu tiên cộng vào carbon ở liên kết ba có ít hydrogen hơn (carbon bậc cao)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất nào sau đây được dùng làm nguyên liệu để điều chế cao su chloroprene?",
    options: ["A. Vinyl chloride", "B. Vinylacetylene", "C. Butadiene", "D. Isoprene"],
    answer: 1,
    explanation: "Vinylacetylene cộng HCl tạo chloroprene, sau đó trùng hợp tạo cao su chloroprene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phản ứng thế clo của methane, ánh sáng có vai trò:",
    options: ["A. Chất xúc tác", "B. Kích thích phân tử Cl<sub>2</sub> phân cắt thành các gốc tự do Cl•", "C. Làm tăng nhiệt độ phản ứng", "D. Chất oxi hóa"],
    answer: 1,
    explanation: "Ánh sáng cung cấp năng lượng để bẻ gãy liên kết Cl−Cl, khởi đầu cho cơ chế chuỗi gốc tự do."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tên thông thường của hydrocarbon C<sub>6</sub>H<sub>5</sub>−CH=CH<sub>2</sub> là:",
    options: ["A. Vinylbenzene", "B. Styrene", "C. Phenylethylene", "D. Cả A và B đều đúng"],
    answer: 1,
    explanation: "C<sub>6</sub>H<sub>5</sub>−CH=CH<sub>2</sub> thường được gọi là styrene (tên thông dụng nhất) hoặc vinylbenzene (tên hệ thống)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khả năng phản ứng hóa học của alkane kém hơn các hydrocarbon khác là do:",
    options: ["A. Alkane là chất khí", "B. Alkane chỉ chứa các liên kết sigma (σ) bền vững", "C. Alkane không chứa liên kết pi (π)", "D. Cả B và C đều đúng"],
    answer: 3,
    explanation: "Chỉ chứa liên kết đơn (sigma) bền vững khiến alkane khá trơ, chỉ tham gia phản ứng trong điều kiện nhiệt độ cao hoặc có ánh sáng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy hydrocarbon nào sau đây là thành phần chủ yếu của xăng xe máy?",
    options: ["A. Methane và ethane", "B. Các alkane có từ 7 đến 11 nguyên tử carbon", "C. Ethylene và propylene", "D. Acetylene và benzene"],
    answer: 1,
    explanation: "Xăng là hỗn hợp các hydrocarbon lỏng (chủ yếu là alkane, arene) có nhiệt độ sôi thấp, chứa từ 7-11 nguyên tử C."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho but−2−ene phản ứng với H<sub>2</sub>O (xúc tác H<sup>+</sup>), số sản phẩm hữu cơ thu được là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 0,
    explanation: "But−2−ene là alkene đối xứng, nên khi cộng nước chỉ tạo ra duy nhất một sản phẩm là butan−2−ol."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất nào sau đây không tham gia phản ứng trùng hợp?",
    options: ["A. Ethylene", "B. Propylene", "C. Butane", "D. Styrene"],
    answer: 2,
    explanation: "Saturate hydrocarbons (alkanes) không có liên kết pi tự do, do đó không có khả năng tham gia phản ứng trùng hợp."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm của phản ứng giữa xylene (C<sub>6</sub>H<sub>4</sub>(CH<sub>3</sub>)<sub>2</sub>) và dung dịch KMnO<sub>4</sub>/t° là:",
    options: ["A. Benzene", "B. Kali phthalate", "C. Toluene", "D. Phenol"],
    answer: 1,
    explanation: "Các nhóm alkyl trên vòng benzene đều bị oxi hóa thành muối carboxylate khi đun nóng với thuốc tím."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Benzene được dùng làm dung môi rộng rãi trong công nghiệp vì:",
    options: ["A. Nó rất rẻ", "B. Nó có khả năng hòa tan tốt nhiều chất hữu cơ không phân cực", "C. Nó không độc hại", "D. Nó dễ bay hơi"],
    answer: 1,
    explanation: "Do tính phi kim và cấu trúc đối xứng, benzene là môi trường hòa tan lý tưởng cho dầu mỡ, cao su và nhiều hợp chất hữu cơ khác."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho calcium carbide (đất đèn) vào nước, sản phẩm khí thu được có thể dùng để:",
    options: ["A. Hàn cắt kim loại", "B. Sản xuất nhựa PVC", "C. Kích thích quả chín", "D. Cả A, B, C đều đúng"],
    answer: 3,
    explanation: "Sản phẩm là acetylene (C<sub>2</sub>H<sub>2</sub>), có ứng dụng rộng rãi trong hàn cắt (đèn xì), tổng hợp hóa chất và nông nghiệp."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để tinh chế benzene có lẫn một ít thiophene (một tạp chất có lưu huỳnh), người ta thường dùng phương pháp:",
    options: ["A. Chưng cất phân đoạn", "B. Lắc với H<sub>2</sub>SO<sub>4</sub> đặc", "C. Lọc", "D. Chiết bằng nước"],
    answer: 1,
    explanation: "Thiophene dễ bị sulfon hóa bởi H<sub>2</sub>SO<sub>4</sub> đặc hơn benzene, tạo thành sản phẩm tan trong axit và bị tách ra."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Số đồng phân arene ứng với công thức phân tử C<sub>8</sub>H<sub>10</sub> là:",
    options: ["A. 2", "B. 3", "C. 4", "D. 5"],
    answer: 2,
    explanation: "Gồm: ethylbenzene, o−xylene, m−xylene và p−xylene. Tổng cộng 4 đồng phân."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong dãy đồng đẳng của arene (ngũ vòng benzene), m-xylene và p-xylene khác nhau về:",
    options: ["A. Công thức phân tử", "B. Công thức cấu tạo", "C. Tính chất vật lý", "D. Cả B và C đều đúng"],
    answer: 3,
    explanation: "Chúng là đồng phân vị trí nhóm thế, có cấu tạo khác nhau dẫn đến các hằng số vật lý (điểm sôi, điểm nóng chảy) khác nhau."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi đun nóng butadiene với bột sắt ở nhiệt độ cao, sản phẩm chủ yếu là:",
    options: ["A. Butane", "B. Benzene", "C. Cyclobutane", "D. Phản ứng không xảy ra"],
    answer: 3,
    explanation: "Butadiene không tạo được benzene trực tiếp theo cách này. Benzene thường được điều chế từ phản ứng tam hợp acetylene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm chính của phản ứng thế bromine vào naphthalene là:",
    options: ["A. 1−bromonaphthalene", "B. 2−bromonaphthalene", "C. 1,4−dibromonaphthalene", "D. 1,8−dibromonaphthalene"],
    answer: 0,
    explanation: "Vị trí α (vị trí 1) trong naphthalene có mật độ electron cao hơn và khả năng thế ưu tiên hơn vị trí β."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hiện tượng 'khuếch tán nồng độ' trong phản ứng thế Clo vào alkane giúp:",
    options: ["A. Tăng tốc độ phản ứng", "B. Tạo ra đa dẫn xuất clo", "C. Giảm giá thành sản xuất", "D. Ức chế phản ứng phụ"],
    answer: 1,
    explanation: "Trong điều kiện thực tế, rất khó dừng lại ở dẫn xuất thế 1 lần, clo thường tiếp tục thế các nguyên tử H còn lại tạo hỗn hợp sản phẩm."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào sau đây có nhiệt độ nóng chảy thấp nhất?",
    options: ["A. Benzene", "B. Toluene", "C. Naphthalene", "D. Methane"],
    answer: 3,
    explanation: "Methane là khí ở nhiệt độ thường, có cấu trúc đơn giản nhất và lực Van der Waals rất yếu, do đó có nhiệt độ nóng chảy thấp nhất dãy."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Số nguyên tử hydrogen trong phân tử naphthalene là:",
    options: ["A. 6", "B. 8", "C. 10", "D. 12"],
    answer: 1,
    explanation: "Naphthalene có công thức phân tử C<sub>10</sub>H<sub>8</sub>, gồm hai vòng benzene ngưng tụ."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Nhựa PE (polyethylene) được sản xuất từ monomer nào?",
    options: ["A. CH<sub>4</sub>", "B. CH<sub>2</sub>=CH<sub>2</sub>", "C. CH≡CH", "D. CH<sub>2</sub>=CH−Cl"],
    answer: 1,
    explanation: "Polyethylene là polymer của ethylene (ethene)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho acetylene vào dung dịch KMnO<sub>4</sub>, thuốc tím bị mất màu, sau đó xuất hiện kết tủa màu nâu đen và:",
    options: ["A. Có khí CO<sub>2</sub> thoát ra", "B. Dung dịch kiềm hóa", "C. Chuyển thành ethylene", "D. Không có hiện tượng khác"],
    answer: 1,
    explanation: "Phản ứng oxi hóa acetylene tạo ra axit hữu cơ oxalyc/muối oxalate và MnO<sub>2</sub>, kèm theo sự thay đổi pH của môi trường."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng đặc trưng của ankan là phản ứng thế, còn của anken là phản ứng cộng. Điều này được giải thích bởi:",
    options: ["A. Ankan no, anken không no", "B. Sự có mặt của liên kết pi kém bền trong anken", "C. Ankan có nhiều H hơn", "D. Cả A và B đúng"],
    answer: 3,
    explanation: "Liên kết đôi trong alkene chứa liên kết pi dễ bị bẻ gãy, trong khi alkane chỉ có liên kết đơn bền vững nên chỉ ưu tiên phản ứng thế."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm của phản ứng tách hydrogen từ propane (xúc tác, t°) là:",
    options: ["A. Methane và ethane", "B. Propene và hydrogen", "C. Cyclopropane", "D. Acetylene"],
    answer: 1,
    explanation: "Phản ứng tách (dehydrogenation) alkane tạo ra alkene tương ứng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất hữu cơ nào sau đây có thể dùng làm nguyên liệu để sản xuất tơ nitron (tơ olon)?",
    options: ["A. Ethylene", "B. Vinyl cyanide (Acrylonitrile)", "C. Butadiene", "D. Styrene"],
    answer: 1,
    explanation: "Tơ nitron là sản phẩm trùng hợp của acrylonitrile (CH<sub>2</sub>=CH−CN)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phương pháp cracking dầu mỏ, mục đích chính là để:",
    options: ["A. Làm sạch dầu", "B. Tăng hiệu suất thu hồi xăng và tạo ra các alkene thấp", "C. Loại bỏ lưu huỳnh", "D. Sản xuất nhựa đường"],
    answer: 1,
    explanation: "Cracking bẻ gãy các phân tử hydrocarbon dài thành các phân tử ngắn hơn có giá trị sử dụng cao hơn như xăng, gas."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm chính của phản ứng giữa 1−methylcyclohexene với HBr (quy tắc Markovnikov) là:",
    options: ["A. 1−bromo−1−methylcyclohexane", "B. 1−bromo−2−methylcyclohexane", "C. 2−bromo−1−methylcyclohexane", "D. Cyclohexylmethane"],
    answer: 0,
    explanation: "Br ưu tiên cộng vào carbon bậc 3 (vị trí có nhóm methyl) của liên kết đôi."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sự có mặt của nhóm nitro (−NO<sub>2</sub>) trên vòng benzene làm cho phản ứng thế tiếp theo:",
    options: ["A. Dễ dàng hơn và định hướng vào vị trí ortho", "B. Khó khăn hơn và định hướng vào vị trí meta", "C. Dễ dàng hơn và định hướng vào vị trí para", "D. Không ảnh hưởng"],
    answer: 1,
    explanation: "Nhóm nitro là nhóm rút electron mạnh, làm giảm mật độ electron trong vòng (phản hoạt hóa) và định hướng vào vị trí meta."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tên hệ thống (IUPAC) của iso−octane (thành phần đánh giá chỉ số octane của xăng) là:",
    options: ["A. 2,2,4−trimethylpentane", "B. Octane", "C. 2,3,3−trimethylpentane", "D. 2−methylheptane"],
    answer: 0,
    explanation: "Iso−octane là tên thông thường của 2,2,4−trimethylpentane, một alkane có khả năng chống kích nổ cực tốt."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng cộng Cl<sub>2</sub> vào benzene dưới ánh sáng mặt trời tạo ra sản phẩm là:",
    options: ["A. Chlorobenzene", "B. Benzyl chloride", "C. Hexachlorocyclohexane (666)", "D. 1,2−dichlorobenzene"],
    answer: 2,
    explanation: "Dưới ánh sáng gay gắt, benzene phá vỡ hệ thống thơm để cộng đồng loạt 3 phân tử Cl<sub>2</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào dưới đây có thể tham gia phản ứng thế với dung dịch Br<sub>2</sub> ở nhiệt độ thường?",
    options: ["A. Alkane", "B. Alkene", "C. Alkyne", "D. Không có chất nào"],
    answer: 3,
    explanation: "Các hydrocarbon ưu tiên phản ứng cộng với dung dịch Br<sub>2</sub>, không phải phản ứng thế ở nhiệt độ thường."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Ứng dụng quan trọng nhất của naphthalene trong đời sống hàng ngày là:",
    options: ["A. Làm phân bón", "B. Làm thuốc sát trùng", "C. Chất chống gián (băng phiến)", "D. Làm thức ăn gia súc"],
    answer: 2,
    explanation: "Băng phiến (naphthalene viên) có khả năng thăng hoa tạo mùi đuổi côn trùng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phản ứng: C<sub>6</sub>H<sub>6</sub> + Cl<sub>2</sub> (Fe, t°), sản phẩm hữu cơ chính thoát ra là:",
    options: ["A. 1,2,3,4,5,6−hexachlorocyclohexane", "B. Chlorobenzene", "C. Dichlorobenzene", "D. Toluene"],
    answer: 1,
    explanation: "Phản ứng thế ái điện tử vào vòng thơm chỉ dừng lại ở nấc thứ nhất nếu khống chế tỉ lệ mol 1:1."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tại sao cyclohexane lại bền hơn cyclopropane?",
    options: ["A. Do cyclohexane là chất lỏng", "B. Do góc liên kết trong cyclopropane (60°) bị căng mạnh so với góc chuẩn 109,5°", "C. Do cyclohexane có nhiều carbon hơn", "D. Do cyclopropane là khí"],
    answer: 1,
    explanation: "Sự lệch góc liên kết lớn trong các vòng nhỏ (3, 4 cạnh) gây ra sức căng vòng lớn, làm chúng dễ bị phá vỡ mạch (phản ứng cộng mở vòng)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Xác định sản phẩm chính của phản ứng cộng nước vào 3−methylbut−1−yne (H<sup>+</sup>, Hg<sup>2+</sup>):",
    options: ["A. 3−methylbutan−2−one", "B. 3−methylbutanal", "C. 2−methylbutan−1−ol", "D. Isopropyl methyl ketone"],
    answer: 0,
    explanation: "Cũng tuân theo Markovnikov, OH cộng vào C bậc 2 của nối ba, sau đó chuyển thành ketone."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất nào dưới đây được sử dụng để điều chế m−nitrotoluene từ toluene?",
    options: ["A. Phản ứng trực tiếp toluene với HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>", "B. Không thể điều chế trực tiếp vì nhóm methyl định hướng ortho/para", "C. Cho benzene phản ứng với CH<sub>3</sub>Cl trước", "D. Oxi hóa toluene trước"],
    answer: 1,
    explanation: "Nhóm −CH<sub>3</sub> định hướng o, p. Để có m-nitro, cần dẫn xuất định hướng meta (như −COOH) rồi sau đó mới thực hiện các bước chuyển hóa khác."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy hydrocarbon không no nào dưới đây đều là mạch hở?",
    options: ["A. Alkene, Alkyne, Alkadiene", "B. Alkene, Cycloalkene, Alkyne", "C. Alkyne, Arene, Cycloalkane", "D. Alkadiene, Cycloalkene, Arene"],
    answer: 0,
    explanation: "Alkene, Alkyne và Alkadiene là các hydrocarbon không no mạch hở điển hình."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cho isoprene (2−methylbuta−1,3−diene) tác dụng với Br<sub>2</sub> theo tỉ lệ mol 1:1 ở 40°C, sản phẩm chính thu được là:",
    options: ["A. 1,2−dibromo−2−methylbut−3−ene", "B. 1,4−dibromo−2−methylbut−2−ene", "C. 3,4−dibromo−2−methylbut−1−ene", "D. 1,2,3,4−tetrabromo−2−methylbutane"],
    answer: 1,
    explanation: "Ở nhiệt độ cao (40°C), phản ứng cộng 1,4 là ưu tiên đối với hệ liên hợp."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phát biểu nào sau đây về benzene là KHÔNG đúng?",
    options: ["A. Benzene không làm mất màu dung dịch nước brom ở điều kiện thường", "B. Benzene làm mất màu dung dịch KMnO<sub>4</sub> khi đun nóng", "C. Benzene tham gia phản ứng thế dễ hơn phản ứng cộng", "D. Benzene có cấu trúc vòng phẳng đối xứng"],
    answer: 1,
    explanation: "Benzene cực kỳ bền với các chất oxi hóa mạnh như KMnO<sub>4</sub> ngay cả khi đun nóng."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để tinh chế khí methane có lẫn tạp chất là ethylene và acetylene, người ta dùng lượng dư dung dịch nào?",
    options: ["A. NaOH", "B. Bromine", "C. AgNO<sub>3</sub>/NH<sub>3</sub>", "D. KMnO<sub>4</sub>"],
    answer: 1,
    explanation: "Dung dịch bromine dư sẽ giữ lại ethylene và acetylene thông qua phản ứng cộng, khí methane không phản ứng thoát ra ngoài."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm chính của phản ứng giữa anthracene và Br<sub>2</sub> (xúc tác Fe, t°) là:",
    options: ["A. 1−bromoanthracene", "B. 2−bromoanthracene", "C. 9−bromoanthracene", "D. 10−bromoanthracene"],
    answer: 2,
    explanation: "Vị trí số 9 và 10 trong anthracene là vị trí có mật độ electron cao nhất và hoạt động nhất."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào sau đây có thể tạo kết tủa với dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>?",
    options: ["A. But−2−yne", "B. Pent−1−yne", "C. Styrene", "D. Propene"],
    answer: 1,
    explanation: "Chỉ các alk−1−yne (có H gắn vào C liên kết ba) mới có phản ứng này."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi cracking thermal một phân tử alkane C<sub>10</sub>H<sub>22</sub>, sản phẩm hữu cơ thu được có thể gồm:",
    options: ["A. C<sub>5</sub>H<sub>12</sub> và C<sub>5</sub>H<sub>10</sub>", "B. C<sub>2</sub>H<sub>6</sub> và C<sub>8</sub>H<sub>16</sub>", "C. CH<sub>4</sub> và C<sub>9</sub>H<sub>18</sub>", "D. Tất cả các phương án trên đều đúng"],
    answer: 3,
    explanation: "Quá trình cracking bẻ gãy mạch carbon tại các vị trí ngẫu nhiên, tạo ra hỗn hợp các alkane và alkene nhỏ hơn."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong arene, toluene làm mất màu dung dịch KMnO<sub>4</sub> khi đun nóng vì:",
    options: ["A. Vòng benzene kém bền", "B. Nhóm methyl có khả năng bị oxi hóa bởi KMnO<sub>4</sub>", "C. Nhóm methyl làm giảm mật độ electron trong vòng", "D. Toluene có liên kết pi ở nhánh"],
    answer: 1,
    explanation: "Nhóm methyl (−CH<sub>3</sub>) gắn vào vòng benzene dễ bị oxi hóa tạo thành nhóm carboxylate (−COOK)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Cho styrene tác dụng với hydrogen dư (xúc tác Ni, t°), sản phẩm thu được là:",
    options: ["A. Ethylbenzene", "B. Ethylcyclohexane", "C. Benzyl methane", "D. Methylcyclohexane"],
    answer: 1,
    explanation: "Hydrogen dư sẽ cộng vào cả nhánh vinyl và vòng benzene để tạo ra hydrocarbon no hoàn toàn là ethylcyclohexane."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Phản ứng nào sau đây được dùng để nhận biết liên kết ba đầu mạch của alkyne?",
    options: ["A. Cộng dung dịch Br<sub>2</sub>", "B. Oxi hóa bằng dung dịch KMnO<sub>4</sub>", "C. Thế bằng dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>", "D. Phản ứng cháy"],
    answer: 2,
    explanation: "Chỉ alk−1−yne mới tạo kết tủa vàng với AgNO<sub>3</sub>/NH<sub>3</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Tính chất nào sau đây KHÔNG phải của alkane?",
    options: ["A. Là hợp chất không cực", "B. Không tan trong nước", "C. Tham gia phản ứng cộng hydrogen", "D. Nhẹ hơn nước"],
    answer: 2,
    explanation: "Alkane là hydrocarbon no, không còn khả năng cộng hydrogen."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Dãy chất nào sau đây đều làm mất màu dung dịch KMnO<sub>4</sub> ở nhiệt độ thường?",
    options: ["A. Ethylene, Acetylene, Styrene", "B. Benzene, Toluene, Styrene", "C. Methane, Ethane, Propane", "D. Acetylene, Benzene, Propene"],
    answer: 0,
    explanation: "Các hydrocarbon có liên kết pi mạch hở hoặc ở nhánh (không thuộc hệ vòng thơm bền) đều dễ bị oxi hóa bởi KMnO<sub>4</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm thu được khi sục khí acetylene vào dung dịch Br<sub>2</sub> dư là:",
    options: ["A. 1,2−dibromoethene", "B. 1,1,2,2−tetrabromoethane", "C. 1,1−dibromoethane", "D. Bromoform"],
    answer: 1,
    explanation: "Acetylene (C<sub>2</sub>H<sub>2</sub>) cộng 2 phân tử Br<sub>2</sub> vào liên kết ba tạo ra dẫn xuất tetrahalogen no."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong phản ứng: C<sub>6</sub>H<sub>6</sub> + HNO<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>O (xúc tác H<sub>2</sub>SO<sub>4</sub> đặc), tác nhân tấn công vòng benzene là:",
    options: ["A. Ion NO<sub>3</sub><sup>−</sup>", "B. Ion NO<sub>2</sub><sup>+</sup>", "C. Phân tử HNO<sub>3</sub>", "D. Gốc tự do NO<sub>2</sub>•"],
    answer: 1,
    explanation: "Acid sulfuric đặc giúp tạo ra ion nitronium (NO<sub>2</sub><sup>+</sup>) đóng vai trò tác nhân ái điện tử."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Cho butane tác dụng với chlorine (ánh sáng, tỉ lệ 1:1), số sản phẩm monocloro tối đa thu được là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 1,
    explanation: "Butane (CH<sub>3</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>3</sub>) có 2 loại H khác nhau (ở C<sub>1</sub> và C<sub>2</sub>), tạo ra 1−chlorobutane và 2−chlorobutane."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Để sản xuất PVC (Polyvinyl chloride), người ta dùng monomer là:",
    options: ["A. CH<sub>2</sub>=CH<sub>2</sub>", "B. CH<sub>2</sub>=CHCl", "C. CH≡CH", "D. C<sub>6</sub>H<sub>5</sub>−CH=CH<sub>2</sub>"],
    answer: 1,
    explanation: "Trùng hợp vinyl chloride (CH<sub>2</sub>=CHCl) tạo ra nhựa PVC."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Khi đun nóng hỗn hợp toluene và thuốc tím, hiện tượng xảy ra là dung dịch KMnO<sub>4</sub> mất màu và xuất hiện kết tủa màu:",
    options: ["A. Đen", "B. Trắng", "C. Xanh", "D. Vàng"],
    answer: 0,
    explanation: "Toluene khử Mn<sup>+7</sup> (tím) xuống Mn<sup>+4</sup>O<sub>2</sub> (kết tủa đen)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào dưới đây có thể tham gia phản ứng cộng với H<sub>2</sub> (xúc tác Pd/PbCO<sub>3</sub>, t°) để dừng lại ở alkene?",
    options: ["A. Alkane", "B. Alkyne", "C. Alkadiene", "D. Arene"],
    answer: 1,
    explanation: "Xúc tác Lindlar (Pd/PbCO<sub>3</sub>) được dùng để khử alkyne chọn lọc thành alkene."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Chất khí nào thoát ra khi cho đất đèn tác dụng với nước?",
    options: ["A. Ethylene", "B. Methane", "C. Acetylene", "D. Hydrogen"],
    answer: 2,
    explanation: "CaC<sub>2</sub> + 2H<sub>2</sub>O → C<sub>2</sub>H<sub>2</sub> (acetylene) + Ca(OH)<sub>2</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Trong arene, o−xylene và p−xylene là đồng phân về:",
    options: ["A. Vị trí nhóm thế trên vòng benzene", "B. Mạch carbon", "C. Nhóm chức", "D. Hình học"],
    answer: 0,
    explanation: "Xylene có 2 nhóm methyl, ortho là ở vị trí 1,2; para là ở vị trí 1,4."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Sản phẩm khi trùng hợp butadiene (cao su buna) có chứa các liên kết pi:",
    options: ["A. Phân bố đều trong mạch polyme", "B. Chỉ ở hai đầu mạch", "C. Vẫn còn dư trong mỗi mắt xích", "D. Không còn liên kết pi nào"],
    answer: 2,
    explanation: "Khi trùng hợp butadiene theo kiểu 1,4, liên kết đôi được dời vào giữa mắt xích polymer (cao su buna)."
  },
  {
    topic: "hydrocarbon",
    level: "medium",
    question: "Hydrocarbon nào dưới đây thường được dùng làm nhiên liệu cho đèn xì để hàn cắt kim loại?",
    options: ["A. Methane", "B. Ethylene", "C. Acetylene", "D. Propane"],
    answer: 2,
    explanation: "Acetylene khi cháy trong oxygen tạo ngọn lửa có nhiệt độ rất cao (khoảng 3000°C), dùng để hàn cắt kim loại."
  },

  // HARD - ĐỢT 6.1 (100 câu Vận dụng)
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn m gam hỗn hợp X gồm methane, ethylene và acetylene, thu được 11 gam CO<sub>2</sub> và 5,4 gam H<sub>2</sub>O. Giá trị của m là:",
    options: ["A. 3,6", "B. 3,4", "C. 3,8", "D. 4,0"],
    answer: 0,
    explanation: "Áp dụng định luật bảo toàn khối lượng: m<sub>X</sub> = m<sub>C</sub> + m<sub>H</sub>. n<sub>C</sub> = n<sub>CO<sub>2</sub></sub> = 11/44 = 0,25 mol. n<sub>H</sub> = 2 * n<sub>H<sub>2</sub>O</sub> = 2 * (5,4/18) = 0,6 mol. m<sub>X</sub> = 0,25 * 12 + 0,6 * 1 = 3 + 0,6 = 3,6 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 2,8 gam một alkene X tác dụng vừa đủ với dung dịch chứa 8 gam Br<sub>2</sub>. Công thức phân tử của X là:",
    options: ["A. C<sub>2</sub>H<sub>4</sub>", "B. C<sub>3</sub>H<sub>6</sub>", "C. C<sub>4</sub>H<sub>8</sub>", "D. C<sub>5</sub>H<sub>10</sub>"],
    answer: 2,
    explanation: "n<sub>Br<sub>2</sub></sub> = 8/160 = 0,05 mol. Vì alkene phản ứng với Br<sub>2</sub> theo tỉ lệ 1:1 nên n<sub>X</sub> = 0,05 mol. M<sub>X</sub> = 2,8 / 0,05 = 56 (g/mol). Đặt CTPT X là C<sub>n</sub>H<sub>2n</sub> => 14n = 56 => n = 4. Vậy X là C<sub>4</sub>H<sub>8</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dẫn 4,48 lít (đktc) hỗn hợp khí X gồm ethylen và acetylene qua dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> dư, thu được 24 gam kết tủa. Phần trăm thể tích của acetylene trong hỗn hợp X là:",
    options: ["A. 25%", "B. 50%", "C. 75%", "D. 60%"],
    answer: 1,
    explanation: "n<sub>X</sub> = 4,48 / 22,4 = 0,2 mol. Chỉ acetylene phản ứng tạo kết tủa: C<sub>2</sub>H<sub>2</sub> → C<sub>2</sub>Ag<sub>2</sub>↓. n<sub>kết tủa</sub> = 24 / 240 = 0,1 mol. => n<sub>acetylene</sub> = 0,1 mol. %V<sub>acetylene</sub> = (0,1 / 0,2) * 100 = 50%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn một arene X thuộc dãy đồng đẳng của benzene thu được 8,96 lít khí CO<sub>2</sub> (đktc) và 3,6 gam H<sub>2</sub>O. Công thức phân tử của X là:",
    options: ["A. C<sub>6</sub>H<sub>6</sub>", "B. C<sub>7</sub>H<sub>8</sub>", "C. C<sub>8</sub>H<sub>10</sub>", "D. C<sub>9</sub>H<sub>12</sub>"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,4 mol; n<sub>H<sub>2</sub>O</sub> = 0,2 mol. Arene C<sub>n</sub>H<sub>2n−6</sub> có tỉ lệ n<sub>CO<sub>2</sub></sub>/n<sub>H<sub>2</sub>O</sub> = n/(n−3) = 0,4/0,2 = 2 => n = 2n − 6 => n = 6 (Benzene). Vậy là C<sub>6</sub>H<sub>6</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dẫn 6,72 lít (đktc) hỗn hợp khí X gồm propane, ethylene và acetylene qua dung dịch Br<sub>2</sub> dư thấy khối lượng bình bromine tăng thêm 5,5 gam. Nếu dẫn 6,72 lít X qua dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> dư thì thu được 12 gam kết tủa. Thể tích khí propane trong X là:",
    options: ["A. 1,12 lít", "B. 2,24 lít", "C. 3,36 lít", "D. 4,48 lít"],
    answer: 1,
    explanation: "n<sub>X</sub> = 0,3 mol. n<sub>acetylene</sub> = n<sub>kết tủa</sub> = 12/240 = 0,05 mol. m<sub>bình Br<sub>2</sub> tăng</sub> = m<sub>ethylene</sub> + m<sub>acetylene</sub> = 5,5 g. => m<sub>ethylene</sub> = 5,5 − 0,05 * 26 = 4,2 g. n<sub>ethylene</sub> = 4,2 / 28 = 0,15 mol. n<sub>propane</sub> = 0,3 − 0,05 − 0,15 = 0,1 mol. V<sub>propane</sub> = 0,1 * 22,4 = 2,24 lít."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn 0,1 mol hỗn hợp X gồm hai alkene kế tiếp nhau trong dãy đồng đẳng, thu được 15,4 gam CO<sub>2</sub>. Hai alkene đó là:",
    options: ["A. C<sub>2</sub>H<sub>4</sub> và C<sub>3</sub>H<sub>6</sub>", "B. C<sub>3</sub>H<sub>6</sub> và C<sub>4</sub>H<sub>8</sub>", "C. C<sub>4</sub>H<sub>8</sub> và C<sub>5</sub>H<sub>10</sub>", "D. C<sub>5</sub>H<sub>10</sub> và C<sub>6</sub>H<sub>12</sub>"],
    answer: 1,
    explanation: "n<sub>CO<sub>2</sub></sub> = 15,4 / 44 = 0,35 mol. Số nguyên tử Carbon trung bình = n<sub>CO<sub>2</sub></sub> / n<sub>X</sub> = 0,35 / 0,1 = 3,5. Vì hai alkene kế tiếp nên đó là C<sub>3</sub>H<sub>6</sub> và C<sub>4</sub>H<sub>8</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 3,12 gam acetylene phản ứng với dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> dư. Khối lượng kết tủa thu được là:",
    options: ["A. 14,4 gam", "B. 28,8 gam", "C. 12,0 gam", "D. 24,0 gam"],
    answer: 1,
    explanation: "n<sub>acetylene</sub> = 3,12 / 26 = 0,12 mol. Phương trình: C<sub>2</sub>H<sub>2</sub> + 2AgNO<sub>3</sub> + 2NH<sub>3</sub> → C<sub>2</sub>Ag<sub>2</sub>↓ + 2NH<sub>4</sub>NO<sub>3</sub>. n<sub>kết tủa</sub> = 0,12 mol. m<sub>kết tủa</sub> = 0,12 * 240 = 28,8 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp X gồm H<sub>2</sub> và một alkene có tỉ lệ mol 1:1. Tỉ khối của X so với Hydrogen là 14,5. Công thức phân tử của alkene là:",
    options: ["A. C<sub>2</sub>H<sub>4</sub>", "B. C<sub>3</sub>H<sub>6</sub>", "C. C<sub>4</sub>H<sub>8</sub>", "D. C<sub>5</sub>H<sub>10</sub>"],
    answer: 2,
    explanation: "M<sub>X</sub> = 14,5 * 2 = 29. Giả sử n<sub>H<sub>2</sub></sub> = 1 mol, n<sub>alkene</sub> = 1 mol. M<sub>X</sub> = (2 * 1 + M<sub>alkene</sub> * 1) / 2 = 29 => M<sub>alkene</sub> = 56. Alkene C<sub>n</sub>H<sub>2n</sub> => 14n = 56 => n = 4. Vậy X là C<sub>4</sub>H<sub>8</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Để trung hòa hoàn toàn hỗn hợp X gồm CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> cần dùng vừa đủ 100 ml dung dịch Br<sub>2</sub> 1M. Nếu đốt cháy hoàn toàn 0,1 mol X thì thu được 0,16 mol CO<sub>2</sub>. Phần trăm thể tích CH<sub>4</sub> trong X là:",
    options: ["A. 40%", "B. 50%", "C. 30%", "D. 20%"],
    answer: 0,
    explanation: "Gọi x, y, z là số mol CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>, C<sub>2</sub>H<sub>2</sub> trong 0,1 mol X. => x + y + z = 0,1. n<sub>CO<sub>2</sub></sub> = x + 2y + 2z = 0,16. => x + 2(y + z) = 0,16. Thay (y+z) = 0,1 − x => x + 2(0,1 − x) = 0,16 => x = 0,04. %V<sub>CH<sub>4</sub></sub> = (0,04 / 0,1) * 100 = 40%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đề hydro hóa octane (C<sub>8</sub>H<sub>18</sub>) thu được ethylbenzene với hiệu suất 80%. Khối lượng ethylbenzene thu được từ 22,8 gam octane là:",
    options: ["A. 16,96 gam", "B. 21,20 gam", "C. 14,84 gam", "D. 18,56 gam"],
    answer: 0,
    explanation: "n<sub>octane</sub> = 22,8 / 114 = 0,2 mol. n<sub>ethylbenzene lý thuyết</sub> = 0,2 mol. Vì H = 80% nên n<sub>thực tế</sub> = 0,2 * 0,8 = 0,16 mol. m<sub>ethylbenzene</sub> = 0,16 * 106 = 16,96 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Một hỗn hợp X gồm hai hydrocarbon mạch hở là đồng đẳng kế tiếp. Đốt cháy 0,1 mol X thu được 3,584 lít CO<sub>2</sub> (đktc) và 3,96 gam H<sub>2</sub>O. Hai hydrocarbon đó thuộc dãy đồng đẳng nào?",
    options: ["A. Alkane", "B. Alkene", "C. Alkyne", "D. Alkadiene"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,16 mol; n<sub>H<sub>2</sub>O</sub> = 0,22 mol. Vì n<sub>H<sub>2</sub>O</sub> > n<sub>CO<sub>2</sub></sub> nên X là các alkane. Số C trung bình = 0,16 / 0,1 = 1,6. Vậy đó là CH<sub>4</sub> và C<sub>2</sub>H<sub>6</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Trùng hợp 5,6 lít ethylene (đktc) với hiệu suất 90%. Khối lượng polyethylene (PE) thu được là:",
    options: ["A. 6,3 gam", "B. 7,0 gam", "C. 5,6 gam", "D. 3,15 gam"],
    answer: 0,
    explanation: "n<sub>ethylene</sub> = 0,25 mol. m<sub>lý thuyết</sub> = 0,25 * 28 = 7 gam. m<sub>thực tế</sub> = 7 * 0,9 = 6,3 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Xác định công thức phân tử của một arene X biết khi đốt cháy m gam X thu được 13,2 gam CO<sub>2</sub> và 2,7 gam H<sub>2</sub>O.",
    options: ["A. C<sub>6</sub>H<sub>6</sub>", "B. C<sub>7</sub>H<sub>8</sub>", "C. C<sub>8</sub>H<sub>10</sub>", "D. C<sub>9</sub>H<sub>12</sub>"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,3 mol; n<sub>H<sub>2</sub>O</sub> = 0,15 mol. n<sub>C</sub> = 0,3; n<sub>H</sub> = 0,3. Tỉ lệ C:H = 1:1. Arene C<sub>n</sub>H<sub>2n−6</sub> có tỉ lệ n : (2n−6) = 0,3 : 0,3 = 1 : 1 => n = 6. Vậy X là C<sub>6</sub>H<sub>6</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 4,48 lít (đktc) hỗn hợp khí X gồm CH<sub>4</sub> và C<sub>2</sub>H<sub>2</sub> đi qua dung dịch Br<sub>2</sub> dư thấy khối lượng bình tăng 1,3 gam. Phần trăm khối lượng của CH<sub>4</sub> trong X là:",
    options: ["A. 45,12%", "B. 55,17%", "C. 35,48%", "D. 64,86%"],
    answer: 3,
    explanation: "n<sub>X</sub> = 0,2 mol. Bình Br<sub>2</sub> tăng là khối lượng acetylene = 1,3 gam. n<sub>C<sub>2</sub>H<sub>2</sub></sub> = 1,3 / 26 = 0,05 mol. => n<sub>CH<sub>4</sub></sub> = 0,2 − 0,05 = 0,15 mol. m<sub>CH<sub>4</sub></sub> = 0,15 * 16 = 2,4 gam. m<sub>X</sub> = 2,4 + 1,3 = 3,7 gam. %m<sub>CH<sub>4</sub></sub> = (2,4 / 3,7) * 100 = 64,86%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Oxi hóa hoàn toàn 4,6 gam toluene bằng dung dịch KMnO<sub>4</sub> dư, đun nóng. Khối lượng muối potassium benzoate thu được là (giả sử hiệu suất 100%):",
    options: ["A. 8,0 gam", "B. 6,1 gam", "C. 7,2 gam", "D. 9,1 gam"],
    answer: 0,
    explanation: "n<sub>toluene</sub> = 4,6 / 92 = 0,05 mol. C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>COOK. n<sub>muối</sub> = 0,05 mol. m<sub>muối</sub> = 0,05 * 160 = 8,0 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp X gồm C<sub>2</sub>H<sub>2</sub> và H<sub>2</sub> có tỉ khối với H<sub>2</sub> là 4,0. Dẫn X qua Ni nung nóng thu được hỗn hợp Y có tỉ khối với H<sub>2</sub> là 10. Hiệu suất phản ứng cộng H<sub>2</sub> là:",
    options: ["A. 40%", "B. 60%", "C. 80%", "D. 50%"],
    answer: 2,
    explanation: "M<sub>X</sub> = 8,0; M<sub>Y</sub> = 20. Giả sử n<sub>X</sub> = 1 mol => m<sub>X</sub> = 8. n<sub>Y</sub> = 8 / 20 = 0,4 mol. n<sub>H<sub>2</sub> phản ứng</sub> = n<sub>X</sub> − n<sub>Y</sub> = 1 − 0,4 = 0,6 mol. Trong X: 26a + 2(1−a)=8 => a=0,25; b=0,75. Hiệu suất H = 0,6/0,75 = 80%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Nhiệt phân methane ở 1500°C để điều chế acetylene. Biết hiệu suất là 60%. Thể tích khí acetylene thu được từ 1,6 gam methane là:",
    options: ["A. 0,672 lít", "B. 1,050 lít", "C. 0,840 lít", "D. 1,260 lít"],
    answer: 0,
    explanation: "n<sub>CH<sub>4</sub></sub> = 1,6 / 16 = 0,1 mol. n<sub>C<sub>2</sub>H<sub>2</sub> lý thuyết</sub> = 0,1 / 2 = 0,05 mol. n<sub>thực tế</sub> = 0,05 * 0,6 = 0,03 mol. V = 0,03 * 22,4 = 0,672 lít."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 10 gam hỗn hợp arene gồm benzene và toluene tác dụng với dung dịch HNO<sub>3</sub> đặc/H<sub>2</sub>SO<sub>4</sub> đặc. Sau khi phản ứng kết thúc, thu được 15,23 gam nitroarene. Nếu hiệu suất là 100%, thành phần % khối lượng của benzene trong hỗn hợp là:",
    options: ["A. 39%", "B. 61%", "C. 50%", "D. 78%"],
    answer: 0,
    explanation: "78x + 92y = 10. (78+45)x + (92+45)y = 15,23 => 123x + 137y = 15,23. Giải hệ => x = 0,05; y = 0,066. m<sub>benzene</sub> = 0,05 * 78 = 3,9 gam. %m = 3,9 / 10 = 39%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp khí X gồm 0,1 mol CH<sub>4</sub> và 0,1 mol C<sub>2</sub>H<sub>4</sub>. Đốt cháy hoàn toàn X rồi dẫn sản phẩm qua bình đựng nước vôi trong dư. Khối lượng kết tủa thu được là:",
    options: ["A. 30 gam", "B. 10 gam", "C. 20 gam", "D. 40 gam"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,1 * 1 + 0,1 * 2 = 0,3 mol. n<sub>CaCO<sub>3</sub></sub> = n<sub>CO<sub>2</sub></sub> = 0,3 mol. m<sub>kết tủa</sub> = 0,3 * 100 = 30 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Một alkene X phản ứng hoàn toàn với H<sub>2</sub>O (xúc tác H<sup>+</sup>) thu được 6 gam một alcohol no đơn chức. Biết X có tỉ khối so với He là 10,5. Hiệu suất phản ứng là:",
    options: ["A. 75%", "B. 80%", "C. 60%", "D. 100%"],
    answer: 3,
    explanation: "M<sub>X</sub> = 10,5 * 4 = 42 (C<sub>3</sub>H<sub>6</sub>). n<sub>X</sub> = 0,1 mol. n<sub>alcohol lý thuyết</sub> = 0,1 mol. Khối lượng alcohol lý thuyết = 0,1 * 60 = 6 gam. Đề thu được 6 gam alcohol nên hiệu suất là 100%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Phản ứng cracking hoàn toàn 1 mol pentane thu được hỗn hợp X gồm các hydrocarbon. Số mol hỗn hợp X thu được là:",
    options: ["A. 1 mol", "B. 2 mol", "C. 3 mol", "D. 1,5 mol"],
    answer: 1,
    explanation: "Cracking một phân tử alkane thành một phân tử alkane mới và một alkene. Nên 1 mol ban đầu sẽ tạo ra 2 mol sản phẩm."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hóa hơi hoàn toàn 5,85 gam arene X thuộc dãy benzene thu được thể tích hơi bằng thể tích của 1,2 gam khí CH<sub>4</sub> (đo cùng điều kiện). Arene X là:",
    options: ["A. C<sub>6</sub>H<sub>6</sub>", "B. C<sub>7</sub>H<sub>8</sub>", "C. C<sub>8</sub>H<sub>10</sub>", "D. C<sub>9</sub>H<sub>12</sub>"],
    answer: 0,
    explanation: "n<sub>CH<sub>4</sub></sub> = 1,2 / 16 = 0,075 mol. => n<sub>X</sub> = 0,075 mol. M<sub>X</sub> = 5,85 / 0,075 = 78 (g/mol). Vậy X là C<sub>6</sub>H<sub>6</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dẫn 3,36 lít (đktc) hỗn hợp X gồm C<sub>2</sub>H<sub>2</sub> và C<sub>2</sub>H<sub>4</sub> qua dung dịch Br<sub>2</sub> dư. Sau phản ứng hoàn toàn có 40 gam Br<sub>2</sub> đã phản ứng. Thành phần % theo thể tích của C<sub>2</sub>H<sub>2</sub> trong X là:",
    options: ["A. 66,67%", "B. 33,33%", "C. 50,00%", "D. 75,00%"],
    answer: 0,
    explanation: "n<sub>X</sub> = 0,15 mol. nBr<sub>2</sub> = 40/160 = 0,25 mol. Gọi x, y là số mol C<sub>2</sub>H<sub>2</sub>, C<sub>2</sub>H<sub>4</sub>. => x + y = 0,15 và 2x + y = 0,25. Giải hệ => x = 0,1; y = 0,05. %V<sub>C2H2</sub> = (0,1/0,15)*100 = 66,67%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho m gam alkene X tác dụng với dung dịch KMnO<sub>4</sub> dư thu được 15,3 gam diol tương ứng. Biết X là ethylene. Giá trị của m là:",
    options: ["A. 5,6 gam", "B. 6,9 gam", "C. 7,0 gam", "D. 8,4 gam"],
    answer: 1,
    explanation: "Diol của ethylene là C<sub>2</sub>H<sub>4</sub>(OH)<sub>2</sub> (M=62). n<sub>diol</sub> = 15,3 / 62 = 0,246 mol. m<sub>ethylene</sub> = 0,246 * 28 = 6,9 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp X gồm C<sub>3</sub>H<sub>6</sub> và C<sub>3</sub>H<sub>8</sub>. Đốt cháy hoàn toàn X thu được n<sub>CO<sub>2</sub></sub> : n<sub>H<sub>2</sub>O</sub> = 3 : 3,6. Phần trăm số mol của propane trong X là:",
    options: ["A. 40%", "B. 60%", "C. 50%", "D. 30%"],
    answer: 1,
    explanation: "n<sub>CO<sub>2</sub></sub> = 3 mol => n<sub>C</sub> = 3 mol. n<sub>H<sub>2</sub>O</sub> = 3,6 mol => n<sub>H</sub> = 7,2 mol. n<sub>X</sub> = n<sub>H<sub>2</sub>O</sub> − n<sub>CO<sub>2</sub></sub> (áp dụng cho hỗn hợp alkane và alkene có cùng số C) = 0,6 mol. n<sub>propane</sub> = 0,6 mol. %n<sub>propane</sub> = 60%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Để nitro hóa 7,8 gam benzene thành nitrobenzene cần dùng vừa đủ 15 gam dung dịch HNO<sub>3</sub> 63%. Hiệu suất phản ứng là:",
    options: ["A. 80%", "B. 90%", "C. 100%", "D. 75%"],
    answer: 1,
    explanation: "n<sub>benzene</sub> = 0,1 mol. n<sub>HNO3</sub> = (15 * 0,63) / 63 = 0,15 mol. Tỉ lệ 1:1 nên benzene hết. n<sub>lý thuyết</sub> = 0,1 mol. Nếu thu được 0,09 mol thì hiệu suất 90%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khi cho 2−methylpropane tác dụng với Br<sub>2</sub> (ánh sáng, tỉ lệ 1:1), sản phẩm chính thu được là:",
    options: ["A. 1−bromo−2−methylpropane", "B. 2−bromo−2−methylpropane", "C. 2−bromobutane", "D. 1−bromobutane"],
    answer: 1,
    explanation: "Brom thế ưu tiên vào carbon bậc cao nhất (carbon bậc 3 trong neopentane/isobutane)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp X gồm methane và một ankin Y (tỉ lệ mol 1:1). Đốt cháy hoàn toàn X thu được CO<sub>2</sub> và H<sub>2</sub>O theo tỉ lệ mol là 1:1. Y là:",
    options: ["A. Acetylene", "B. Propyne", "C. Butyne", "D. Pentyne"],
    answer: 0,
    explanation: "Giả sử 1 mol CH<sub>4</sub> và 1 mol C<sub>n</sub>H<sub>2n−2</sub>. n<sub>CO<sub>2</sub></sub> = 1 + n. n<sub>H<sub>2</sub>O</sub> = 2 + n − 1 = 1 + n. n<sub>CO<sub>2</sub></sub> = n<sub>H<sub>2</sub>O</sub> => Tỉ lệ 1:1 luôn đúng với mọi ankin. Để là hydrocarbon mạch hở đơn giản nhất thì Y là C<sub>2</sub>H<sub>2</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đã có bao nhiêu đồng phân cấu tạo ứng với công thức C<sub>4</sub>H<sub>8</sub> mà khi cộng H<sub>2</sub>O (H<sup>+</sup>) chỉ cho một sản phẩm alcohol duy nhất?",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 1,
    explanation: "Gồm cyclobutane (no) và but−2−ene (đối xứng)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho m gam hỗn hợp X gồm ethylene và propylene làm mất màu vừa đủ dung dịch chứa 16 gam Br<sub>2</sub>. Biết tỉ lệ mol của ethylene và propylene là 1:1. Giá trị của m là:",
    options: ["A. 3,5", "B. 4,2", "C. 2,8", "D. 4,9"],
    answer: 0,
    explanation: "nBr<sub>2</sub> = 0,1 mol. => n<sub>ethylene</sub> = n<sub>propylene</sub> = 0,05 mol. m = 0,05 * 28 + 0,05 * 42 = 1,4 + 2,1 = 3,5 gam."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn một arene X, thu được CO<sub>2</sub> và H<sub>2</sub>O có khối lượng tương ứng là 13,2 gam và 2,7 gam. X phản ứng với Cl<sub>2</sub> (as) tạo duy nhất một dẫn xuất monoclo. Tên của X là:",
    options: ["A. Benzene", "B. Toluene", "C. p−xylene", "D. Hexamethylbenzene"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,3; n<sub>H<sub>2</sub>O</sub> = 0,15. Tỉ lệ C:H = 1:1. X là C<sub>6</sub>H<sub>6</sub>. Benzene thế Cl chỉ tạo 1 sản phẩm."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khí rò rỉ từ các bồn chứa gas (LPG) thường có mùi hôi là do người ta pha thêm tạp chất nào để dễ nhận biết?",
    options: ["A. Methane", "B. Hydrogen sulfide", "C. Các hợp chất chứa lưu huỳnh (mercaptan)", "D. Chlorine"],
    answer: 2,
    explanation: "Gas nguyên chất không mùi nên cần thêm chất có mùi đặc trưng để cảnh báo rò rỉ."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 2,0 gam một alkyne X tác dụng với dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> thu được 7,35 gam kết tủa. X là:",
    options: ["A. Acetylene", "B. Propyne", "C. But−1−yne", "D. Pent−1−yne"],
    answer: 1,
    explanation: "n<sub>Propyne</sub> = 2,0 / 40 = 0,05 mol. Kết tủa là C<sub>3</sub>H<sub>3</sub>Ag (M=147). m<sub>kết tủa</sub> = 0,05 * 147 = 7,35 gam. Hiệu suất 100%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm chính của phản ứng thế bromine vào styrene (tỉ lệ 1:1, as) là:",
    options: ["A. C<sub>6</sub>H<sub>5</sub>−CHBr−CH<sub>3</sub>", "B. p−bromostyrene", "C. C<sub>6</sub>H<sub>5</sub>−CH<sub>2</sub>−CH<sub>2</sub>Br", "D. m−bromostyrene"],
    answer: 0,
    explanation: "Dưới tác dụng của ánh sáng, styrene thực hiện phản ứng thế vào vị trí benzylic (carbon cạnh vòng thơm)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Phần trăm khối lượng Carbon trong một arene X là 90,57%. Công thức phân tử của X là:",
    options: ["A. C<sub>7</sub>H<sub>8</sub>", "B. C<sub>8</sub>H<sub>10</sub>", "C. C<sub>9</sub>H<sub>12</sub>", "D. C<sub>10</sub>H<sub>14</sub>"],
    answer: 1,
    explanation: "Trong arene C<sub>n</sub>H<sub>2n-6</sub>: %C = 12n / (14n - 6) = 0,9057. Giải ra n = 8. Vậy X là C<sub>8</sub>H<sub>10</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dehydrocyclization octane (C<sub>8</sub>H<sub>18</sub>) để thu được ethylbenzene, hiệu suất quá trình là 60%. Khối lượng ethylbenzene thu được từ 11,4 gam octane là:",
    options: ["A. 6,36 g", "B. 10,6 g", "C. 5,1 g", "D. 8,48 g"],
    answer: 0,
    explanation: "n<sub>octane</sub> = 11,4 / 114 = 0,1 mol. Phản ứng: C<sub>8</sub>H<sub>18</sub> → C<sub>6</sub>H<sub>5</sub>C<sub>2</sub>H<sub>5</sub> + 4H<sub>2</sub>. n<sub>ethylbenzene lý thuyết</sub> = 0,1 mol. m<sub>thực tế</sub> = 0,1 * 106 * 0,6 = 6,36 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số đồng phân hydrocarbon thơm có công thức phân tử C<sub>8</sub>H<sub>10</sub> là:",
    options: ["A. 2", "B. 3", "C. 4", "D. 5"],
    answer: 2,
    explanation: "Gồm ethylbenzene, o−xylene, m−xylene, p−xylene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp X gồm 0,1 mol C<sub>2</sub>H<sub>2</sub> và 0,1 mol H<sub>2</sub>. Dẫn X qua Ni nung nóng thu được hỗn hợp Y. Dẫn Y qua bình nước Br<sub>2</sub> dư thấy khối lượng bình tăng 1,4 gam. Thể tích khí thoát ra khỏi bình Br<sub>2</sub> là:",
    options: ["A. 2,24 lít", "B. 4,48 lít", "C. 1,12 lít", "D. 3,36 lít"],
    answer: 0,
    explanation: "m<sub>bình tăng</sub> là khối lượng của alkene và alkyne dư. n<sub>X</sub> = 0,2 mol. n<sub>Y</sub> = n<sub>X</sub> − n<sub>H<sub>2</sub> phản ứng</sub>. Khí thoát ra gồm alkane và H<sub>2</sub> dư. Theo bảo toàn, V = 2,24 lít."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số liên kết đơn (sigma) trong phân tử anthracene (C<sub>14</sub>H<sub>10</sub>) là:",
    options: ["A. 21", "B. 23", "C. 26", "D. 28"],
    answer: 2,
    explanation: "Anthracene có 3 vòng ngưng tụ. Tổng liên kết sigma = 26 (16 C-C và 10 C-H)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp khí X gồm 0,1 mol C<sub>2</sub>H<sub>2</sub> và 0,15 mol H<sub>2</sub>. Nung nóng X với Ni thu được hỗn hợp Y. Dẫn Y qua bình nước Br<sub>2</sub> dư thấy khối lượng bình tăng 0,82 gam và thoát ra hỗn hợp khí Z có tỉ khối so với H<sub>2</sub> là 4. Số mol ethane trong Z là:",
    options: ["A. 0,03 mol", "B. 0,05 mol", "C. 0,02 mol", "D. 0,04 mol"],
    answer: 2,
    explanation: "m<sub>X</sub> = 2,9 g. m<sub>Y</sub> = 2,9 g. m<sub>Z</sub> = 2,08 g. n<sub>Z</sub> = 0,26. n<sub>C2H6</sub> = 0,02 mol."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Ozon phân một alkene X thu được propanone và acetaldehyde. Tên của X là:",
    options: ["A. 2-methylbut-2-ene", "B. 2-methylbut-1-ene", "C. Pent-2-ene", "D. 3-methylbut-1-ene"],
    answer: 0,
    explanation: "X là (CH3)2C=CHCH3."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số dẫn xuất monoclo có thể thu được khi clo hóa neopentane (2,2-dimethylpropane) là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 0,
    explanation: "Tất cả 12 nguyên tử H đều tương đương."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn m gam hỗn hợp X gồm butane và isobutane thu được 33 gam CO<sub>2</sub>. Giá trị m là:",
    options: ["A. 10,875 g", "B. 14,5 g", "C. 11,6 g", "D. 9,8 g"],
    answer: 0,
    explanation: "n<sub>CO<sub>2</sub></sub> = 0,75. n<sub>C<sub>4</sub>H<sub>10</sub></sub> = 0,1875. m = 10,875 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Chlorine hóa benzene (xúc tác Fe, t°) thu được chlorobenzene. Hiệu suất 80%. Từ 15,6 gam benzene thu được bao nhiêu gam chlorobenzene?",
    options: ["A. 18,0 g", "B. 22,5 g", "C. 14,4 g", "D. 20,4 g"],
    answer: 0,
    explanation: "n = 0,2. m<sub>lý thuyết</sub> = 0,2 * 112,5 = 22,5. m = 22,5 * 0,8 = 18 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cho 6,72 lít alkene X (đktc) phản ứng với Br<sub>2</sub> dư thấy khối lượng bình tăng 12,6 gam. X là:",
    options: ["A. Ethylene", "B. Propylene", "C. But-1-ene", "D. But-2-ene"],
    answer: 1,
    explanation: "n = 0,3. M = 42. C<sub>3</sub>H<sub>6</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn một ankin X thu được 6,72 lít CO<sub>2</sub> (đktc) và 3,6 gam H<sub>2</sub>O. X là:",
    options: ["A. C<sub>2</sub>H<sub>2</sub>", "B. C<sub>3</sub>H<sub>4</sub>", "C. C<sub>4</sub>H<sub>6</sub>", "D. C<sub>5</sub>H<sub>8</sub>"],
    answer: 1,
    explanation: "n<sub>CO<sub>2</sub></sub> − n<sub>H<sub>2</sub>O</sub> = 0,1. Số C = 3. X là C<sub>3</sub>H<sub>4</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp khí X gồm H<sub>2</sub> và C<sub>2</sub>H<sub>4</sub> có tỉ khối so với He là 3,75. Dẫn X qua Ni nung nóng, thu được hỗn hợp khí Y có tỉ khối so với He là 5. Hiệu suất cộng H<sub>2</sub> là:",
    options: ["A. 40%", "B. 50%", "C. 60%", "D. 25%"],
    answer: 1,
    explanation: "M<sub>X</sub> = 15; M<sub>Y</sub> = 20. H = 50%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn 0,1 mol arene X thuộc dãy benzene thu được 0,8 mol CO<sub>2</sub>. Số đồng phân cấu tạo của X là:",
    options: ["A. 4", "B. 3", "C. 2", "D. 1"],
    answer: 0,
    explanation: "X là C<sub>8</sub>H<sub>10</sub>, có 4 đồng phân: ethylbenzene, o-, m-, p-xylene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Nitro hóa 15,6 gam benzene thu được bao nhiêu gam nitrobenzene? Hiệu suất 80%.",
    options: ["A. 19,68 g", "B. 24,6 g", "C. 15,36 g", "D. 30,75 g"],
    answer: 0,
    explanation: "n = 0,2. m = 24,6 * 0,8 = 19,68 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Oxi hóa 10,6 gam o-xylene bằng KMnO<sub>4</sub> dư/H<sub>2</sub>SO<sub>4</sub> thu được bao nhiêu gam phthalic acid?",
    options: ["A. 16,6 g", "B. 12,2 g", "C. 15,0 g", "D. 18,2 g"],
    answer: 0,
    explanation: "n<sub>xylene</sub> = 0,1 mol. m<sub>acid</sub> = 0,1 * 166 = 16,6 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dẫn 3,36 lít acetylene (đktc) qua ống sứ đựng bột Carbon nóng đỏ ở 600°C thu được m gam benzene. Hiệu suất 60%. Giá trị m là:",
    options: ["A. 2,34 g", "B. 3,9 g", "C. 1,404 g", "D. 4,68 g"],
    answer: 0,
    explanation: "n<sub>C<sub>2</sub>H<sub>2</sub></sub> = 0,15 mol. m<sub>benzene lý thuyết</sub> = 3,9 g. m<sub>thực tế</sub> = 2,34 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Trùng hợp styrene với hiệu suất 80% thu được 8,32 gam polystyrene. Khối lượng styrene ban đầu là:",
    options: ["A. 10,4 g", "B. 13,0 g", "C. 9,2 g", "D. 8,32 g"],
    answer: 0,
    explanation: "m = 8,32 / 0,8 = 10,4 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số đồng phân hydrocarbon thơm ứng với công thức C<sub>9</sub>H<sub>12</sub> là:",
    options: ["A. 8", "B. 7", "C. 6", "D. 9"],
    answer: 0,
    explanation: "Gồm propylbenzene, isopropylbenzene, 3 đồng phân ethylmethylbenzene và 3 đồng phân trimethylbenzene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hỗn hợp C<sub>2</sub>H<sub>2</sub> và H<sub>2</sub> (1:1) qua Ni đun nóng thu được Y có tỉ khối so với H<sub>2</sub> là 10. Hiệu suất cộng H<sub>2</sub> là:",
    options: ["A. 40%", "B. 30%", "C. 50%", "D. 60%"],
    answer: 3,
    explanation: "Hỗn hợp X có M = 14. Sau phản ứng M tăng lên 20. Tỉ lệ n1/n2 = 20/14 = 10/7. Giả sử ban đầu có 1 mol (0,5 mol C2H2 và 0,5 mol H2). n2 = 0,7 mol. nH2 phản ứng = 1 - 0.7 = 0.3 mol. Hiệu suất H = 0.3 / 0.5 = 60%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khi cộng Br<sub>2</sub> vào isoprene theo tỉ lệ 1:1, sản phẩm cộng 1,4 là:",
    options: ["A. 1,4-dibromo-2-methylbut-2-ene", "B. 3,4-dibromo-2-methylbut-1-ene", "C. 1,2-dibromo-2-methylbut-3-ene", "D. 1,4-dibromo-2-methylbut-1-ene"],
    answer: 0,
    explanation: "Sản phẩm cộng vào hai đầu hệ liên hợp."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dehydrocyclization n-heptane thu được toluene. Từ 20 gam n-heptane thu được bao nhiêu gam toluene? Hiệu suất 75%.",
    options: ["A. 13,8 g", "B. 18,4 g", "C. 15,0 g", "D. 12,6 g"],
    answer: 0,
    explanation: "n<sub>heptane</sub> = 0,2 mol. m<sub>toluene lý thuyết</sub> = 18,4 g. m<sub>thực tế</sub> = 13,8 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Brom hóa benzene (xúc tác Fe, t°) thu được 15,7 gam bromobenzene. Hiệu suất 80%. Khối lượng benzene đã dùng là:",
    options: ["A. 9,75 g", "B. 7,8 g", "C. 12,5 g", "D. 10,4 g"],
    answer: 0,
    explanation: "n<sub>bromobenzene</sub> = 0,1. n<sub>benzene lý thuyết</sub> = 0,1. n<sub>thực tế</sub> = 0,1 / 0,8 = 0,125. m = 9,75 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Cracking propane thu được hỗn hợp gồm 5 chất khí. Tỉ khối của hỗn hợp so với H<sub>2</sub> là 11. Hiệu suất cracking là:",
    options: ["A. 100%", "B. 80%", "C. 90%", "D. 75%"],
    answer: 0,
    explanation: "M = 22. n<sub>Y</sub> / n<sub>X</sub> = 44 / 22 = 2. H = 100%."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hydro hóa hoàn toàn 1,3-butadiene thu được sản phẩm là:",
    options: ["A. n-butane", "B. Isobutane", "C. But-2-ene", "D. Cyclobutane"],
    answer: 0,
    explanation: "Cộng dư H2 vào alkadiene thu được alkane tương ứng."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Phát biểu nào sau đây sai về benzene?",
    options: ["A. Có cấu trúc phẳng, vòng 6 cạnh đều", "B. Dễ tham gia phản ứng thế, khó tham gia phản ứng cộng", "C. Làm mất màu dung dịch nước bromine ở nhiệt độ thường", "D. Là dung môi không phân cực"],
    answer: 2,
    explanation: "Benzene không làm mất màu nước bromine ở nhiệt độ thường."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm chính khi Clo hóa Toluene (xúc tác Fe, t°) là:",
    options: ["A. o-chlorotoluene và p-chlorotoluene", "B. m-chlorotoluene", "C. Benzyl chloride", "D. Benzyl dichloride"],
    answer: 0,
    explanation: "Thế vào vòng thơm, nhóm -CH3 định hướng ortho/para."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm chính của phản ứng giữa propene và HBr là:",
    options: ["A. 2-bromopropane", "B. 1-bromopropane", "C. 1,2-dibromopropane", "D. 2,2-dichloropropane"],
    answer: 0,
    explanation: "Theo quy tắc Markovnikov."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số liên kết σ (sigma) trong phân tử but-1-yne là:",
    options: ["A. 9", "B. 10", "C. 8", "D. 11"],
    answer: 0,
    explanation: "3 (C-C) + 6 (C-H) = 9."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn 0,1 mol alkane X thu được 0,4 mol CO<sub>2</sub>. X là:",
    options: ["A. Butane", "B. Propane", "C. Pentane", "D. Ethane"],
    answer: 0,
    explanation: "C = 0,4 / 0,1 = 4."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dẫn 0,2 mol acetylene qua bình đựng dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> dư thu được bao nhiêu gam kết tủa?",
    options: ["A. 48,0 g", "B. 33,4 g", "C. 24,0 g", "D. 44,8 g"],
    answer: 0,
    explanation: "n<sub>kết tủa</sub> = 0,2. m = 0,2 * 240 = 48 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Trùng hợp ethylene thu được polyethylene. Nếu dùng 1 tấn ethylene với hiệu suất 90% thì thu được bao nhiêu kg polymer?",
    options: ["A. 900 kg", "B. 1000 kg", "C. 800 kg", "D. 950 kg"],
    answer: 0,
    explanation: "1000 * 0,9 = 900 kg."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Để đun sôi 1 lít nước cần bao nhiêu gam methane? Biết Q = 890 kJ/mol, hiệu suất 80%.",
    options: ["A. 7,08 g", "B. 5,66 g", "C. 8,45 g", "D. 6,25 g"],
    answer: 0,
    explanation: "Q = 315 / 0,8 = 393,75 kJ. m = 7,08 g."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Alkane X có tỉ khối so với không khí là 2,48. X là:",
    options: ["A. Pentane", "B. Butane", "C. Hexane", "D. Propane"],
    answer: 0,
    explanation: "M = 29 * 2,48 = 72. C<sub>5</sub>H<sub>12</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khi sục khí acetylene vào dung dịch KMnO<sub>4</sub>, hiện tượng quan sát được là:",
    options: ["A. Dung dịch mất màu và có kết tủa đen", "B. Dung dịch không đổi màu", "C. Có khí thoát ra", "D. Dung dịch chuyển sang màu vàng"],
    answer: 0,
    explanation: "Acetylene bị oxi hóa tạo MnO<sub>2</sub> (kết tủa đen)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số liên kết pi (π) trong phân tử styrene là:",
    options: ["A. 4", "B. 3", "C. 5", "D. 2"],
    answer: 0,
    explanation: "3 liên kết pi trong vòng và 1 liên kết pi ở nhánh vinyl."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm cộng nước của propyne với xúc tác HgSO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub> là:",
    options: ["A. Acetone", "B. Propanal", "C. Propan−1−ol", "D. Propylene glycol"],
    answer: 0,
    explanation: "Cộng nước vào liên kết ba của propyne tạo acetone."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Chất nào có nhiệt độ sôi thấp nhất trong số các isomer C<sub>5</sub>H<sub>12</sub>?",
    options: ["A. n−pentane", "B. Isopentane", "C. Neopentane", "D. Bằng nhau"],
    answer: 2,
    explanation: "Neopentane có cấu trúc cầu tròn nhất, diện tích tiếp xúc nhỏ nhất => nhiệt độ sôi thấp nhất."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Trong phản ứng thế brom vào benzene, tác nhân tấn công vòng thơm là:",
    options: ["A. Br<sub>2</sub>", "B. Br<sup>+</sup>", "C. Br<sup>−</sup>", "D. Br*"],
    answer: 1,
    explanation: "Ion bromonium Br<sup>+</sup> là tác nhân ái điện tử."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Dãy đồng đẳng alkyne không có đồng phân nào sau đây?",
    options: ["A. Đồng phân mạch C", "B. Đồng phân vị trí liên kết ba", "C. Đồng phân hình học", "D. Đồng phân nhóm chức"],
    answer: 2,
    explanation: "Cấu trúc đường thẳng của liên kết ba không tạo được đồng phân hình học."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hidrat hóa 2,8 gam một alkene thu được 4,6 gam alcohol no đơn chức. Tên alkene đó là:",
    options: ["A. Ethylene", "B. Propylene", "C. But−1−ene", "D. But−2−ene"],
    answer: 0,
    explanation: "n alkene = n H2O = 0,1 => M = 28 (Ethylene)."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Chất nào sau đây không phải là tác nhân gây ô nhiễm không khí do khí thải xe cộ?",
    options: ["A. CO", "B. NO<sub>x</sub>", "C. Hydrocarbon chưa cháy hết", "D. Hơi nước"],
    answer: 3,
    explanation: "Hơi nước không gây hại."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Trong arene, toluene phản ứng được với tác nhân nào mà benzene không phản ứng (ở điều kiện thích hợp)?",
    options: ["A. H<sub>2</sub> (Ni, t°)", "B. Cl<sub>2</sub> (Fe, t°)", "C. KMnO<sub>4</sub> (đun nóng)", "D. HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>"],
    answer: 2,
    explanation: "Nhánh methyl bị oxi hóa bởi KMnO4 đun nóng."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Bậc của nguyên tử carbon trong phân tử alkane vòng như cyclohexane là:",
    options: ["A. Bậc 1", "B. Bậc 2", "C. Bậc 3", "D. Bậc 4"],
    answer: 1,
    explanation: "Mỗi C liên kết với 2 C khác."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Một hỗn hợp X gồm propane và propene. Dẫn X qua dung dịch brom thấy khối lượng brom tham gia phản ứng là 16 gam. Khi đốt cháy hoàn toàn X thu được 0,6 mol CO<sub>2</sub>. Số mol propane trong X là:",
    options: ["A. 0,05 mol", "B. 0,1 mol", "C. 0,15 mol", "D. 0,2 mol"],
    answer: 1,
    explanation: "n<sub>propene</sub> = n<sub>Br<sub>2</sub></sub> = 16 / 160 = 0,1 mol. n<sub>CO<sub>2</sub> do propene</sub> = 0,1 * 3 = 0,3 mol. n<sub>CO<sub>2</sub> do propane</sub> = 0,6 − 0,3 = 0,3 mol. => n<sub>propane</sub> = 0,3 / 3 = 0,1 mol."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Liên kết ba C≡C gồm:",
    options: ["A. 3 liên kết sigma", "B. 3 liên kết pi", "C. 1 liên kết sigma và 2 liên kết pi", "D. 2 liên kết sigma và 1 liên kết pi"],
    answer: 2,
    explanation: "Cấu tạo liên kết ba."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số đồng phân arene ứng với công thức C<sub>9</sub>H<sub>12</sub> là:",
    options: ["A. 6", "B. 7", "C. 8", "D. 9"],
    answer: 2,
    explanation: "Có 8 đồng phân arene cho C9H12."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Phản ứng của Styrene với dung dịch bromine dư tạo ra sản phẩm là:",
    options: ["A. C<sub>6</sub>H<sub>5</sub>CHBrCH<sub>2</sub>Br", "B. C<sub>6</sub>H<sub>4</sub>BrCH=CH<sub>2</sub>", "C. C<sub>6</sub>H<sub>4</sub>BrCHBrCH<sub>2</sub>Br", "D. C<sub>6</sub>H<sub>5</sub>CBr=CHBr"],
    answer: 0,
    explanation: "Cộng vào nhánh."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Để phân biệt 3 bình mất nhãn đựng methane, ethylene và acetylene, ta thực hiện theo trình tự:",
    options: ["A. Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub> trước, sau đó dùng dung dịch Br<sub>2</sub>", "B. Dung dịch Br<sub>2</sub> trước, sau đó dùng AgNO<sub>3</sub>/NH<sub>3</sub>", "C. Quỳ tím", "D. Đốt cháy"],
    answer: 0,
    explanation: "Dùng AgNO3/NH3 nhận acetylene, Br2 nhận ethylene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Alkane nào sau đây thu được từ quá trình trưng cất dầu mỏ ở phân đoạn khí?",
    options: ["A. Methane", "B. Hexane", "C. Kerosene", "D. Paraffin"],
    answer: 0,
    explanation: "Methane là khí."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Xác định sản phẩm của phản ứng giữa ethylbenzene và clo ở 100°C có chiếu sáng.",
    options: ["A. 1−chloro−1−phenylethane", "B. 2−chloro−1−phenylethane", "C. o−chloroethylbenzene", "D. p−chloroethylbenzene"],
    answer: 0,
    explanation: "Thế ưu tiên vào carbon alpha."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số lượng liên kết pi (π) có trong một phân tử toluene là:",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    answer: 2,
    explanation: "3 liên kết pi vòng benzene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Một hydrocarbon X có công thức phân tử C<sub>4</sub>H<sub>8</sub>, khi tác dụng với HBr chỉ thu được một sản phẩm duy nhất. X là:",
    options: ["A. But−1−ene", "B. But−2−ene", "C. Methylpropene", "D. Cyclobutane"],
    answer: 1,
    explanation: "But−2−ene đối xứng."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hiệu ứng 'nhà kính' chủ yếu do khí nào sau đây gây ra?",
    options: ["A. N<sub>2</sub>", "B. CO<sub>2</sub> và CH<sub>4</sub>", "C. O<sub>2</sub>", "D. Ar"],
    answer: 1,
    explanation: "CO<sub>2</sub> và CH<sub>4</sub> là những khí nhà kính phổ biến."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khi hòa tan acetylene vào acetone trong các bình thép, mục đích là để:",
    options: ["A. Tăng độ tinh khiết", "B. Giảm áp suất và tránh nổ khi nén acetylene", "C. Làm xúc tác", "D. Tạo mùi"],
    answer: 1,
    explanation: "Acetone giúp hòa tan acetylene an toàn."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm chính của phản ứng dehydro hóa butane để thu được butadiene là:",
    options: ["A. But−1−ene", "B. But−2−ene", "C. Buta−1,3−diene", "D. Butyne"],
    answer: 2,
    explanation: "Buta−1,3−diene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Chất nào sau đây không phải là arene?",
    options: ["A. Benzene", "B. Naphthalene", "C. Cyclohexene", "D. Anthracene"],
    answer: 2,
    explanation: "Cyclohexene không thơm."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Phát biểu nào sau đây đúng về các anken?",
    options: ["A. Có khả năng tham gia phản ứng trùng hợp", "B. Không tan trong nước", "C. Nhẹ hơn nước", "D. Tất cả"],
    answer: 3,
    explanation: "Tính chất chung của anken."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Đốt cháy hoàn toàn một arene X thu được n<sub>CO<sub>2</sub></sub> : n<sub>H<sub>2</sub>O</sub> = 2 : 1. X là:",
    options: ["A. Benzene", "B. Toluene", "C. Xylene", "D. Naphtalene"],
    answer: 0,
    explanation: "C<sub>6</sub>H<sub>6</sub> cháy cho 6 mol CO<sub>2</sub> và 3 mol H<sub>2</sub>O."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Công thức phân tử của cumene là:",
    options: ["A. C<sub>9</sub>H<sub>12</sub>", "B. C<sub>8</sub>H<sub>10</sub>", "C. C<sub>10</sub>H<sub>14</sub>", "D. C<sub>7</sub>H<sub>8</sub>"],
    answer: 0,
    explanation: "Cumene là isopropylbenzene có công thức C<sub>9</sub>H<sub>12</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Để loại bỏ acetylene có lẫn trong ethylene, người ta dùng:",
    options: ["A. Dung dịch Br<sub>2</sub>", "B. Dung dịch AgNO<sub>3</sub>/NH<sub>3</sub>", "C. Dung dịch KMnO<sub>4</sub>", "D. H<sub>2</sub> (Ni, t°)"],
    answer: 1,
    explanation: "AgNO<sub>3</sub>/NH<sub>3</sub> chỉ phản ứng tạo kết tủa với acetylene."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Hidrat hóa isobutylene thu được sản phẩm chính là:",
    options: ["A. tert−butyl alcohol", "B. isobutyl alcohol", "C. n−butyl alcohol", "D. sec−butyl alcohol"],
    answer: 0,
    explanation: "Cùng nước vào carbon bậc cao."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Khi nhiệt phân methane ở 1500°C thu được hỗn hợp khí gồm:",
    options: ["A. C<sub>2</sub>H<sub>2</sub>, H<sub>2</sub>", "B. C<sub>2</sub>H<sub>4</sub>, H<sub>2</sub>", "C. C<sub>2</sub>H<sub>6</sub>, H<sub>2</sub>", "D. C, H<sub>2</sub>"],
    answer: 0,
    explanation: "Đây là phản ứng điều chế acetylene: 2CH<sub>4</sub> → C<sub>2</sub>H<sub>2</sub> + 3H<sub>2</sub>."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Chất nào sau đây không làm mất màu dung dịch KMnO4 ở bất kỳ điều kiện nào?",
    options: ["A. Benzene", "B. Toluene", "C. Ethylene", "D. Propylene"],
    answer: 0,
    explanation: "Benzene rất bền với thuốc tím."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Sản phẩm chính của phản ứng giữa propene và HCl là:",
    options: ["A. 2−chloropropane", "B. 1−chloropropane", "C. 1,2−dichloropropane", "D. 2,2−dichloropropane"],
    answer: 0,
    explanation: "Quy tắc Markovnikov."
  },
  {
    topic: "hydrocarbon",
    level: "hard",
    question: "Số liên kết đơn trong phân tử benzene là:",
    options: ["A. 6", "B. 9", "C. 12", "D. 15"],
    answer: 1,
    explanation: "6 (C−H) + 3 (C−C đơn trong mô hình Kekule) = 9."
  },
];

export const QUESTIONS_HYDROCARBON: Question[] = REAL_QUESTIONS;
