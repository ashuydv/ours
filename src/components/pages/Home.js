import React from "react";
import hero from "../../assets/img/hero.png";
import nonDuality from "../../assets/img/nonDuality.jpg";
import selfInquiry from "../../assets/img/selfInquiry.jpg";
import bhagavgita from "../../assets/img/bhagavgita.jpg";
import yoga1 from "../../assets/img/yoga1.png";
import yoga3 from "../../assets/img/yoga3.png";
import yoga4 from "../../assets/img/yoga4.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="text-gray-600 body-font hero py-4">
        <div className="container mx-auto flex px-5 lg:py-32 lg:pb-16 md:py-32 md:pb-16  items-center justify-center flex-col py-6">
          <img
            className="lg:w-1/6 md:w-2/6 mb-10 object-cover object-center"
            alt="hero"
            src={hero}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-gray-900">
              Live a Yogic Lifestyle
            </h1>
            <p className="mb-8 leading-relaxed text-gray-600 text-md sm:text-sm">
              A Daily Practice consisting of Yoga, Meditation, Chanting and <br className="lg:block md:block sm:hidden" />
              Relaxation Techniques, led by Traditional Indian Practitioners.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded-xl text-lg">
                Get Early Access
              </button>
            </div>
          </div>
          <div className="pt-20 animate-bounce">
            <a href="#">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      {/* Hero-end */}
      {/* Section-2 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex items-center mb-10 justify-evenly">
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16 "></div>
            <h1 className="sm:text-3xl text-2xl title-font text-center text-gray-900 font-bold">
              Why OURS?
            </h1>
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16"></div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 lg:flex-row md:flex-col md:items-center md:justify-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={bhagavgita} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  Traditional
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  Designed by alumni of the oldest, <br className=" lg:block md:block sm:hidden" />  Yoga institutes in India.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={nonDuality} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  Holistic
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  A set of daily practices for your <br /> mind, body and
                  spirit.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={selfInquiry} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  For Beginners
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  Master the basics, and unlock new <br /> techniques as you
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-2-end */}
      {/* Section-3 */}
      <section className="text-gray-400 body-font bg-custom rounded-xl">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-white">
              “Yoga is the journey of the self, <br /> through the self, to the
              self”
            </h1>
            <p className="text-xs text-gray-400 tracking-widest font-medium title-font mb-1">
              Bhagavad Gītā, Verse 6.20
            </p>
          </div>
          <div className=" bg-gray-200 w-full max-h-px h-1 lg:mb-8 md:mb-8 mb-4"></div>
          <div className=" lg:w-2/4 mx-auto md:w-5/6 ">
            <p className="leading-relaxed text-sm text-gray-100 my-3">
              Yoga is the ancient Indian science of healthy living - harmonizing
              the relationship <br /> between mind, body and environment. Much
              more than a physical exercise, it is a <br /> disciplined and
              holistic lifestyle that includes of a variety of practices.
            </p>
            <p className="leading-relaxed text-sm text-gray-100 my-3">
              Traditional Yoga is a combination of Ethical Rules (Yamas),
              Personal Observances <br /> (Niyamas), Posture (Āsana), Breathing
              (Prāṇāyāma), Withdrawal (Pratyāhāra), <br /> Concentration
              (Dhāraṇā) and Meditation (Dhyāna).
            </p>
            <p className="leading-relaxed text-sm text-gray-100">
              Our Sādhanā (Daily Practice) is designed for you to incorporate
              this Yogic lifestyle <br /> through short lessons that can be
              viewed at your convenience.
            </p>
          </div>
        </div>
      </section>
      {/* Section-3-end */}
      {/* Section-4 */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 lg:py-24 md:py-24 py-12 pb-4 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full lg:mb-8 md:mb-8 mb-4">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3">
              Sādhāna
            </h1>
            <p className="text-xs text-gray-400 tracking-widest font-medium title-font mb-1">
              Your Daily Practice for Holistic Wellbeing
            </p>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-11/12 mx-auto">
            <div class="lg:h-30 md:h-30 lg:top-32 md:top-32 top-20 w-5 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-3 h-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-300 text-white relative z-10 title-font font-medium text-sm left-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 text-gray-500 inline-flex items-center justify-center">
                <img src={yoga1} alt="" className=" w-60 h-full relative" />
                <div className=" absolute top-14 left-16">
                  <span class="inline-block py-1 px-2 rounded-lg bg-white text-black text-xs font-small tracking-widest">
                    7:00 AM
                  </span>
                </div>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <div className="flex items-baseline justify-between">
                  <h2 class="title-font text-gray-900 mb-1 text-xl font-bold">
                    Shooting Stars
                  </h2>
                  <p className="leading-realxed text-sm">30 min</p>
                </div>
                <p className="leading-realxed">
                  Led by <b>Harshvardhan Jhaveri</b>
                </p>
                <p className="leading-realxed">
                  Alumni of <b>Kaivalyadham Yoga Institute</b>
                </p>
                <p class="leading-relaxed">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-11/12 mx-auto">
            <div class=" h-full w-5 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-3 h-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-300 text-white relative z-10 title-font font-medium text-sm left-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 text-gray-500 inline-flex items-center justify-center">
                <img src={yoga1} alt="" className=" w-60 h-full relative" />
                <div className=" absolute top-14 left-16">
                  <span class="inline-block py-1 px-2 rounded-lg bg-white text-black text-xs font-small tracking-widest">
                    7:00 AM
                  </span>
                </div>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <div className="flex items-baseline justify-between">
                  <h2 class="title-font text-gray-900 mb-1 text-xl font-bold">
                    Shooting Stars
                  </h2>
                  <p className="leading-realxed text-sm">30 min</p>
                </div>
                <p className="leading-realxed">
                  Led by <b>Harshvardhan Jhaveri</b>
                </p>
                <p className="leading-realxed">
                  Alumni of <b>Kaivalyadham Yoga Institute</b>
                </p>
                <p class="leading-relaxed">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-11/12 mx-auto">
            <div class=" h-full w-5 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-3 h-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-300 text-white relative z-10 title-font font-medium text-sm left-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 text-gray-500 inline-flex items-center justify-center">
                <img src={yoga3} alt="" className=" w-60 h-full relative" />
                <div className=" absolute top-14 left-16">
                  <span class="inline-block py-1 px-2 rounded-lg bg-white text-black text-xs font-small tracking-widest">
                    7:00 AM
                  </span>
                </div>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <div className="flex items-baseline justify-between">
                  <h2 class="title-font text-gray-900 mb-1 text-xl font-bold">
                    Shooting Stars
                  </h2>
                  <p className="leading-realxed text-sm">30 min</p>
                </div>
                <p className="leading-realxed">
                  Led by <b>Harshvardhan Jhaveri</b>
                </p>
                <p className="leading-realxed">
                  Alumni of <b>Kaivalyadham Yoga Institute</b>
                </p>
                <p class="leading-relaxed">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-11/12 mx-auto">
            <div class=" lg:h-32 md:h-32 h-20 w-5 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-3 h-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-300 text-white relative z-10 title-font font-medium text-sm left-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 text-gray-500 inline-flex items-center justify-center">
                <img src={yoga4} alt="" className=" w-60 h-full relative" />
                <div className=" absolute top-14 left-16">
                  <span class="inline-block py-1 px-2 rounded-lg bg-white text-black text-xs font-small tracking-widest">
                    7:00 AM
                  </span>
                </div>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <div className="flex items-baseline justify-between">
                  <h2 class="title-font text-gray-900 mb-1 text-xl font-bold">
                    Shooting Stars
                  </h2>
                  <p className="leading-realxed text-sm">30 min</p>
                </div>
                <p className="leading-realxed">
                  Led by <b>Harshvardhan Jhaveri</b>
                </p>
                <p className="leading-realxed">
                  Alumni of <b>Kaivalyadham Yoga Institute</b>
                </p>
                <p class="leading-relaxed">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-4-end */}
      {/* Section-5 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex items-center mb-10 justify-evenly">
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16 "></div>
            <h1 className="sm:text-3xl text-2xl title-font text-center text-gray-900 font-bold">
              Why OURS?
            </h1>
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16"></div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 lg:flex-row md:flex-col md:items-center md:justify-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={bhagavgita} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  Traditional
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  Designed by alumni of the oldest, <br className=" lg:block md:block sm:hidden" />  Yoga institutes in India.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={nonDuality} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  Holistic
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  A set of daily practices for your <br /> mind, body and
                  spirit.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center w-full">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-black mb-5 flex-shrink-0">
                <img src={selfInquiry} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">
                  For Beginners
                </h2>
                <p className="leading-relaxed text-base md:text-xs">
                  Master the basics, and unlock new <br /> techniques as you
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font bg-custom rounded-xl">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-16">
            Manifesto
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 items-center justify-center flex-col text-gray-200 text-center">
            <p className="leading-relaxed">Living through love, not fear</p>
            <p className="leading-relaxed text-xs">&bull;</p>
            <p className="leading-relaxed">
              Learning the language of being human
            </p>
            <p className="leading-relaxed text-xs">&bull;</p>
            <p className="leading-relaxed text-center w-full">
              Transcending the ego by venturing into uncharted territory{" "}
            </p>
            <p className="leading-relaxed text-xs">&bull;</p>
            <p className="leading-relaxed">
              Returning to our roots to uncover lost truths
            </p>
            <p className="leading-relaxed text-xs">&bull;</p>
            <p className="leading-relaxed">
              Sharing knowledge to empower others
            </p>
            <p className="leading-relaxed text-xs">&bull;</p>
            <p className="leading-relaxed">Living in sync with nature</p>
          </div>
          <p className="leading-relaxed mt-14 text-center text-gray-200">
            Our vision is to share ancient Indian wisdom in an accessible and
            authentic manner, empowering people to cultivate inner peace
            and compassion in their everyday lives.
          </p>
        </div>
      </section>
      {/* Section-5-end */}
      {/* Section-6 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto text-center">
          <h1 className="sm:text-3xl text-2xl title-font text-center text-black mb-2 font-bold">
            Programme Cost
          </h1>
          <small>12 Weeks · 90 Days · 5400 Hours</small>
          <div className=" flex flex-wrap py-9">
            <div className=" lg:w-1/2 md:w-1/2">
              <div className="w-80 h-24 bg-gray-100 p-4 py-8 rounded-xl lg:mx-60 relative md:mx-auto md:mt-2">
                <h1 className=" text-center text-4xl">$54</h1>
              </div>
            </div>
            <div className=" lg:w-1/2 md:w-1/2 lg:px-16 md:px-16 md:mx-auto sm:mt-0 w-full text-left p-2">
              <div className="flex flex-col items-baseline md:items-baseline md:text-left md:text-sm">
                <p className="leading-relaxed font-bold">What's included ?</p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  24 Hatha Yoga Lessons
                </p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  12 Guided Meditation Lessons
                </p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  12 Yoga Nidra Lessons
                </p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  6 Mantra Chants
                </p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Access to OURS for 180 Days
                </p>
                <p className="leading-relaxed">
                  <span class="bg-white text-black w-4 h-4 mr-2 border-2 border-gray-800 p-0.5 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Upcoming Features & Content
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button class="text-white lg:w-1/5 mx-auto my-4 bg-black border-0 py-2 px-8 focus:outline-none rounded-xl text-lg md:w-1/3 w-full">
              Join Waitlist
            </button>
            <button class="text-black  lg:w-1/5 mx-auto bg-white border-0 py-2 px-8 focus:outline-none rounded-xl text-lg md:w-1/3 w-full">
              7 Day Free Trial
            </button>
          </div>
          <p className="leading-relaxed mt-14 text-center text-gray-900">
            <b>You won’t be charged anything today</b> <br />
            Only after the free trial, on the 8th day of the programme.
          </p>
        </div>
      </section>
      {/* Section-6-end */}
      {/* Section-7 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex items-center mb-10 justify-evenly">
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16"></div>
            <h1 className="sm:text-3xl text-2xl title-font text-center text-gray-900 font-bold">
              FAQS
            </h1>
            <div className="line lg:w-96 max-h-0.5 h-1 bg-black md:w-52 w-16"></div>
          </div>
          <div className=" flex flex-col items-center justify-center ">
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>How long is the programme?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    It is a daily programme for a period of 90 days (12 weeks).
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>Do I need prior experience to start the programme?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>Do I have to do all the daily practices?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>How much time do I have to commit each day?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>When will I start seeing the benefits?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2 shadow-none">
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className=" font-bold" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>How long can I access the programme for?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2 shadow-none">
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className=" font-bold" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>Will I need any equipment?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" lg:w-3/5 md:w-3/5 mx-auto border-b-2 border-gray-400 my-2 shadow-none">
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className=" font-bold" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <b>
                    <p>I can’t afford the programme. What should I do?</p>
                  </b>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* Section-7-end */}
    </div>
  );
};

export default Home;
