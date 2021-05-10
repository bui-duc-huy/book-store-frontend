import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
    return (
        <Fragment>
            <div className="blog-details-top">
                <div className="blog-details-img">
                    <img
                        alt=""
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/img/blog/blog-5.jpeg"
                        }
                    />
                </div>
                <div className="blog-details-content">
                    <div className="blog-meta-2">
                        <ul>
                            <li>22 April, 2021</li>
                            <li>
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        "/blog-details-standard"
                                    }
                                >
                                    4 <i className="fa fa-comments-o" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h3>Phạm Xuân Ẩn – Tên người như cuộc đời</h3>
                    <p>
                        Cuốn ký sự nhân vật của nhà văn, nhà báo Nguyễn Thị Ngọc
                        Hải đặt góc nhìn sâu vào tính cách nhân bản của Tướng
                        tình báo Phạm Xuân Ẩn, tìm ra một phần nguyên do cho câu
                        hỏi: Nhờ đâu mà một con người lại can trường một cách
                        phi thường đến thế – có thể sống hơn 20 năm trong lòng
                        địch mà vừa có thể trở thành một phóng viên xuất sắc của
                        hãng Reuters và sau đó là tuần báo Time, vừa không bị
                        bại lộ thân phận điệp viên Hà Nội, vừa cung cấp nhiều
                        tin tình báo tối quan trọng cho cách mạng, lại vừa giữ
                        vững vẹn nguyên lòng trung thành với Đảng Cộng Sản Việt
                        Nam, với cụ Hồ.{" "}
                    </p>
                    <blockquote>
                        Morley Safer, phóng viên đài truyền hình CBS từ Mỹ, bạn
                        làm báo cũ của Tướng Ẩn đã hỏi ông về những ngày đầu mới
                        giải phóng: “Ẩn ở trong trại… không phải trại cải tạo
                        nhưng là một trại đặc biệt gần Hà Nội dành cho các “đồng
                        chí” có thể đã bị nhiễm độc vì quá gần gũi với người Mỹ.
                        Ông có phút giây nào hối tiếc không?” Tướng Ẩn trả lời:
                        “Không, không hối tiếc. Tôi phải làm như vậy. Hòa bình
                        mà chúng tôi giành được có thể phải trả giá bằng sự khốn
                        khổ của xứ sở này nhưng chiến tranh cũng đã giết chết
                        bao nhiêu sinh linh. Cho dù tôi yêu nước Mỹ đến như thế
                        nào, Mỹ không thể có quyền gì ở đây. Bằng cách này hay
                        cách khác người Mỹ cũng bị đẩy ra khỏi Việt Nam. Chúng
                        tôi phải tự chọn cách xây dựng xứ sở mình.”
                    </blockquote>
                    <p>
                        Người Việt trầm lặng. Nguyễn Khải, một nhà văn lớn của
                        Việt Nam đã hết sức ngạc nhiên thấy Phạm Xuân Ẩn mặc
                        quân phục cấp Tá trong Đại hội Đảng lần thứ Tư
                        (12/1976), vì trước đó, nhà văn cứ tưởng ông chỉ là một
                        viên sĩ quan ngụy bị “kẹt lại” không di tản kịp. Tướng
                        Ẩn đã sống cả một cuộc đời hết sức thầm lặng, khiêm
                        nhường và bình dị. Bởi vậy mà hơn 20 năm sau ngày lịch
                        sử 30/04/1975, đất nước thống nhất, nhân dân vẫn chưa
                        được biết nhiều đến vị Thiếu Tướng trầm lặng ấy. Ông
                        không viết hồi ký, cũng không quá muốn người khác viết
                        sách về mình. Dẫu vậy vẫn có nhiều nhà văn, nhà báo, nhà
                        sử học trong và ngoài nước đã tìm cách gặp gỡ, phỏng
                        vấn, thu thập, kiểm chứng, xác minh các thông tin về vị
                        tướng tình báo tài ba này. Nhà văn Ngọc Hải kể, phải sau
                        nhiều lần thuyết phục Tướng Ẩn mới đồng ý cho phép viết
                        về cuộc đời ông. Nhưng ông không kể về những chiến công
                        hay huân chương, mà chỉ là những cuộc chuyện trò về
                        những kỷ niệm, từ một cậu bé ham chơi đến một thiếu niên
                        hăng hái theo cách mạng từ năm 1945, muốn đi bộ đội
                        nhưng bị trả về vì… thiếu súng, gặp bước ngoặt khi được
                        giao nhiệm vụ tình báo chiến lược, qua Mỹ học báo chí 2
                        năm, về nước vừa làm phóng viên cho Việt Tấn Xã,
                        Reuters, Time… vừa làm tình báo cho cách mạng.
                    </p>
                </div>
            </div>
            <div className="dec-img-wrapper">
                <div className="row">
                    <div className="col-md-6">
                        <div className="dec-img mb-50">
                            <img
                                alt=""
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/blog/1.jpeg"
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dec-img mb-50">
                            <img
                                alt=""
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/blog/2.jpeg"
                                }
                            />
                        </div>
                    </div>
                </div>
                <p>
                    Phải mất hơn 10 năm, bản thảo dài 20 chương mới được hoàn
                    thành sau những khó khăn trong việc tiếp xúc với các loại
                    tài liệu tình báo có liên quan. Chính Tướng Ẩn đã đọc rồi
                    chỉnh sửa địa danh, tên tuổi, lỗi chính tả, nhưng giữ nguyên
                    văn phong người chấp bút. Tác phẩm “Phạm Xuân Ẩn – Tên người
                    như cuộc đời” xuất bản năm 2002, đoạt Giải A trong cuộc thi
                    sáng tác tiểu thuyết, truyện và ký về đề tài “Vì an ninh Tổ
                    quốc và bình yên cuộc sống” và Giải A do Bộ Quốc phòng trao
                    tặng cùng năm.
                </p>
            </div>
            <div className="tag-share">
                <div className="dec-tag">
                    <ul>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                lifestyle ,
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                interior ,
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                                outdoor
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="blog-share">
                    <span>share :</span>
                    <div className="share-social">
                        <ul>
                            <li>
                                <a className="facebook" href="//facebook.com">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="//twitter.com">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a className="instagram" href="//instagram.com">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="next-previous-post">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    {" "}
                    <i className="fa fa-angle-left" /> prev post
                </Link>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    next post <i className="fa fa-angle-right" />
                </Link>
            </div>
        </Fragment>
    );
};

export default BlogPost;
