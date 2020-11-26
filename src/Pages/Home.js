import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import { Card, Box, Typography } from "@material-ui/core";
function Home() {
  AOS.init();
  return (
    <div style={{ padding: "0.2rem" }}>
      <Navbar data-aos="fade-down" data-aos-delay="3000" />
      <section id="home">
        <div data-aos="fade-down" data-aos-delay="3500">
          <img
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1568621411902-83de9891519a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1255&q=80"
            alt="bk"
          />
        </div>
      </section>
      <section id="enough">
        <Box display="flex" justifyContent="center">
          <div data-aos="fade-up" data-aos-delay="1500">
            <Card
              style={{ marginTop: "20px", padding: "20px", width: "960px" }}
            >
              <img
                alt="rama"
                style={{
                  width: "25%",
                  height: "25%",
                  borderRadius: "20px",
                  boxShadow: "2px 2px 2px 2px rgba(255,219,47,1)",
                }}
                src="https://i.pinimg.com/originals/2d/ab/4e/2dab4ee7ba21b876acf135dd3bdf7bb1.jpg"
              />
              <Box display="flex" justifyContent="center">
                <Typography>
                  <p
                    style={{ fontFamily: "Kanit" }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช
                    บรมนาถบพิตร (5 ธันวาคม พ.ศ. 2470 – 13 ตุลาคม พ.ศ. 2559){" "}
                    <br></br>หรือ พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช
                    เป็นพระมหากษัตริย์ไทย รัชกาลที่ 9 แห่งราชวงศ์จักรี
                    ครองราชย์ตั้งแต่วันที่ 9 มิถุนายน พ.ศ. 2489
                    นับเป็นพระมหากษัตริย์ที่ทรงครองสิริราชสมบัติยาวนานที่สุดในประเทศไทยและเอเชียตะวันออกเฉียงใต้
                    พระองค์เสด็จพระราชสมภพเมื่อวันที่ 5 ธันวาคม พ.ศ. 2470
                    ที่โรงพยาบาลเมาต์ออเบิร์น เมืองเคมบริดจ์ รัฐแมสซาชูเซตส์
                    สหรัฐ เป็นพระราชโอรสในสมเด็จพระมหิตลาธิเบศร อดุลยเดชวิกรม
                    พระบรมราชชนก กับสมเด็จพระศรีนครินทราบรมราชชนนี
                    และเป็นพระราชนัดดาในพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว
                    กับสมเด็จพระศรีสวรินทิราบรมราชเทวี พระพันวัสสาอัยยิกาเจ้า
                  </p>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Typography>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="2000"
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                      borderRadius: "20px",

                      backgroundImage:
                        "linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,223,100,1) 100.2% )",
                    }}
                  >
                    ปรัชญาเศรษฐกิจพอเพียง (Suffciency Economy)
                  </h1>
                  <p
                    style={{ fontFamily: "Kanit" }}
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    เป็นปรัชญาที่พระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชมีพระราชดำรัสแก่ชาวไทยนับตั้งแต่
                    พ.ศ. 2517 เป็นต้นมา และถูกพูดถึงอย่างชัดเจนในวันที่ 4
                    ธันวาคม พ.ศ. 2540
                    เพื่อเป็นแนวทางการแก้ไขวิกฤตการณ์ทางการเงินในเอเชีย พ.ศ.
                    2540
                    ให้สามารถดำรงอยู่ได้อย่างมั่นคงและยั่งยืนในกระแสโลกาภิวัตน์และความเปลี่ยนแปลงต่าง
                    ๆ
                  </p>
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                <img
                  alt="Workplace"
                  src="https://res.cloudinary.com/image-chatbot/image/upload/v1606357982/RAMA_X/Ombre_Blue_Sky_Facebook_Post_onq1m3.png"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Card
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  style={{
                    margin: "50px",
                    width: "250px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,223,100,1) 100.2% )",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    ความรูู้
                  </h3>
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    ความรูู้ รอบคอบ ระมัดระวัง
                  </p>
                </Card>
                <Card
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  style={{
                    margin: "50px",
                    width: "250px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,223,100,1) 100.2% )",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    คุณธรรม
                  </h3>
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    ซื่อสัตย์สุจริต ขยันอดทน สติปัญญา แบ่งปัน
                  </p>
                </Card>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                <h1
                  style={{
                    fontFamily: "Kanit",
                    padding: "0.4rem",
                  }}
                >
                  {" "}
                  นำไปสู่
                </h1>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                <img
                  style={{ color: "yellow" }}
                  src="https://res.cloudinary.com/image-chatbot/image/upload/v1606359624/RAMA_X/down-arrow_hqr3bp.svg"
                  alt="arrow"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Card
                  data-aos="fade-down"
                  data-aos-delay="1000"
                  style={{
                    margin: "50px",
                    width: "250px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,223,100,1) 100.2% )",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    เศรษฐกิจ/สังคม/สิ่งแวดล้อม/วัฒธรรม
                  </p>
                </Card>
              </Box>
              <Box display="flex" justifyContent="center">
                <Card
                  data-aos="fade-down"
                  data-aos-delay="1000"
                  style={{
                    margin: "50px",
                    width: "250px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient( 109.6deg,  rgba(255,219,47,1) 11.2%, rgba(244,223,100,1) 100.2% )",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Kanit",
                      padding: "0.4rem",
                    }}
                  >
                    สมดุล/พร้อมการเปลี่ยนแปลง
                  </p>
                </Card>
              </Box>
            </Card>
          </div>
        </Box>
      </section>
      <section id="footer">
        <div style={{ background: "rgba(50,50,50,100%)", height: "150px" }}>
          <Typography>
            <h1
              style={{
                color: "white",
                fontFamily: "Kanit",
                padding: "0.4rem",
                fontSize: "20px",
              }}
            >
              ออกแบบและพัฒนาโดย นศท. พัทธนนันท์ นุ่มผ่อง
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "Kanit",
                padding: "0.4rem",
                fontSize: "20px",
              }}
            >
              สงวนสิขสิทธิ์ &copy; 2020
            </h1>
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default Home;
