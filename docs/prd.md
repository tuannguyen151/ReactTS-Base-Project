# Product Requirements Document (PRD): Pomeranian Puppies Sale

## 1. Mục tiêu và Bối cảnh

### Mục tiêu

- Tạo ra một nền tảng thương mại điện tử chuyên biệt, đáng tin cậy cho việc mua bán chó Phốc Sóc và các sản phẩm liên quan.
- Xây dựng một cộng đồng gắn kết cho những người yêu thích giống chó Phốc Sóc thông qua các tính năng chia sẻ nội dung và tương tác.
- Cung cấp một công cụ quản lý chi tiết và theo dõi vòng đời cho từng thú cưng.
- Đảm bảo quy trình mua bán có trách nhiệm và minh bạch thông qua việc kiểm duyệt người bán và cung cấp lịch sử chi tiết của thú cưng.

### Bối cảnh

Dự án này ra đời nhằm đáp ứng nhu cầu ngày càng tăng về một không gian trực tuyến uy tín và chuyên sâu dành riêng cho giống chó Phốc Sóc. Các nền tảng rao vặt chung thường thiếu thông tin chi tiết, không đảm bảo được nguồn gốc và sức khỏe của thú cưng, gây ra rủi ro cho người mua. Ứng dụng này sẽ giải quyết vấn đề đó bằng cách tạo ra một thị trường được kiểm duyệt, nơi mỗi chú chó đều có một "hồ sơ số" rõ ràng, từ thông tin gia phả đến lịch sử sức khỏe và các mốc phát triển. Hơn nữa, bằng cách tích hợp các yếu tố mạng xã hội và cộng đồng, ứng dụng không chỉ là nơi mua bán mà còn là điểm đến để những người yêu chó Phốc Sóc kết nối, chia sẻ kiến thức và kinh nghiệm.

## 2. Yêu cầu

### Yêu cầu Chức năng (Functional Requirements)

- **FR1: Quản lý Tài khoản & Xác thực**

  - [cite_start]**FR1.1:** Người dùng (khách hàng/người mua) có thể tự đăng ký tài khoản mới bằng email/số điện thoại và mật khẩu.
  - [cite_start]**FR1.2:** Người dùng có thể đăng nhập bằng tài khoản đã đăng ký hoặc thông qua các nhà cung cấp mạng xã hội (Google, Facebook, Apple).
  - **FR1.3:** Hệ thống phải có chức năng "Quên mật khẩu" cho tài khoản đăng ký bằng email/số điện thoại.
  - [cite_start]**FR1.4:** Admin có quyền tạo, xem, chỉnh sửa, và vô hiệu hóa tài khoản cho vai trò "Người bán" và "Blogger" từ một trang quản trị riêng.
  - **FR1.5:** Người dùng có trang hồ sơ cá nhân để quản lý thông tin (tên, ảnh đại diện) và xem danh sách thú cưng họ sở hữu.

- **FR2: Quản lý Thú cưng (Pets)**

  - **FR2.1:** Admin hoặc Người bán có thể tạo một hồ sơ thú cưng mới với các thông tin: Tên, Giống, Ngày sinh, Giới tính, Màu sắc, Album ảnh, Giấy tờ VKA (tùy chọn).
  - **FR2.2:** Hệ thống cho phép liên kết một hồ sơ thú cưng đến hồ sơ của chó Bố và Mẹ (nếu đã tồn tại trong hệ thống) để tạo gia phả.
  - **FR2.3:** Chủ sở hữu thú cưng (Người bán hoặc Người mua đã được cấp quyền) có thể cập nhật thông tin và thêm ảnh mới cho thú cưng.

- **FR3: Dòng thời gian Lịch sử (Pet Timeline)**

  - **FR3.1:** Hệ thống tự động ghi lại các sự kiện quan trọng vào dòng thời gian của thú cưng: ngày sinh, các lần tiêm phòng/khám sức khỏe (do Admin/Người bán nhập), và các lần thay đổi chủ sở hữu.
  - **FR3.2:** Chủ sở hữu hiện tại của thú cưng có thể tạo các bài đăng (post) dạng tự do (văn bản và hình ảnh) lên dòng thời gian của thú cưng.
  - **FR3.3:** Những người dùng khác có thể xem và bình luận trên các bài đăng trong dòng thời gian của thú cưng.

- **FR4: Thương mại điện tử (E-commerce)**

  - **FR4.1:** Admin có thể tạo và quản lý các danh mục sản phẩm (VD: Chó con, Đồ dùng, Thức ăn, Dịch vụ).
  - **FR4.2:** Người bán có thể đăng bán chó con. Người dùng có thể xem danh sách chó con đang bán với thông tin chi tiết và giá.
  - **FR4.3:** Admin/Người bán có thể đăng bán các sản phẩm/dịch vụ khác thuộc các danh mục tương ứng.
  - **FR4.4:** Người mua có thể thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.
  - **FR4.5:** Hệ thống hỗ trợ quy trình "Đặt chỗ" (Reservation) cho một chú chó cụ thể, yêu cầu đặt cọc.
  - **FR4.6:** Hệ thống hỗ trợ quy trình thanh toán đầy đủ hoặc đặt cọc trước.
  - **FR4.7:** Hệ thống tích hợp các phương thức thanh toán: Giao hàng nhận tiền (COD), Chuyển khoản ngân hàng, Thẻ tín dụng/ghi nợ, và các Ví điện tử phổ biến.
  - **FR4.8:** Người dùng có thể xem lịch sử các đơn hàng đã đặt.

- **FR5: Nội dung & Cộng đồng (Content & Community)**

  - **FR5.1:** Tài khoản "Blogger" có thể tạo, soạn thảo và đăng các bài viết blog. Admin có thể quản lý tất cả bài viết.
  - **FR5.2:** Bài viết blog phải được phân loại vào các danh mục (VD: Chăm sóc, Huấn luyện).
  - **FR5.3:** Người dùng có thể đọc, bình luận và xếp hạng (1-5 sao) cho các bài viết blog.
  - **FR5.4:** Hệ thống có một khu vực Hỏi & Đáp (Q&A), nơi bất kỳ người dùng nào cũng có thể đặt câu hỏi.
  - **FR5.5:** Người dùng khác có thể đăng câu trả lời cho các câu hỏi.
  - **FR5.6:** Admin có thể tổ chức các cuộc thi ảnh hàng tháng. Người dùng có thể nộp ảnh dự thi bằng cách chọn một thú cưng từ hồ sơ của họ.

- **FR6: Các tính năng khác**
  - **FR6.1:** Hệ thống phải có chức năng tìm kiếm toàn diện cho phép tìm chó con, sản phẩm, và bài viết/câu hỏi.
  - **FR6.2:** Chức năng tìm kiếm phải đi kèm bộ lọc chi tiết (VD: lọc chó theo tuổi, giới tính, giá; lọc sản phẩm theo danh mục, thương hiệu).
  - **FR6.3:** Người dùng có thể thêm chó con, sản phẩm vào danh sách "Yêu thích" (Wishlist) để xem lại sau.
  - **FR6.4:** Hệ thống gửi thông báo cho người dùng khi có các hoạt động liên quan (VD: có người trả lời câu hỏi, có bình luận mới, đơn hàng được cập nhật).

### Yêu cầu Phi chức năng (Non-Functional Requirements)

- **NFR1: Hiệu suất (Performance):**
  - **NFR1.1:** Thời gian tải trang chính (trang chủ, danh sách chó, chi tiết chó) không được vượt quá 3 giây trên kết nối mạng trung bình.
  - **NFR1.2:** Dòng thời gian lịch sử của thú cưng phải có hiệu ứng cuộn mượt mà, không bị giật lag trên các thiết bị di động phổ thông.
- **NFR2: Bảo mật (Security):**
  - **NFR2.1:** Mật khẩu người dùng phải được băm (hashed) và muối (salted) trước khi lưu trữ.
  - **NFR2.2:** Tất cả các giao tiếp giữa client và server phải được mã hóa bằng HTTPS.
  - **NFR2.3:** Hệ thống phải có biện pháp chống lại các hình thức tấn công phổ biến như XSS và SQL Injection.
- **NFR3: Khả năng sử dụng (Usability):**
  - **NFR3.1:** Giao diện người dùng phải thân thiện, dễ sử dụng và nhất quán trên toàn bộ ứng dụng.
  - **NFR3.2:** Ứng dụng phải có thiết kế đáp ứng (responsive), hoạt động tốt trên cả máy tính để bàn và thiết bị di động (điện thoại, máy tính bảng).
- **NFR4: Khả năng mở rộng (Scalability):**
  - **NFR4.1:** Kiến trúc hệ thống phải được thiết kế theo dạng module, cho phép dễ dàng thêm mới hoặc chỉnh sửa các tính năng (như kết hợp sản phẩm) trong tương lai mà không ảnh hưởng lớn đến các phần khác.
  - **NFR4.2:** Hệ thống phải có khả năng xử lý lượng người dùng và dữ liệu tăng lên theo thời gian.

## 3. Mục tiêu Thiết kế Giao diện Người dùng (UI/UX)

### Tổng quan Tầm nhìn UX (Overall UX Vision)

Mục tiêu là tạo ra một trải nghiệm người dùng (UX) ấm cúng, đáng tin cậy và chuyên nghiệp. Giao diện phải sạch sẽ, hiện đại, với hình ảnh chất lượng cao làm trung tâm để tôn lên vẻ đẹp của những chú chó Phốc Sóc. Người dùng cần cảm thấy an tâm khi giao dịch và hứng thú khi tham gia vào các hoạt động cộng đồng. Luồng tương tác phải trực quan, giúp người dùng dễ dàng tìm kiếm thông tin, quản lý hồ sơ thú cưng và kết nối với nhau.

### Mô hình Tương tác Chính (Key Interaction Paradigms)

- **Khám phá & Mua sắm:** Tương tự các trang thương mại điện tử cao cấp, với bộ lọc mạnh mẽ, hình ảnh lớn và quy trình thanh toán/đặt chỗ rõ ràng.
- **Mạng xã hội:** Dòng thời gian lịch sử của thú cưng sẽ có cảm giác như một trang mạng xã hội cá nhân, khuyến khích người dùng đăng bài và tương tác.
- **Diễn đàn/Hỏi đáp:** Mô hình tương tác của các diễn đàn hiện đại, nơi câu hỏi, câu trả lời và bình luận được sắp xếp một cách logic.

### Các Màn hình và Chế độ xem Cốt lõi (Core Screens and Views)

- Trang chủ
- Trang Danh sách Chó/Sản phẩm
- Trang Chi tiết Chó & Dòng thời gian
- Giỏ hàng & Thanh toán
- Trang Blog & Bài viết
- Trang Hỏi & Đáp (Q&A)
- Hồ sơ Người dùng
- Trang Quản trị (Admin/Seller/Blogger)

### Trợ năng (Accessibility)

- Tuân thủ theo tiêu chuẩn WCAG 2.1 Mức AA.

### Xây dựng thương hiệu (Branding)

- (Cần được xác định - logo, bảng màu, font chữ sẽ được cung cấp sau).

### Thiết bị và Nền tảng mục tiêu

- Ứng dụng web có thiết kế đáp ứng (responsive), hoạt động tốt trên các trình duyệt hiện đại trên cả máy tính để bàn (Desktop) và thiết bị di động (Mobile).

## 4. Các Giả định về Kỹ thuật (Đã cập nhật)

### Cấu trúc Repository: **Monorepo**

- **Lý do:** Giúp đơn giản hóa việc quản lý, dễ dàng chia sẻ code và đảm bảo sự nhất quán.

### Kiến trúc Dịch vụ (Service Architecture)

- **Quyết định:** Backend sẽ được xây dựng bằng **NestJS Framework**.
- **Lý do:** NestJS mạnh mẽ, có cấu trúc, phù hợp để xây dựng các API có khả năng mở rộng.

### Yêu cầu về Kiểm thử (Testing)

- **Đề xuất:** Áp dụng chiến lược kiểm thử toàn diện (Unit, Integration, E2E Tests).

### Các Giả định và Yêu cầu Kỹ thuật Bổ sung

- **Frontend Framework:** Frontend sẽ được xây dựng bằng **NextJS Framework**.
- **Lý do:** NextJS cung cấp hiệu suất tuyệt vời và tối ưu cho SEO.
- **Ngôn ngữ:** Toàn bộ dự án sẽ sử dụng **TypeScript**.

## 5. Epics

### Epic 1: Nền tảng & Quản lý Người dùng/Thú cưng

**Mục tiêu Epic:** Xây dựng nền tảng kỹ thuật vững chắc cho dự án, triển khai hệ thống xác thực người dùng hoàn chỉnh, và tạo ra các chức năng cốt lõi cho phép tạo và quản lý hồ sơ người dùng cũng như hồ sơ thú cưng.

- **Story 1.1:** Thiết lập Nền tảng Dự án & Monorepo
- **Story 1.2:** Đăng ký & Đăng nhập Cơ bản
- **Story 1.3:** Đăng nhập bằng Mạng xã hội
- **Story 1.4:** Quản lý Hồ sơ Người dùng
- **Story 1.5:** Tạo Hồ sơ Thú cưng
- **Story 1.6:** Xem Hồ sơ & Dòng thời gian của Thú cưng
- **Story 1.7:** Admin Tạo tài khoản Người bán & Blogger

### Epic 2: Lõi Thương mại Điện tử

**Mục tiêu Epic:** Triển khai toàn bộ các chức năng thương mại điện tử cốt lõi, cho phép người dùng xem, chọn, và thực hiện giao dịch mua bán chó con cũng như các sản phẩm liên quan.

- **Story 2.1:** Hiển thị Danh sách Chó và Sản phẩm
- **Story 2.2:** Trang Chi tiết Sản phẩm & Nút hành động
- **Story 2.3:** Chức năng Giỏ hàng
- **Story 2.4:** Quy trình Đặt chỗ Thú cưng
- **Story 2.5:** Quy trình Thanh toán (Checkout)
- **Story 2.6:** Tích hợp Thanh toán và Xác nhận Đơn hàng
- **Story 2.7:** Lịch sử và Quản lý Đơn hàng

### Epic 3: Trung tâm Nội dung & Cộng đồng

**Mục tiêu Epic:** Tạo ra một không gian sôi động để người dùng kết nối, chia sẻ và tìm kiếm thông tin hữu ích, bao gồm Blog, Hỏi & Đáp, và các cuộc thi.

- **Story 3.1:** Quản lý Bài viết và Danh mục Blog
- **Story 3.2:** Giao diện Đọc Blog
- **Story 3.3:** Tương tác với Blog (Bình luận & Đánh giá)
- **Story 3.4:** Chức năng Đặt Câu hỏi (Q&A)
- **Story 3.5:** Chức năng Trả lời Câu hỏi (Q&A)
- **Story 3.6:** Admin Quản lý Cuộc thi ảnh
- **Story 3.7:** Người dùng Tham gia Cuộc thi ảnh

### Epic 4: Tính năng Nâng cao & Thông báo

**Mục tiêu Epic:** Hoàn thiện và nâng cao trải nghiệm người dùng bằng cách cung cấp các công cụ mạnh mẽ để tìm kiếm, quản lý các mục quan tâm và cập nhật các hoạt động quan trọng.

- **Story 4.1:** Tìm kiếm và Lọc Nâng cao
- **Story 4.2:** Chức năng "Yêu thích" (Wishlist)
- **Story 4.3:** Xây dựng Hệ thống Thông báo (Backend)
- **Story 4.4:** Hiển thị Thông báo trên Giao diện (Frontend)
