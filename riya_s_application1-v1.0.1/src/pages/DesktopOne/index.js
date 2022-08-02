import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Stack,
  SelectBox,
  List,
  Button,
  CheckBox,
} from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Row className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <aside className="items-center w-[8%]">
          <Column className="">
            <Column className="bg-bluegray_900 items-center lg:p-[27px] xl:p-[31px] p-[35px] 3xl:p-[42px] w-[100%]">
              <Img
                src="images/img_ellipse1.png"
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mt-[2px] rounded-radius50 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="EllipseOne"
              />
              <Column className="items-center lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[48%]">
                <Img
                  src="images/img_plus.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="plus"
                />
                <Img
                  src="images/img_battery.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="battery"
                />
                <Img
                  src="images/img_frame.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Frame"
                />
                <Img
                  src="images/img_edit.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="edit"
                />
                <Img
                  src="images/img_settings.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="settings"
                />
                <Img
                  src="images/img_settings_white_A700.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="settings One"
                />
                <Img
                  src="images/img_dollar.png"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[313px] xl:mt-[358px] mt-[403px] 3xl:mt-[483px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="dollar"
                />
              </Column>
            </Column>
          </Column>
        </aside>
        <Column className="bg-bluegray_901 items-center p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[92%]">
          <Row className="justify-between lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[96%]">
            <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
              Account Overview
            </Text>
            <Stack className="lg:h-[42px] xl:h-[48px] h-[53px] 2xl:h-[54px] 3xl:h-[64px] w-[19%]">
              <Stack className="absolute lg:h-[42px] xl:h-[48px] h-[53px] 2xl:h-[54px] 3xl:h-[64px] w-[100%]">
                <SelectBox
                  className="absolute bg-transparent font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 top-[0] w-[100%]"
                  placeholderClassName="bg-transparent text-white_A700"
                  name="GroupOne"
                  placeholder="Elen John"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[12px] h-[6px] mr-[28px] right-[12%] absolute lg:w-[9px] lg:h-[5px] lg:mr-[21px] xl:w-[10px] xl:mr-[24px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[8px] 3xl:mr-[33px]"
                      alt="arrow_down"
                    />
                  }
                  shape="oundedBorder10"
                  size="sm"
                  variant="utlineWhiteA70033"
                ></SelectBox>
                <div className="absolute bg-white_A700_33 bottom-[0] lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] left-[8%] rounded-radius8 lg:w-[26px] xl:w-[30px] w-[34px] 3xl:w-[40px]"></div>
              </Stack>
              <Img
                src="images/img_unsplashif9tk5.png"
                className="absolute lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[8%] rounded-radius8 top-[15%] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                alt="unsplashIF9TKFive"
              />
            </Stack>
          </Row>
          <Row className="lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[97%]">
            <Column className="items-center lg:mb-[36px] xl:mb-[41px] mb-[47px] 3xl:mb-[56px] lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] w-[61%]">
              <List
                className="lg:gap-[14px] xl:gap-[16px] gap-[19px] 3xl:gap-[22px] grid grid-cols-2 min-h-[auto] w-[99%]"
                orientation="horizontal"
              >
                <Row className="bg-bluegray_900 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Button
                    className="flex lg:h-[53px] xl:h-[61px] h-[68px] 2xl:h-[69px] 3xl:h-[82px] items-center justify-center my-[4px] lg:w-[52px] xl:w-[60px] w-[68px] 3xl:w-[81px]"
                    shape="icbRoundedBorder10"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_dollar_white_A700.png"
                      className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="dollar One"
                    />
                  </Button>
                  <Column className="lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[47%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_a2 w-[auto]">
                      Useable Balance
                    </Text>
                    <Text className="font-semibold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      $19.432
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-bluegray_900 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Button
                    className="flex lg:h-[53px] xl:h-[61px] h-[68px] 2xl:h-[69px] 3xl:h-[82px] items-center justify-center my-[4px] lg:w-[52px] xl:w-[60px] w-[68px] 3xl:w-[81px]"
                    shape="icbRoundedBorder10"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_battery.png"
                      className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="battery One"
                    />
                  </Button>
                  <Column className="lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] w-[51%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_a2 w-[auto]">
                      Monthly Spending
                    </Text>
                    <Text className="font-semibold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                      $61.432
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="bg-bluegray_900 lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] p-[3px] rounded-radius15 shadow-bs2 w-[100%]">
                <Column className="lg:mb-[38px] xl:mb-[43px] mb-[49px] 3xl:mb-[58px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[12%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Analytics
                  </Text>
                  <Text className="font-medium lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $10000
                  </Text>
                  <Text className="font-medium ml-[2px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $8000
                  </Text>
                  <Text className="font-medium ml-[2px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $6000
                  </Text>
                  <Text className="font-medium ml-[2px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $4000
                  </Text>
                  <Text className="font-medium ml-[2px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $2000
                  </Text>
                  <Text className="font-medium ml-[2px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $1000
                  </Text>
                  <Text className="font-medium ml-[4px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $500
                  </Text>
                  <Text className="font-medium lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700_99 w-[auto]">
                    $0
                  </Text>
                </Column>
                <Stack className="lg:h-[337px] xl:h-[386px] h-[433px] 2xl:h-[434px] 3xl:h-[520px] ml-[2px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[82%]">
                  <Stack className="absolute font-poppins lg:h-[337px] xl:h-[386px] h-[433px] 2xl:h-[434px] 3xl:h-[520px] w-[100%]">
                    <Stack className="absolute lg:h-[337px] xl:h-[386px] h-[433px] 2xl:h-[434px] 3xl:h-[520px] w-[100%]">
                      <Column className="absolute w-[100%]">
                        <Stack className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] lg:ml-[360px] xl:ml-[412px] ml-[464px] 3xl:ml-[557px] w-[24%]">
                          <SelectBox
                            className="absolute bg-transparent font-semibold inset-[0] justify-center m-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_a2 w-[69%]"
                            placeholderClassName="bg-transparent text-white_A700_a2"
                            name="GroupSeventeen"
                            placeholder="Monthly"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown.png"
                                className="w-[12px] h-[6px] mr-[0] right-[0] absolute lg:w-[9px] lg:h-[5px] xl:w-[10px] 2xl:h-[7px] 3xl:w-[14px] 3xl:h-[8px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <div className="absolute border border-solid border-white_A700_4c lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] rounded-radius8 w-[100%]"></div>
                        </Stack>
                        <Img
                          src="images/img_line3.png"
                          className="lg:h-[283px] xl:h-[323px] h-[363px] 2xl:h-[364px] 3xl:h-[436px] lg:mr-[255px] xl:mr-[292px] mr-[329px] 3xl:mr-[395px] lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[46%]"
                          alt="LineThree"
                        />
                      </Column>
                      <Img
                        src="images/img_line4.png"
                        className="absolute lg:h-[284px] xl:h-[325px] h-[365px] 2xl:h-[366px] 3xl:h-[439px] right-[4%] top-[3%] w-[57%]"
                        alt="LineFour"
                      />
                    </Stack>
                    <Column className="absolute bg-gray_900 font-roboto items-center justify-end left-[35%] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius8 top-[18%] w-[12%]">
                      <Text className="font-bold mt-[1px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                        8000
                      </Text>
                    </Column>
                  </Stack>
                  <Text className="absolute font-normal font-roboto left-[37%] not-italic lg:text-[112px] xl:text-[128px] text-[144px] 3xl:text-[172px] text-blue_400 text-shadow-ts top-[0] w-[auto]">
                    .
                  </Text>
                </Stack>
              </Row>
            </Column>
            <Column className="items-end mt-[1px] w-[39%]">
              <Column className="bg-bluegray_900 items-center lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs2 w-[100%]">
                <Stack className="lg:h-[332px] xl:h-[379px] h-[426px] 2xl:h-[427px] 3xl:h-[512px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[97%]">
                  <Stack className="absolute bottom-[0] lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] left-[16%] w-[63%]">
                    <Stack className="absolute lg:h-[225px] xl:h-[258px] h-[289px] 2xl:h-[290px] 3xl:h-[348px] top-[0] lg:w-[224px] xl:w-[257px] w-[289px] 3xl:w-[347px]">
                      <Img
                        src="images/img_ellipse2.png"
                        className="absolute lg:h-[223px] xl:h-[255px] h-[286px] 2xl:h-[287px] 3xl:h-[344px] inset-[0] justify-center m-[auto] w-[97%]"
                        alt="EllipseTwo"
                      />
                      <div className="absolute border-bw30 border-solid border-teal_300 lg:h-[218px] xl:h-[250px] h-[280px] 2xl:h-[281px] 3xl:h-[337px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[217px] xl:w-[249px] w-[280px] 3xl:w-[336px]"></div>
                    </Stack>
                    <div className="absolute border-blue_400 border-bw23 border-solid lg:h-[218px] xl:h-[250px] h-[280px] 2xl:h-[281px] 3xl:h-[337px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[217px] xl:w-[249px] w-[280px] 3xl:w-[336px]"></div>
                  </Stack>
                  <Row className="absolute top-[0] w-[100%]">
                    <Text className="font-bold lg:mb-[231px] xl:mb-[265px] mb-[298px] 3xl:mb-[357px] mt-[2px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                      Analytics
                    </Text>
                    <Stack className="lg:h-[61px] xl:h-[70px] h-[78px] 2xl:h-[79px] 3xl:h-[94px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[193px] xl:mt-[221px] mt-[249px] 3xl:mt-[298px] w-[20%]">
                      <Text className="absolute font-bold right-[0] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-white_A700 top-[0] w-[auto]">
                        60%
                      </Text>
                      <Text className="absolute bottom-[0] font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700_75 w-[auto]">
                        Overall
                      </Text>
                    </Stack>
                    <Img
                      src="images/img_menu.png"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:mb-[229px] xl:mb-[262px] mb-[295px] 3xl:mb-[354px] lg:ml-[126px] xl:ml-[145px] ml-[163px] 3xl:ml-[195px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                      alt="menu"
                    />
                  </Row>
                </Stack>
                <Row className="items-center justify-center 3xl:mb-[104px] lg:mb-[67px] xl:mb-[77px] mb-[87px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[58%]">
                  <div className="bg-blue_400 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius5 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                  <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Savings
                  </Text>
                  <div className="bg-teal_300 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] rounded-radius5 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                  <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Expense
                  </Text>
                </Row>
              </Column>
              <Button
                className="3xl:mt-[16px] flex items-center justify-center lg:mt-[10px] mt-[14px] text-center w-[24%] xl:mt-[12px]"
                leftIcon={
                  <Img
                    src="images/img_plus_white_A700.png"
                    className="w-[24px] h-[24px] mr-[8px] text-center lg:w-[18px] lg:h-[19px] lg:mr-[6px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px]"
                    alt="plus"
                  />
                }
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineBlack9003f"
              >
                <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px]">
                  Add New
                </div>
              </Button>
            </Column>
          </Row>
          <Row className="bg-bluegray_900 items-center justify-between lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[97%]">
            <CheckBox
              className="font-semibold mb-[1px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:pl-[32px] xl:pl-[37px] pl-[42px] 3xl:pl-[50px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="NameSurname"
              label="Name & Surname"
            ></CheckBox>
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Work Place
            </Text>
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Amount
            </Text>
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Date
            </Text>
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Receipt Invoice
            </Text>
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Note
            </Text>
            <Text className="font-semibold lg:mr-[39px] xl:mr-[45px] mr-[51px] 3xl:mr-[61px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700_99 w-[auto]">
              Action
            </Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[97%]"
            orientation="vertical"
          >
            <Row className="bg-bluegray_900 items-center my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
              <div className="border border-blue_400 border-solid lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] rounded-radius5 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"></div>
              <Img
                src="images/img_unsplashuq6fc8.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] my-[1px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="unsplashuQ6fcEight"
              />
              <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Joe Derry
              </Text>
              <Stack className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] w-[8%]">
                <Text className="absolute bottom-[10%] font-semibold inset-x-[0] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_400 w-[max-content]">
                  Amazon
                </Text>
                <div className="absolute bg-blue_400_63 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius10 w-[100%]"></div>
              </Stack>
              <Text className="font-semibold 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                $28.74
              </Text>
              <Text className="font-semibold lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                04-12-2021
              </Text>
              <Img
                src="images/img_folder.png"
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] ml-[99px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="folder"
              />
              <Text className="font-semibold 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Pay Bill
              </Text>
              <Button
                className="flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                variant="icbFillLightblueA20019"
              >
                <Img
                  src="images/img_edit_blue_400.png"
                  className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="edit One"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                variant="icbFillBluegray800"
              >
                <Img
                  src="images/img_delete.png"
                  className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="delete"
                />
              </Button>
            </Row>
            <Row className="bg-bluegray_900 items-center my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
              <div className="border border-blue_400 border-solid lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] rounded-radius5 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"></div>
              <Img
                src="images/img_unsplashpgwch.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] my-[1px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                alt="unsplashpgWCH"
              />
              <Text className="font-semibold lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Havel Ken
              </Text>
              <Stack className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] w-[8%]">
                <Text className="absolute bottom-[10%] font-semibold inset-x-[0] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_400 w-[max-content]">
                  Amazon
                </Text>
                <div className="absolute bg-blue_400_63 lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius10 w-[100%]"></div>
              </Stack>
              <Text className="font-semibold 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                $30.00
              </Text>
              <Text className="font-semibold lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                04-12-2021
              </Text>
              <Img
                src="images/img_folder.png"
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] ml-[99px] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="folder One"
              />
              <Text className="font-semibold 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                Pay Bill
              </Text>
              <Button
                className="flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                variant="icbFillLightblueA20019"
              >
                <Img
                  src="images/img_edit_blue_400.png"
                  className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="edit Two"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                variant="icbFillBluegray800"
              >
                <Img
                  src="images/img_delete.png"
                  className="h-[24px] flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="delete One"
                />
              </Button>
            </Row>
          </List>
        </Column>
      </Row>
    </>
  );
};

export default DesktopOnePage;
