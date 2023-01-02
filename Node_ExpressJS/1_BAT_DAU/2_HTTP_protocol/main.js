/*
    Http là cách thức mà chúng ta tryền tải một trang website

    HTTP (Tiếng Anh: HyperText Transfer Protocol - Giao thức truyền tải siêu văn bản)

    GET

GET được sử dụng để lấy lại thông tin từ Server đã cung cấp bởi sử dụng một URI đã cung cấp.
 Các yêu cầu sử dụng GET chỉ nhận dữ liệu và không có ảnh hưởng gì tới dữ liệu.

HEAD

Tương tự như GET, nhưng nó truyền tải dòng trạng thái và khu vực Header.

POST

Một yêu cầu POST được sử dụng để gửi dữ liệu tới Server, ví dụ, thông tin khách hàng,
 file tải lên, …, bởi sử dụng các mẫu HTML.

PUT

Thay đổi tất cả các đại diện hiện tại của nguồn mục tiêu với nội dung được tải lên.

DELETE

Gỡ bỏ tất cả các đại diện hiện tại của nguồn mục tiêu bởi URI.

CONNECT

Thiết lập một tunnel tới Server được xác định bởi URI đã cung cấp.

OPTIONS

Miêu tả các chức năng giao tiếp cho nguồn mục tiêu.

TRACE

Trình bày một vòng lặp kiểm tra thông báo song song với path tới nguồn mục tiêu.

1xx: Thông tin
Nó nghĩa là yêu cầu đã được nhận và tiến trình đang tiếp tục.

   100 (Continue)
Máy chủ trả về mã này để chỉ ra rằng nó đã nhận được một phần đầu tiên
 của một yêu cầu và được chờ đợi cho phần còn lại.

101 (Switching protocols)
Bên yêu cầu đã yêu cầu các máy chủ để chuyển đổi và máy chủ được thừa nhận rằng nó sẽ làm như vậy

2xx: Thành công
Nó nghĩa là hoạt động đã được nhận, được hiểu, và được chấp nhận một cách thành công.

200 (Successful)
Các máy chủ xử lý yêu cầu thành công

201 (Created)
Yêu cầu đã thành công và các máy chủ tạo ra một nguồn tài nguyên mới.

202 (Accepted)
Máy chủ đã chấp nhận yêu cầu, nhưng vẫn chưa xử lý nó

203 (Non-authoritative information)
Máy chủ xử lý yêu cầu thành công, nhưng đang quay trở lại các thông tin mà có thể là từ một nguồn khác.

204 (No content)
Các máy chủ xử lý yêu cầu thành công, nhưng không trả lại bất kỳ nội dung nào

205 (Reset content)
Các máy chủ proccessed yêu cầu thành công, nhưng không trả lại bất kỳ nội dung.
 Không giống như một phản ứng 204, phản ứng này đòi hỏi người yêu cầu thiết lập lại xem tài liệu

206 (Partial content)
Các máy chủ xử lý thành công một phần của một yêu cầu

3xx: Sự điều hướng lại
Nó nghĩa là hoạt động phải được thực hiện để hoàn thành yêu cầu.

301 (Moved permanently)
Các trang web yêu cầu đã bị di chuyển vĩnh viễn tới URL mới

302 (Moved temporarily)
Trang được yêu cầu đã di chuyển tạm thời tới một URL mới

304 (Not modified)
Các trang yêu cầu đã không được sửa đổi kể từ khi yêu cầu cuối cùng. Khi máy chủ trả về phản hồi này
, nó không trả lại các nội dung của trang.

4xx: Lỗi Client
Nó nghĩa là yêu cầu chứa cú pháp không chính xác hoặc không được thực hiện

400 (Bad request)
Các máy chủ không hiểu được yêu cầu.

401 (Not authorized)
Đề nghị yêu cầu xác thực. Máy chủ có thể trả về phản hồi này yêu cầu xác thực
 đăng nhập tài khoản và mật khẩu (thông thường máy chủ trả về phản hồi này nếu 
    client gửi request một trang đăng nhập)

403 (Forbidden)
Máy chủ từ chối yêu cầu.(thông thường nếu đăng nhập không thành công máy chủ sẽ trả về mã lỗi này)

404 (Not found)
Máy chủ không thể tìm thấy trang yêu cầu. Ví dụ, máy chủ thường trả về mã này nếu có
 1 yêu cầu tới một trang không tồn tại trên máy chủ.

405 (Method not allowed)
Phương thức được xác định trong yêu cầu là không được cho phép.

406 (Not acceptable)
Server chỉ có thể tạo một phản hồi mà không được chấp nhận bởi Client.

407 (Proxy authentication required)
Yêu cầu client phải xác thực sử dụng một proxy. Khi máy chủ trả về phản hồi này,
 nó cũng chỉ ra proxy mà người yêu cầu phải sử dụng.

408 (Request timeout)
Request tốn thời gian dài hơn thời gian Server phản hồi

409 (Conflict)
Các máy chủ gặp phải một cuộc xung đột thực hiện yêu cầu. Các máy chủ
 phải bao gồm thông tin về các cuộc xung đột trong các phản ứng.
  Máy chủ có thể trả về mã này để đáp ứng với yêu cầu PUT xung đột với yêu cầu trước đó,
   cùng với một danh sách các sự khác biệt giữa các yêu cầu.

410 (Gone)
Các máy chủ trả về phản hồi này khi các nguồn tài nguyên yêu cầu đã bị loại bỏ vĩnh viễn.
 Nó tương tự như một 404 (Không tìm thấy) mã,
  nhưng đôi khi được sử dụng ở vị trí của một 404 
  cho nguồn lực được sử dụng để tồn tại nhưng không còn làm. Nếu tài nguyên đã di chuyển vĩnh viễn,
   bạn nên sử dụng một 301 để xác định vị trí mới của tài nguyên.

411 (Length required)
Content-Length không được xác định rõ. Server sẽ không chấp nhận yêu cầu mà không có nó

412 (Precondition failed)
Các máy chủ không đáp ứng một trong các điều kiện tiên quyết mà người yêu cầu đưa vào yêu cầu.

413 (Request entity too large)
Máy chủ không thể xử lý yêu cầu bởi vì nó là quá lớn đối với các máy chủ để xử lý.

414 (Requested URI is too long)
URI yêu cầu (thường là một URL) là quá dài đối với máy chủ để xử lý.

416 (Requested range not satisfiable)
Máy chủ trả về mã trạng thái này nếu yêu cầu cho một phạm vi không có sẵn cho trang.

417 (Expectation failed)
Máy chủ không thể đáp ứng yêu cầu của các trường yêu cầu, tiêu đề mong đợi.

5xx: Lỗi Server
Nó nghĩa là Server thất bại với việc thực hiện một yêu cầu nhìn như có vẻ khả thi.

500 (Internal server error)
Các máy chủ gặp lỗi và không thể thực hiện yêu cầu.

501 (Not implemented)
Các máy chủ không có các chức năng để thực hiện yêu cầu. Ví dụ,
 máy chủ có thể trả về mã này khi nó không nhận ra phương thức yêu cầu.

502 (Bad gateway)
Các máy chủ đã hoạt động như một gateway hoặc proxy và nhận được
 một phản ứng không hợp lệ từ máy chủ ngược.

503 (Service unavailable)
Máy chủ hiện không có sẵn (vì nó bị quá tải hoặc xuống để bảo trì).
 Nói chung, đây là một trạng thái tạm thời.

504 (Gateway timeout)
Các máy chủ đã hoạt động như một gateway hoặc proxy
 và đã không nhận được yêu cầu kịp thời từ máy chủ ngược.

505 (HTTP version not supported)
Các máy chủ không hỗ trợ phiên bản giao thức HTTP được sử dụng trong yêu cầu.

Sau đây là danh sách tất cả các mã trạng thái HTTP
 được liệt kê theo tài liệu giao thức HTTP của trang w3c
*/

