import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bg-primary">
      <div className="max-w-[768px] mx-auto pt-[15px] ">
        {/* top area save,share and back */}
        <div className="msm:grid flex  justify-between items-center grid-cols-12 px-[15px]">
          <div className="w-full col-span-9 flex flex-row justify-start items-center ">
            <Image src="/icon/right.svg" width={24} height={24} alt="back" />
            <p className="text-base12 text-txt-primary">Home</p>
          </div>
          <div className="flex col-span-3 w-full justify-between items-center">
            <div className="flex justify-start items-center flex-row text-base12 gap-x-[8px]">
              <p className="underline text-base12 text-txt-primary">Save</p>
              <Image
                src="/icon/Vector (1).svg"
                width={24}
                height={21}
                alt="save"
              />
            </div>
            <div className="flex justify-start items-center flex-row text-base12 gap-x-[8px]">
              <p className="underline text-base12 text-txt-primary">Share</p>
              <Image
                src="/icon/fi-rr-share.svg"
                width={24}
                height={24}
                alt="share"
              />
            </div>
          </div>
        </div>
        {/* higheliter */}
        <div className="bg-[#FEE29A] p-2 mt-[14px]">
          <p className="text-txt-primary text-base12 text-center msm:text-start px-[12px]">
            Up to 60% Less for Bundle, compared to regular price!
          </p>
        </div>
        {/* hotel area */}
        <div className="px-[15px] mt-[10px]">
          <div className="w-[343] h-[178px] block md:hidden relative">
            <Image
              src="/icon/Frame 950.svg"
              className="img-fluid object-cover w-full"
              fill
              alt="hotel image"
            />
          </div>

          <div className="hidden md:flex justify-between items-center w-full gap-[16px]">
            <div className="w-[370px] h-[315px] relative">
              <Image
                src="/icon/Frame 45.svg"
                className="img-fluid object-cover w-full rounded-[8px]"
                fill
                alt="hotel image"
              />
            </div>
            <div className="grid grid-cols-2 w-[370px] h-[315px] gap-[16px]">
              <div className="w-[167px] h-[149px] relative">
                <Image
                  src="/icon/home.svg"
                  className="img-fluid object-cover w-full"
                  fill
                  alt="hotel image"
                />
              </div>
              <div className="w-[167px] h-[149px] relative">
                <Image
                  src="/icon/home.svg"
                  className="img-fluid object-cover w-full"
                  fill
                  alt="hotel image"
                />
              </div>
              <div className="w-[167px] h-[149px] relative">
                <Image
                  src="/icon/home.svg"
                  className="img-fluid object-cover w-full"
                  fill
                  alt="hotel image"
                />
              </div>
              <div className="w-[167px] h-[149px] relative">
                <Image
                  src="/icon/home.svg"
                  className="img-fluid object-cover w-full"
                  fill
                  alt="hotel image"
                />
              </div>
            </div>
          </div>

          {/* hotel details */}
          <div className="mt-[25px]">
            <div className="flex justify-between items-start">
              <div className="div">
                <h2 className="text-base24 text-txt-primary">
                  Hotel Name Name
                </h2>
                <p className="text-base12 flex justify-start items-center gap-x-1">
                  <Image
                    src="/icon/Group 638.svg"
                    width={8}
                    height={8}
                    alt="location"
                  />
                  <span className="text-base12">Sajek, Bangladesh</span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <Image
                  src="/icon/Vector.svg"
                  width={14}
                  height={14}
                  alt="rating"
                />
                <p className="text-base12">4.5</p>
              </div>
            </div>
          </div>
          {/* hotel description */}
          <div className="h-[1px] w-[343px] bg-[#CAC5B7] mt-[16px]"></div>
          <div className="mt-[16px]">
            <div className="flex flex-row gap-x-[12px]">
              <Image
                src="/icon/fi-rr-home-location.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-base16 font-normal text-txt-primary">
                  Great Location
                </p>
                <p className="text-base12 text-txt-primary">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-[12px] mt-[16px]">
              <Image
                src="/icon/fi-rr-following.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-base16 font-normal text-txt-primary">
                  The Great Owner
                </p>
                <p className="text-base12 text-txt-primary">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-x-[12px] mt-[16px]">
              <Image
                src="/icon/fi-rr-key.svg"
                width={24}
                height={24}
                alt="great location image"
              />
              <div className="flex flex-col ">
                <p className="text-base16 font-normal text-txt-primary">
                  Flexible Check In Options
                </p>
                <p className="text-base12 text-txt-primary">
                  For this money, but you need to take care of the text
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[343px] bg-[#CAC5B7] mt-[16px]"></div>
          {/* place buddge */}
          {/* {expandDetails && <h2>Geloo</h2>} */}
          <div className="mt-[24px]">
            <h2 className="text-base24 leading-[33px] text-txt-primary">
              Best Place to Stay in Sajek within the Budget
            </h2>
            <p className="text-base16 mt-[16px] text-txt-primary">
              Lorem Ipsum is simply dummied text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>

            <div className="h-[1px] block md:hidden w-[343px] mx-auto bg-[#CAC5B7] mt-[24px]"></div>
            {/* packege details */}
            <div className="mt-[24px]">
              <h2 className="text-base24 leading-[33px] text-txt-primary">
                Package Details:
              </h2>

              <div className="mt-[16px] text-[#2A220E]">
                <p className="text-base16 flex leading-[24px] justify-start items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-bg-blk rounded-full"></div>2 Days
                  and 1 Night
                </p>
                <p className="text-base16 leading-[24px] flex justify-start items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-bg-blk rounded-full"></div>
                  Stay at Eco Resort on top of Sajek
                </p>
                <p className="text-base16 leading-[24px] flex justify-start items-center  gap-x-[6px]">
                  <div className="w-2 h-2 bg-bg-blk rounded-full"></div>
                  Alutila Cave, Hazachora & Risang Waterfall expedition
                </p>
                <p className="text-base16 leading-[24px] flex justify-start items-center gap-x-[6px]">
                  <div className="w-2 h-2 bg-bg-blk rounded-full"></div>
                  Enjoy Chander Gari ride on hilly roads
                </p>
              </div>
            </div>

            <div className="h-[1px] w-[343px] bg-[#CAC5B7] mt-[24px]"></div>

            {/* Top Amenities */}
            <div className="mt-[25px]">
              <h2 className="text-base24 text-txt-primary leading-[33px]">
                Top Amenities:
              </h2>

              <div className="mt-[25px]">
                <div className="flex justify-start gap-x-[20px] items-center">
                  <div className="flex justify-start items-center gap-x-[4px] text-base16 leading-[22px]">
                    <Image
                      src="/icon/car.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Parking</p>
                  </div>
                  <div className="flex justify-start items-center gap-x-[4px] text-base16 leading-[22px]">
                    <Image
                      src="/icon/statue.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Wellness</p>
                  </div>

                  <div className="flex justify-start items-center gap-x-[4px] text-base16 leading-[22px]">
                    <Image
                      src="/icon/Frame 500.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Transport</p>
                  </div>
                </div>
                <div className="flex justify-start gap-x-[20px] items-center mt-[18px]">
                  <div className="flex justify-start items-center gap-x-[4px] text-base16 leading-[22px]">
                    <Image
                      src="/icon/Frame 500.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Transport</p>
                  </div>
                  <div className="flex justify-start items-center gap-x-[4px] text-base16 leading-[22px]">
                    <Image
                      src="/icon/Frame 508.svg"
                      width={22}
                      height={23}
                      alt="great location image"
                    />
                    <p className="">Swimming pool</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-1 mt-[12px]">
              <p className="text-base16 text-txt-primary underline">Hide</p>
              <Image
                src="/icon/fi-rr-angle-small-right.svg"
                width={25}
                height={25}
                alt="great location image"
              />
            </div>
            {/* category list */}
            <div className="mt-[40px]">
              <h2 className="text-base24 ">Categories List</h2>

              <div className="grid md:hidden grid-cols-12 justify-center items-center h-[53px] mt-[12px] gap-x-[15px]">
                <div className="col-span-8 w-full h-full">
                  <div className=" rounded-full flex justify-center items-center shadow-2xl  py-[7px]">
                    <div className="flex justify-between items-center gap-x-[20px]">
                      <div className="div">
                        <p className="text-[#868686] text-base12">Check In:</p>
                        <p className="text-base16 text-[#2A220E] font-medium">
                          5 Oct, 21
                        </p>
                      </div>
                      <div className="h-[16px] w-[1px] bg-[#868686]"></div>
                      <div className="div">
                        <p className="text-[#868686] text-base12">Check In:</p>
                        <p className="text-base16 text-[#2A220E] font-medium">
                          5 Oct, 21
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 w-full h-full">
                  <div className=" rounded-full flex justify-center items-center py-[7px] shadow-2xl">
                    <div className="flex justify-between items-center">
                      <div className="div">
                        <p className="text-[#868686] text-base12">Guests:</p>
                        <div className="flex justify-center items-end gap-x-1 mt-[3px] mb-[2px]">
                          <Image
                            src="/icon/Frame 941.svg"
                            width={23}
                            height={16}
                            alt="great location image"
                          />
                          <p className="text-base12">3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl hidden md:grid grid-cols-12 justify-between  items-center h-[50px] mt-[17px] rounded-full pl-[10px] pr-[4px]">
                <div className="flex w-full col-span-5 justify-start items-center gap-x-[10px]">
                  <Image
                    src="/icon/el_star-alt.svg"
                    width={30}
                    height={30}
                    alt="great location image"
                  />
                  <p>Best Hotel, Jakarta</p>
                </div>
                <div className="w-full col-span-7 flex justify-between items-center">
                  <div className="flex justify-start items-center gap-x-[21px]">
                    <div className="w-[1px] h-[24px] bg-txt-primary"></div>
                    <p className="text-btn-primary">5 Oct, 21 - 13 Oct, 21</p>
                    <div className="w-[1px] h-[24px] bg-txt-primary"></div>
                  </div>
                  <div className="flex justify-start  items-center">
                    <p className="text-btn-primary">2 Kids, 3 Adults</p>

                    <div className="w-[50px] h-[42px] relative">
                      <Image
                        src="/icon/Search.svg"
                        className="img-fluid w-full object-cover"
                        fill
                        alt="great location image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* economy family */}

        <div className="px-[16px] mt-[24px]">
          <div className="shadow-2xl rounded-[16px] py-[13px] ">
            <div className="pl-[6px] md:pl-[16px]">
              <div className="flex justify-between items-start ">
                <div className="div">
                  <h1 className="text-base16 font-normal text-txt-primary">
                    Economy Family
                  </h1>
                  <div className="flex justify-start items-center gap-x-[2px]">
                    <Image
                      src="/icon/Frame 941.svg"
                      width={11}
                      height={8}
                      alt="great location image"
                    />
                    <p className="text-base12">Suitable for 5</p>
                  </div>
                </div>
                <div className="div">
                  <div className="bg-[#D82E3F] text-center py-[4px] px-[6px] rounded-sm">
                    <p className="text-[8px] text-bg-primary ">
                      -24% Off 24 Jan - 18 Feb
                    </p>
                  </div>
                </div>
              </div>

              {/* image area */}
              <div className="block md:flex justify-between items-center">
                <div className=" ">
                  <div className="flex w-[337px] justify-between items-start gap-[4px] md:gap-[8px] mt-[15px] h-[114px] md:h-[149px] md:w-[362px]">
                    <div className="w-[160px] h-[114px] md:w-[206px] md:h-[149px] relative">
                      <Image
                        className="img-fluid object-cover rounded-[4px]"
                        src="/icon/Rectangle 40.svg"
                        fill
                        alt="great location image"
                      />
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-2 justify-center items-center  w-[177px] h-[114px] md:w-[156px] md:h-[149px] gap-[4px] md:gap-[8px]">
                      <div className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                      <div className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                      <div className="ww-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                      <div className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                      <div className="block md:hidden w-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                      <div className="block md:hidden w-[55px] h-[55px] md:w-[70px] md:h-[70px] relative">
                        <Image
                          className="img-fluid object-cover rounded-[4px]"
                          src="/icon/Rectangle 40.svg"
                          fill
                          alt="great location image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <div className="hidden md:block">
                    <div className="mt-[19px] ">
                      <div className=" flex flex-col justify-center items-center text-base12 mx-auto">
                        <p>Price per Person:</p>
                        <p className="">
                          <span className="font-medium ">10077 BDT</span>{" "}
                          <span
                            className="text-small10 text-txt-hint
                      "
                          >
                            <del>107290 </del> BDT
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex relative justify-center items-center  rounded-[7px] h-[45px] mt-[12px] mx-2">
                      <div className="absolute left-0 border text-[#CAC5B7] border-[#CAC5B7] rounded-[8px] w-[45px] h-full justify-center items-center flex">
                        -
                      </div>
                      <div className="w-full h-full relative">
                        <div className="w-[90%] mx-auto h-[1px] absolute left-3 top-0 bg-[#CAC5B7]"></div>
                        <div className="flex justify-center items-center flex-col mt-3">
                          <p className="text-base16 font-normal leading-6">
                            Add Rome
                          </p>
                          <p className="text-base12 text-txt-hint">
                            (0 Selected)
                          </p>
                        </div>
                        <div className="w-[90%] mx-auto h-[1px] left-3 absolute bottom-0 bg-[#CAC5B7]"></div>
                      </div>
                      <div className="absolute text-[#CAC5B7] cursor-pointer right-0   hover:bg-[#4E90A8] border border-[#CAC5B7] text-black hover:text-bg-white  rounded-[8px] w-[45px] h-full justify-center items-center flex">
                        +
                      </div>
                    </div>
                  </div>
                </div>
                {/* image details */}
                <div className="px-[13px]">
                  <div className="grid grid-cols-2 justify-start items-center mt-[21px] gap-x-[8px] gap-y-[11px] ">
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/Frame.svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">Room</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/Frame (1).svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">
                        Landmark view
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/Frame (2).svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">
                        Air conditioning
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/Frame (3).svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">
                        AEnsuite bathroom
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/trv.svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">
                        Flat-screen TV
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/coffe.svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">
                        Coffee machine
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/wifi.svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">Free WiFi</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-[3px]">
                      <Image
                        src="/icon/m2.svg"
                        width={16}
                        height={14}
                        alt="share"
                      />
                      <p className="text-base12 text-txt-primary">31 m²</p>
                    </div>
                  </div>
                  <div className="underline flex justify-center text-base12 text-txt-hint mx-auto mt-[18px]">
                    + 15 more
                  </div>

                  <div className="flex flex-wrap justify-start items-center gap-y-[8px] gap-x-[11px] mt-[21px]">
                    <p
                      className="flex justify-start gap-x-[4px] items-center text-base12
                                "
                    >
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Linen
                    </p>

                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      TV
                    </p>

                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Refrigerator
                    </p>

                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Telephone
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Telephone
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Heating
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Iron
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Microwave
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Ironing facilities
                    </p>
                    <p className="flex justify-start gap-x-[4px] items-center text-base12">
                      <Image
                        src="/icon/signIcon.svg"
                        width={9}
                        height={9}
                        alt="share"
                      />
                      Hairdryer
                    </p>
                  </div>
                  <div className="underline flex justify-center text-base12 text-txt-hint mx-auto mt-[15px]">
                    + 15 more
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-between items-center border rounded-lg h-[45px] mt-[12px] mx-2">
              <div className=" border-r   rounded-lg w-[45px] h-full justify-center items-center flex">
                -
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-base16 font-semibold">Add Rome</p>
                <p className="text-base12">(0 Selected)</p>
              </div>
              <div className="border-l bg-[#4E90A8] text-bg-white rounded-lg w-[45px] h-full justify-center items-center flex">
                +
              </div>
            </div> */}

            {/* button */}
            <div className="block md:hidden">
              <div className="mt-[19px] ">
                <div className=" flex flex-col justify-center items-center text-base12 mx-auto">
                  <p>Price per Person:</p>
                  <p className="">
                    <span className="font-medium ">10077 BDT</span>{" "}
                    <span
                      className="text-small10 text-txt-hint
                      "
                    >
                      <del>107290 </del> BDT
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex relative justify-center items-center  rounded-[7px] h-[45px] mt-[12px] mx-2">
                <div className="absolute left-0 border text-[#CAC5B7] border-[#CAC5B7] rounded-[8px] w-[45px] h-full justify-center items-center flex">
                  -
                </div>
                <div className="w-full h-full relative">
                  <div className="w-[90%] mx-auto h-[1px] absolute left-3 top-0 bg-[#CAC5B7]"></div>
                  <div className="flex justify-center items-center flex-col mt-3">
                    <p className="text-base16 font-normal leading-6">
                      Add Rome
                    </p>
                    <p className="text-base12 text-txt-hint">(0 Selected)</p>
                  </div>
                  <div className="w-[90%] mx-auto h-[1px] left-3 absolute bottom-0 bg-[#CAC5B7]"></div>
                </div>
                <div className="absolute text-[#CAC5B7] cursor-pointer right-0   hover:bg-[#4E90A8] border border-[#CAC5B7] text-black hover:text-bg-white  rounded-[8px] w-[45px] h-full justify-center items-center flex">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* nearby place */}

        <div className="mt-[40px] px-[16px]">
          <h2 className="font-normal text-base22">Places Nearby</h2>
          {/* map area */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-start mt-[24px]">
            <div className="w-full border h-[50px]"></div>
            {/* duration nearby area */}

            <div className="grid grid-cols-4 gap-x-2 justify-between items-end px-[16px] mt-[36px] md:mt-[0px] w-full">
              <div className="flex col-span-3 justify-end items-end w-full gap-x-2">
                <Image
                  src="/icon/Frame 941.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />

                <p className="text-base16  text-txt-primary ">McDonald’s</p>

                <div className="w-full   justify-center items-center flex gap-1">
                  <div
                    style={{
                      flex: 1,
                      borderBottom: `2px dashed #868686`,
                    }}
                    className=""
                  ></div>
                </div>
              </div>
              <p className="w-full col-span-1">0,3 km</p>
            </div>
          </div>
          <div className="flex justify-center mx-auto gap-x-1 underline mt-[15px] ">
            <span className="text-base16 text-txt-primary">Expand </span>
            <Image
              src="/icon/fi-rr-angle-small-right.svg"
              width={23}
              height={16}
              alt="great location image"
            />
          </div>
        </div>

        <div className="px-[16px] gap-x-[12px] mt-[16px] md:mt-[32px] block md:flex flex-row justify-between  items-start">
          {/* Amneties area */}

          <div className=" w-full">
            <h2 className="text-base24 font-normal">Amneties</h2>

            <div className="grid grid-cols-2 justify-between items-center mt-[12px]">
              <h2 className="flex justify-start items-center text-base16 gap-x-2">
                <div className="w-2 h-2 rounded-full bg-bg-blk"></div>
                Swimming Pool
              </h2>
              <h2 className="flex justify-start items-center text-base16 gap-x-2">
                <div className="w-2 h-2 rounded-full bg-bg-blk"></div>
                Swimming Pool
              </h2>
            </div>
          </div>

          {/* Hotel Rules: */}
          <div className="mt-[16px] md:mt-[0px] w-full">
            <h2 className="text-base24 font-normal">Hotel Rules:</h2>
            <div className="grid grid-cols-2 justify-between items-center mt-[12px]">
              <h2 className="flex justify-start items-center text-base16 gap-x-2">
                <div className="w-2 h-2 rounded-full bg-bg-blk"></div>
                Check In:
              </h2>
              <h2 className="text-base16">12:00 PM</h2>
            </div>
          </div>
        </div>

        {/* All Services */}

        <div className="px-[16px] mt-[16px]">
          <h2 className="text-base24 font-normal">All Services</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-start items-start md:mt-[15px] mt-[21px]  w-full">
            <div className="w-full ">
              <div className="flex justify-start items-end gap-x-1">
                <Image
                  src="/icon/Frame 496.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />
                <p className="text-base16 font-normal">Outdoors</p>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <p className="text-base12">BBQ facilities</p>
                <p className="text-base12">Terrace</p>
                <p className="text-base12">Garden</p>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-start items-center gap-x-1">
                <Image
                  src="/icon/Frame 511.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />
                <p className="text-base16 font-normal">Parking</p>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <p className="text-base12">Free Parking</p>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-start items-center gap-x-1">
                <Image
                  src="/icon/Frame 511.svg"
                  width={23}
                  height={16}
                  alt="great location image"
                />
                <p className="text-base16 font-normal">Parking</p>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <p className="text-base12">Free Parking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}

        <div className="mt-[26px] px-[16px]">
          <h2 className="text-base24 font-normal">Cancellation Policy</h2>

          <p className="mt-[12px] md:mt-[4px] text-base16 ">
            Percentage returned, excluding Service Fee
          </p>
          {/* phone con */}
          <div className="mt-[12px] md:hidden flex flex-col gap-[30px]">
            <div className=" shadow-lg rounded-2xl">
              <div className="bg-[#376576] rounded-t-2xl">
                <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                  100%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>

            <div className=" shadow-lg rounded-2xl ">
              <div className="bg-[#4E90A8] rounded-t-2xl">
                <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                  75%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>

            <div className=" shadow-lg rounded-2xl">
              <div className="bg-[#FFCC00] rounded-t-2xl">
                <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                  50%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className=" shadow-lg rounded-2xl">
              <div className="bg-[#FF9500] rounded-t-2xl">
                <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                  25%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className=" shadow-lg rounded-2xl">
              <div className="bg-[#FE9A9A] rounded-t-2xl">
                <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                  0%
                </p>
              </div>
              <p className="text-center p-3 mt-[12px] font-normal">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
          </div>

          {/* tab con */}
          <div className="hidden md:flex justify-start items-center mt-[16px]">
            <div className="bg-[#376576] rounded-tl-full rounded-bl-full w-full">
              <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                100%
              </p>
            </div>
            <div className="bg-[#4E90A8] w-full">
              <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                75%
              </p>
            </div>
            <div className="bg-[#FFCC00] w-full">
              <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                50%
              </p>
            </div>
            <div className="bg-[#FF9500] w-full">
              <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                25%
              </p>
            </div>
            <div className="bg-[#FE9A9A] rounded-tr-full rounded-br-full w-full">
              <p className="text-base16 text-bg-white flex justify-center items-center p-1">
                0%
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-start items-center mt-[16px] gap-x-[7px] w-full h-[141px] px-[4px]">
            <div className="border border-[#2A220E73] rounded-xl w-full h-full">
              <p className="text-center flex justify-center h-full items-center text-base12 py-[20px] px-[5px]">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className="border border-[#2A220E73] rounded-xl w-full h-full">
              <p className="text-center flex justify-center h-full items-center text-base12 py-[20px] px-[5px]">
                If Customer Cancels between 14 to 2 days before the Arival time,
                (Not later than 48 hours before Check In)
              </p>
            </div>
            <div className="border border-[#2A220E73] rounded-xl w-full h-full">
              <p className="text-center flex justify-center items-center h-full text-base12 py-[20px] px-[5px]">
                If Customer Cancels between 24 to 12 hours before the Arival
                time (Not Later than 12 hours before the Check In)
              </p>
            </div>
            <div className="border border-[#2A220E73] rounded-xl w-full h-full">
              <p className="text-center flex justify-center items-center h-full text-base12 py-[20px] px-[5px]">
                If Customer Cancels between 24 to 12 hours before the Arival
                time (Not Later than 12 hours before the Check In)
              </p>
            </div>
            <div className="border border-[#2A220E73] rounded-xl w-full h-full">
              <p className="text-center flex justify-center items-center h-full text-base12 py-[20px] px-[5px]">
                If Customer Cancels 6 or less hours before the Check In
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Stats */}
        <div className="div"></div>

        {/* Review */}
        <div className="px-[16px] mt-[36px]">
          <div className="flex justify-between items-center">
            <div className="text-base24 font-normal">144 Reviews</div>
            <div className="text-base24 font-normal">4.9</div>
          </div>

          <div className="mt-[12px] flex flex-col gap-4">
            <div className="div">
              <div className="flex justify-start gap-x-2">
                <div className="flex justify-start items-center gap-x-2">
                  <Image
                    src="/icon/Ellipse 9.svg"
                    width={36}
                    height={36}
                    alt="great location image"
                  />
                  <div className="flex flex-col">
                    <p className="text-base16 font-normal text-txt-primary">
                      Tamara Holding
                    </p>
                    <p className="text-base12 font-normal text-txt-hint">
                      January, 12, 2020
                    </p>
                  </div>
                </div>
                <div className="text-txt-hint">(5.0)</div>
              </div>
              <p className="mt-[8px] text-base12 text-txt-primary">
                Great place to stay at, especially, if you are travelling with
                children. Owners are extremely attentive to even smallest
                details. Highly reccomend.
              </p>
            </div>
            <div className="div">
              <div className="flex justify-start gap-x-2">
                <div className="flex justify-start items-center gap-x-2">
                  <Image
                    src="/icon/Ellipse 9.svg"
                    width={36}
                    height={36}
                    alt="great location image"
                  />
                  <div className="flex flex-col">
                    <p className="text-base16 font-normal text-txt-primary">
                      Tamara Holding
                    </p>
                    <p className="text-base12 font-normal text-txt-hint">
                      January, 12, 2020
                    </p>
                  </div>
                </div>
                <div className="text-txt-hint">(5.0)</div>
              </div>
              <p className="mt-[8px] text-base12 text-txt-primary">
                Great place to stay at, especially, if you are travelling with
                children. Owners are extremely attentive to even smallest
                details. Highly reccomend.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="px-[16px] mt-[32px] w-[320px]">
          <h2 className="text-base22 font-normal">
            Frequently Asked Questions
          </h2>

          <div className="mt-[16px] flex flex-col gap-2">
            <div className="flex justify-start items-center gap-x-3 ">
              <Image
                className="img-fluid w-[33px] h-[33px]"
                src="/icon/FAQ_down.svg"
                width={33}
                height={33}
                alt="great location image"
              />

              <p className="text-base16 leading-[22px] font-normal">
                What’s the Company is doing about COVID-19?
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-3 ">
              <Image
                className="img-fluid w-[33px] h-[33px]"
                src="/icon/FAQ_down.svg"
                width={33}
                height={33}
                alt="great location image"
              />

              <p className="text-base16 leading-[22px] font-normal">
                Do I need to meet my host?
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Policies */}
        <div className="mt-[45px] px-[16px]">
          <h2 className="text-center font-normal text-base22">
            Hotel Policies
          </h2>

          <div className="mt-[30px] flex flex-col gap-[10px]">
            <p className="text-base18">
              <span className="font-semibold text-txt-primary">
                • Guarantee Policy:{" "}
              </span>
              Without advance or credit card authorization no reservations are
              guaranteed. Hotel authority has complete right to cancel the non
              guaranteed reservation at any time without prior notice.
            </p>
            <p className="text-base18">
              <span className="font-semibold text-txt-primary">
                {" "}
                • Extension Policy:{" "}
              </span>
              The extension of stay has to be requested in 12 hours before check
              out and acceptance is based upon availability.
            </p>
            <p className="text-base18">
              <span className="font-semibold text-txt-primary ">
                • Late Check-out Policy:{" "}
              </span>
              Late check-out before 1800 hours will be half day charge and after
              1800 hours will be full day charge (subject to availability).
            </p>
          </div>

          <div className="underline text-center text-txt-hint mt-[15px]">
            View All
          </div>
        </div>

        {/* Available Payment Methods */}

        <div className="div">
          <h2 className="text-base22 font-normal text-center mt-[40px]">
            Available Payment Methods
          </h2>

          <div className="mt-[30px] flex flex-row justify-evenly items-center w-full">
            <Image
              src="/icon/visa.svg"
              width={60}
              height={60}
              alt="great location image"
            />
            <Image
              src="/icon/bkash.svg"
              width={60}
              height={60}
              alt="great location image"
            />
            <Image
              src="/icon/american.svg"
              width={60}
              height={60}
              alt="great location image"
            />
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-[40px] px-[25px]">
          <h2 className="text-base18 font-normal text-center mt-[40px]">
            Still have questions?
          </h2>

          <div className="mt-[15px]  text-center py-[12px] text-base12 bg-[#4E90A8] rounded-full text-bg-white">
            Ask Now!
          </div>
        </div>

        {/* footer */}

        <div className="mt-[33px]">
          <div className="flex justify-center mx-auto">
            <Image
              src="/icon/ghuddy-logo 1.svg"
              width={154}
              height={70}
              alt="great location image"
            />
          </div>

          <div className="mt-[17px] flex flex-col gap-[25px] px-[16px]">
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/material-symbols_speed-outline-rounded.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-base16 font-medium">Faster Delivery</span>
              </div>
              <p className="text-base12">Service is received within minutes</p>
            </div>
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-payment.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-base16 font-medium">Secure Payment</span>
              </div>
              <p className="text-base12">100% Secure Payment</p>
            </div>

            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-settings-backup-restore.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-base16 font-medium">7 Days Return</span>
              </div>
              <p className="text-base12">If any troubles occur</p>
            </div>
            <div className="div">
              <div className="flex justify-start items-center">
                <Image
                  src="/icon/ic_baseline-support-agent.svg"
                  width={20}
                  height={16}
                  alt="great location image"
                />{" "}
                <span className="text-base16 font-medium">Quick Support</span>
              </div>
              <p className="text-base12">Text us on Facebook or WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
