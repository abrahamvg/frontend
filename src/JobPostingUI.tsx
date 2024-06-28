import { ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";

// Import images
import logoImg from '../src/images/logos/logo.png';
import bgImg from '../src/images/png/bg.png';
import figmaImg from '../src/images/png/figma.png';
import illustratorImg from '../src/images/png/illustrator.png';
import adobeXDImg from '../src/images/png/adobeXD.png';

import  locationIcon from '../src/images/svg/location.svg';
import  salaryIcon from '../src/images/svg/salary.svg';
import  bellIcon from '../src/images/svg/bell.svg';
import  deleteIcon from '../src/images/svg/delete.svg';
import  editIcon from '../src/images/svg/edit.svg';
import  applicantsIcon from '../src/images/svg/applicants.svg';
import  matchesIcon from '../src/images/svg/matches.svg';
import  messagesIcon from '../src/images/svg/messages.svg';
import  viewsIcon from '../src/images/svg/views.svg';


const JobPostingUI = () => {
  const innerOptions = [
    { optionName: "Job preview", value: "preview" },
    { optionName: "Applicants", value: "applicants" },
    { optionName: "Match", value: "match" },
    { optionName: "Messages", value: "messages" },
  ];

  const outerOptions = [
    { optionName: "Jobs", value: "jobs" },
    { optionName: "Messages", value: "messages" },
    { optionName: "Payments", value: "payments" },
  ];

  const [active, setActive] = useState("preview");
  const [outerOptionsActive, setouterOptionsActive] = useState("jobs");
  const messages = 10;
  const notifications = 1;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Tabs defaultValue="jobs" className="w-full">
        <header className="bg-white p-4 flex justify-between items-center border-b-[0.5px] border-neutral-200">
          <div className="flex items-center space-x-4 min-w-32">
            <div className="bg-gray-200 p-2 rounded text-primary font-medium">
              Logo
            </div>
          </div>
          <TabsList className="rounded-full bg-white border-[0.5px] border-neutral-200 py-6 w-96 justify-between">
            {outerOptions.map((option) => {
              return (
                <TabsTrigger
                  className="rounded-full text-md text-neutral-400  data-[state=active]:border-2 data-[state=active]:border-primary-border data-[state=active]:bg-primary data-[state=active]:text-white"
                  value={option.value}
                  onClick={() => {
                    setouterOptionsActive(option.value);
                  }}
                >
                  <div className="relative">
                    <img
                      src={`../src/images/svg/${
                        option.value +
                        (option.value === outerOptionsActive
                          ? "-active"
                          : "-inactive")
                      }.svg`}
                      className="inline mr-2 w-4"
                      alt={option.value}
                    />
                    <div
                      className={`h-[6px] w-[6px] rounded-full absolute top-[4px] right-[6px] ${
                        messages > 0 && option.value === "messages"
                          ? "block"
                          : "hidden"
                      } ${
                        option.value === outerOptionsActive ? "" : "bg-primary"
                      }`}
                    ></div>
                  </div>
                  {option.optionName}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 relative">
              <img
                src={bellIcon}
                className="inline mr-2 w-full h-full"
                alt="bell"
              />
              <div
                className={`h-[6px] w-[6px] rounded-full absolute top-0 right-0 bg-primary ${
                  notifications > 0 ? "block" : "hidden"
                }`}
              ></div>
            </div>
            <Button variant="outline" className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mr-2 overflow-hidden">
                <img
                  src={logoImg}
                  className="inline mr-2 w-full h-full"
                  alt="logo"
                />
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div>
          <div>
            <TabsContent value="jobs">
              <Tabs defaultValue="preview">
                <TabsList className="bg-white pl-28 border-b-[0.5px] border-neutral-200 w-full flex justify-start h-16">
                  {innerOptions.map((options) => {
                    return (
                      <div className="flex items-center flex-col w-40 -ml-8">
                        <TabsTrigger
                          value={options.value}
                          className="px-0 font-medium text-md text-neutral-400 data-[state=active]:text-primary data-[state=active]:font-semibold flex flex-col"
                          onClick={() => {
                            setActive(options.value);
                          }}
                        >
                          {options.optionName}
                        </TabsTrigger>
                        <div
                          className={`w-2/5 h-0.5 bg-primary transition-all ease-linear delay-0  mt-1 ${
                            options.value === active
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </div>
                    );
                  })}
                </TabsList>
              </Tabs>
              <main className="flex flex-row bg-white">
                <div
                  className="w-4/5 border-r-[0.5px] border-neutral-200 pl-28"
                  style={{
                    backgroundImage: `url("${bgImg}")`,
                  }}
                >
                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex-grow">
                      <div className="border-b-[0.5px] border-neutral-200 mb-10">
                        <div className="flex flex-row items-center">
                          <h1 className="text-2xl font-bold">
                            Senior Product Designer
                          </h1>
                          <div className="flex flex-row items-center gap-2 ml-2">
                            <div className="w-1 h-1 bg-neutral-200 rounded-full"></div>
                            <p className="text-neutral-400 font-medium text-xs">
                              posted 2 days ago
                            </p>
                          </div>
                          <Badge className="ml-2 border-[0.5px] border-green-200 bg-green-50 text-green-700 relative pl-[6px] pr-[8px] font-medium">
                            <div className="w-[6px] h-[6px] bg-green-500 rounded-full mr-[5px]"></div>
                            Open
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-500 mb-8 mt-6">
                          <div className="mr-4 flex flex-row items-center">
                            <img
                              src={locationIcon}
                              className="inline mr-3"
                              alt="location"
                            />
                            <span className="text-[#5D5D5D]">
                              Delaware, USA
                            </span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-neutral-200 mr-4"></div>
                          <div className="flex flex-row items-center">
                            <img
                              src={salaryIcon}
                              className="inline mr-3"
                              alt="salary"
                            />
                            <span className="text-[#5D5D5D]">$300k-$400k</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 border-b-[0.5px] border-neutral-200 mb-10">
                        <div className="mb-6">
                          <h3 className="font-medium text-sm mb-2 text-[#6E6D6D]">
                            Skills Required
                          </h3>
                          <div className="flex flex-col gap-2">
                            <div className="w-fit font-medium text-[#344054] text-xs border-[1px] border-neutral-200 rounded-[6px] py-1 px-2">
                              <img
                                src={figmaImg}
                                className="inline mr-2 w-4"
                                alt="figma"
                              />
                              Figma
                            </div>
                            <div className="w-fit font-medium text-[#344054] text-xs border-[1px] border-neutral-200 rounded-[6px] py-1 px-2">
                              <img
                                src={illustratorImg}
                                className="inline mr-2 w-4"
                                alt="illustrator"
                              />
                              Adobe Illustrator
                            </div>
                            <div className="w-fit font-medium text-[#344054] text-xs border-[1px] border-neutral-200 rounded-[6px] py-1 px-2">
                              <img
                                src={adobeXDImg}
                                className="inline mr-2 w-4"
                                alt="adobeXD"
                              />
                              Adobe XD
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h3 className="font-medium text-sm mb-2 text-[#6E6D6D]">
                            Preferred Language
                          </h3>
                          <div className="flex flex-col gap-2">
                            <span className="font-semibold text-[#3D3D3D]">
                              English
                            </span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h3 className="font-medium text-sm mb-2 text-[#6E6D6D]">
                            Type
                          </h3>
                          <div className="flex flex-col gap-2">
                            <span className="font-semibold text-[#3D3D3D]">
                              Full Time
                            </span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h3 className="font-medium text-sm mb-2 text-[#6E6D6D]">
                            Years of Experience
                          </h3>
                          <div className="flex flex-col gap-2">
                            <span className="font-semibold text-[#3D3D3D]">
                              3+ Years of Experience
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h2 className="font-medium text-[#6E6D6D]">
                            About the job
                          </h2>
                          <ul className="list-decimal pl-5 mt-2">
                            <li>Handle the UI/UX research design</li>
                            <li>
                              Work on researching on latest web applications
                              designs & trends
                            </li>
                            <li>Work on conceptualizing and visualizing</li>
                            <li>
                              Work on creating graphics content and other
                              graphic related works
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="font-medium">Benefits:</h2>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Health insurance</li>
                            <li>Provident Fund</li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="font-medium">Schedule:</h2>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Day shift</li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="font-medium">
                            Supplemental pay types:
                          </h2>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Performance bonus</li>
                            <li>Yearly bonus</li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="font-medium">
                            Work Location: In person
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 border-t pt-6 mb-20">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-sm mr-2 overflow-hidden">
                        <img
                          src={logoImg}
                          className="inline mr-2 w-full h-full"
                          alt="logo"
                        />
                      </div>
                      <span className="font-medium text-[#4F4F4F]">
                        Atlassian
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Company size
                        </h3>
                        <p className="text-[#3D3D3D]">1k - 2k Employees</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Type
                        </h3>
                        <p className="text-[#3D3D3D]">Private</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Sector
                        </h3>
                        <p className="text-[#3D3D3D]">
                          Information Technology, Infrastructure
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Funding
                        </h3>
                        <p className="text-[#3D3D3D]">Bootstrapped</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Founded In
                        </h3>
                        <p className="text-[#3D3D3D]">2019</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6E6D6D] text-sm">
                          Founded By
                        </h3>
                        <p className="text-[#3D3D3D]">
                          Scott Farquhar, Mike Cannon-Brookes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/5 bg-[#FCFCFC] py-8 px-6">
                  <div>
                    <div className="flex flex-row gap-2 mb-6">
                      <Button className="rounded-lg w-full bg-[#FEF4F2] border-[0.8px] border-[#DC4A2D] text-[#DC4A2D]">
                        <img
                          src={deleteIcon}
                          className="inline mr-3"
                          alt="delete"
                        />
                        Delete job
                      </Button>
                      <Button className="rounded-lg w-full bg-[#DC4A2D] border-2 border-[#FED3CA] text-white">
                        <img
                          src={editIcon}
                          className="inline mr-3"
                          alt="edit"
                        />
                        Edit job
                      </Button>
                    </div>

                    <div className="flex flex-col gap-4 p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <img
                            src={applicantsIcon}
                            className="inline mr-3"
                            alt="applicants"
                          />
                          <span className="font-medium">Applicants</span>
                        </div>
                        <span className="font-semibold">400</span>
                      </div>
                      <Separator className="bg-neutral-200 h-[0.5px]" />
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <img
                            src={matchesIcon}
                            className="inline mr-3"
                            alt="matches"
                          />
                          <span className="font-medium">Matches</span>
                        </div>
                        <span className="font-semibold">100</span>
                      </div>
                      <Separator className="bg-neutral-200 h-[0.5px]" />
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <img
                            src={messagesIcon}
                            className="inline mr-3"
                            alt="messages"
                          />
                          <span className="font-medium">Messages</span>
                        </div>
                        <span className="font-semibold">147</span>
                      </div>
                      <Separator className="bg-neutral-200 h-[0.5px]" />
                      <div className="flex justify-between items-center">
                        <div>
                          <img
                            src={viewsIcon}
                            className="inline mr-3"
                            alt="views"
                          />
                          <span className="font-medium">Views</span>
                        </div>
                        <span className="font-semibold">800</span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </TabsContent>

            <TabsContent value="messages" >
              <div className="bg-whit p-6 min-h-screen">
                <h2 className="text-2xl font-bold mb-4">Messages</h2>
                <p>Messages content goes here.</p>
              </div>
            </TabsContent>

            <TabsContent value="payments">
              <div className="bg-white min-h-screen p-6">
                <h2 className="text-2xl font-bold mb-4">Payments</h2>
                <p>Payments content goes here.</p>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default JobPostingUI;
