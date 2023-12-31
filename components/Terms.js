import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import logo from "../public/home/logo.svg";
import close from "../public/close.svg";
import Footer from "./Footer";

export default function Terms() {
  return (
    <div
      style={{ backgroundColor: "#FDFBFF" }}
      className="w-screen h-screen overflow-scroll   pb-6 lg:pb-0 scrollbar-hide"
    >
      <Link
        rel="noopener noreferrer"
        className="absolute  top-5 right-5 lg:top-10 z-50"
        href="/"
      >
        <Image alt={""} src={close} />
      </Link>

      <motion.div
        style={{
          width: 141,
          height: 28,
          x: 20,
          y: 10,
          marginLeft: 0,
          marginRight: 0,
        }}
        className="mt-5"
      >
        <Image alt={""} src={logo} />
      </motion.div>

      <div className="lg:px-16 relative flex flex-col w-full mt-11 px-4 ">
        <motion.div className="flex flex-col   ">
          <h1
            className="mt-4 text-3xl lg:text-3xl 2xl:text-4xl  mb-4  w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`TEAM OF SERVICE AGREEMENT`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`PLEASE READ THIS MOBILE APPLICATION END-USER LICENSE AGREEMENT
            ("EULA AGREEMENT") CAREFULLY, BEFORE COMPLETING THE DOWNLOAD OR
            INSTALLATION PROCESS OR USING THE APPLICATION, AS IT CONTAINS
            IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS AND
            REMEDIES.PLEASE READ THIS MOBILE APPLICATION END-USER LICENSE
            AGREEMENT ("EULA AGREEMENT") CAREFULLY, BEFORE COMPLETING THE
            DOWNLOAD OR INSTALLATION PROCESS OR USING THE APPLICATION, AS IT
            CONTAINS IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS AND
            REMEDIES.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`OVERVIEW`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`This EULA agreement is a binding agreement, entered into by and
            between FarmOR, registered address 3rd floor, KNR Square, 1-60/8, Gachibowli, Hyderabad, Telangana 500032,
            India ("FarmOR Agri Solutions") and you, and is made effective as
            of the date you download, install or use the Application FarmOR
            Partner ("Application") or from the date of your electronic
            acceptance.`}
            </p>

            <p className="mb-2">
              {`The terms "we", "us" or "our" shall refer to FarmOR Agri
            Solutions. The terms "you", "your", or "User" shall refer to any
            individual or entity who accepts this EULA agreement, uses our
            Application, or has access to our Application.`}
            </p>
            <p className="mb-2">
              {`FarmOR Agri Solutions may, in its sole and absolute discretion,
            change or modify this Agreement, and any policies or agreements
            which are incorporated herein, at any time, and such changes or
            modifications shall be effective immediately upon posting. Your
            use of this Application after such changes or modifications have
            been made shall constitute your acceptance of this EULA agreement
            as last revised.`}
            </p>
            <p className="mb-2">
              {` BY DOWNLOADING /INSTALLING /USING THE APPLICATION YOU ACKNOWLEDGE
            THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT. IF YOU DO NOT
            AGREE TO BE BOUND BY THIS EULA AGREEMENT AS LAST REVISED, DO NOT
            DOWNLOAD, INSTALL, USE (OR CONTINUE TO USE) OUR APPLICATION.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`ELIGIBILITY`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`Our Application is available only to Users who can form legally
            binding contracts under the applicable law. By downloading or
            using this Application, you represent and warrant that you are (i)
            at least eighteen (18) years of age, (ii) otherwise recognized as
            being able to form legally binding contracts under applicable law,
            and (iii) are not a person barred from purchasing or using the
            Application e under the laws of the India or other applicable
            jurisdiction.`}
            </p>

            <p className="mb-2">
              {`If you are entering into this EULA agreement on behalf of a
            company or any corporate entity, you represent and warrant that
            you have the legal authority to bind such corporate entity to the
            terms and conditions contained in this EULA agreement, in which
            case the terms “you”, “your”, or “User” shall refer to such
            corporate entity. If you do not have such authority or if you do
            not agree with the terms and conditions of this EULA agreement, do
            not install or use the Application, and you must not accept this
            EULA agreement. If, after your electronic acceptance of this
            Agreement, FarmOR Agri Solutions finds that you do not have the
            legal authority to bind such a corporate entity, you will be
            personally responsible for the obligations contained in this EULA
            agreement.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`LICENSE GRANT`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {` Subject to the terms of this EULA Agreement FarmOR Agri Solutions
            hereby grants you a personal, revocable, worldwide, non-exclusive,
            non-sublicensable, and non-transferable license to use the FarmOR
            Agri Solutions Application on your own, non-commercial use devices
            in accordance with the terms of this EULA agreement. The
            Application is being licensed to you and you hereby acknowledge
            that no title or ownership of the Application is being transferred
            or assigned to you and this EULA agreement is not to be construed
            as a sale of any rights of the Application.`}
            </p>

            <p className="mb-2">
              {`You are permitted to load the FarmOR Agri Solutions Application
            (for example on a mobile, tablet or laptop) under your control.
            You are responsible for ensuring your device meets the minimum
            requirements of the FarmOR Agri Solutions Application.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`RESTRICTIONS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`Without first obtaining the express written consent of FarmOR Agri
            Solutions, you may not assign your rights and obligations under
            this EULA agreement, or redistribute, encumber, sell, rent, lease,
            sublicense or in other way transfer your rights to the
            Application.`}
            </p>
            <p className="mb-2">You are not permitted to:</p>
            <ul className="list-disc pl-4 mb-2">
              <li className="mt-2">
                {`edit, modify, alter, adapt, or otherwise change the whole or any
              part of the FarmOR Agri Solutions Application nor permit the
              whole or any part of the Application to be combined with or
              become incorporated in any other Application or any software,
              nor decompile, disassemble or reverse engineer the Application
              or attempt to do any of the listed actions,`}
              </li>
              <li className="mt-2">
                {`copy, reproduce, duplicate, resell or distribute in any medium
              any part of the Application, except where expressly authorized
              by FarmOR Agri Solutions,`}
              </li>
              <li className="mt-2">
                {`remove or alter FarmOR Agri Solutions trademarks or logos or
              legal notices included in the Application or related assets,`}
              </li>
              <li className="mt-2">
                {`remove, disable, circumvent, or otherwise create or implement
              any workaround to any copy protection, rights management, or
              security features in or protecting the Application,`}
              </li>
              <li className="mt-2">
                {`use the service to try to gain unauthorized access to any
              service, data, account or network by any means,`}
              </li>
              <li className="mt-2">
                {`use the Application in any way which breaches any applicable
              local, national or international law,`}
              </li>
              <li className="mt-2">
                {`use the Application in any way which breaches any applicable
              local, national or international law,`}
              </li>
            </ul>
            <p className="mb-2">
              {`FarmOR Agri Solutions reserves the right to determine in its sole
            discretion what kind of conduct is considered to be in violation
            of the terms of this EULA agreement.`}
            </p>
            <p className="mb-2">
              {`By using our Application you acknowledge and agree that your use
            of the Application, including any content you submit, will comply
            with this EULA agreement and all applicable local, state, national
            and international laws, rules, and regulations.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`INTELLECTUAL PROPERTY`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`No part of this EULA agreement is or should be interpreted as a
            transfer of intellectual property rights. FarmOR Agri Solutions
            shall retain ownership of the Application as originally downloaded
            by you and all subsequent downloads of the Application by you. The
            Application (and the copyright, and other intellectual property
            rights of whatever nature in the Application, including any
            modifications made thereto) are and shall remain the property of
            FarmOR Agri Solutions.`}
            </p>

            <p className="mb-2">
              {`In addition to the general rules above, the provisions in this
            Section apply specifically to your use of FarmOR Agri Solutions
            content used in the Application (FarmOR Agri Solutions content).
            FarmOR Agri Solutions content used in this Application, including
            without limitation the text, scripts, source code, API, graphics,
            photos, sounds, music, videos, and interactive features and the
            trademarks, service marks, and logos contained therein, are owned
            by or licensed to FarmOR Agri Solutions in perpetuity, and are
            subject to copyright, trademark, and/or patent protection.`}
            </p>

            <p className="mb-2">
              {`FarmOR Agri Solutions content is provided to you “as is”, “as
            available” and “with all faults” for your information and
            personal, non-commercial use only and may not be downloaded,
            copied, reproduced, distributed, transmitted, broadcast,
            displayed, sold, licensed, or otherwise exploited for any purposes
            whatsoever without the express prior written consent of FarmOR
            Agri Solutions. No right or license under any copyright,
            trademark, patent or other proprietary right or license is granted
            by this EULA agreement.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            COLLECTION AND USE OF YOUR INFORMATION
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`You acknowledge that when you download, install, or use the
            Application, FarmOR Agri Solutions may use automatic means
            (including, for example, cookies and web beacons) to collect
            information about your Mobile Device and about your use of the
            Application. You also may be required to provide certain
            information about yourself as a condition to downloading,
            installing, or using the Application or certain of its features or
            functionality. All information we collect through or in connection
            with this Application is subject to our Privacy policy. By
            downloading, installing, using, and providing information to or
            through this Application, you consent to all actions taken by us
            with respect to your information in compliance with the Privacy
            Policy.`}
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`UPDATES`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`FarmOR Agri Solutions may from time to time in its sole discretion
              develop and provide Application updates, which may include
              upgrades, bug fixes, patches, other error corrections, and/or new
              features (collectively, including related documentation,
              "Updates"). Updates may also modify or delete in their entirety
              certain features and functionality. You agree that FarmOR Agri
              Solutions has no obligation to provide any Updates or to continue
              to provide or enable any particular features or functionality.
              Based on your Mobile Device settings, when your Mobile Device is
              connected to the internet either:`}
            </p>
            <ul className="list-disc pl-4 mb-2">
              <li className="mt-2">
                {`the Application will automatically download and install all
                available Updates; or`}
              </li>
              <li className="mt-2">
                {`you may receive notice of or be prompted to download and install
                available Updates.`}
              </li>
            </ul>

            <p className="mb-2">
              {`You shall promptly download and install all Updates and
              acknowledge and agree that the Application or portions thereof may
              not properly operate should you fail to do so. You further agree
              that all Updates will be deemed part of the Application and be
              subject to all terms and conditions of this Agreement.`}
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`THIRD-PARTY MATERIALS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`The Application may display, include, or make available
              third-party content (including data, information, applications,
              and other products, services, and/or materials) or provide links
              to third-party websites or services, including through third-party
              advertising ("Third-Party Materials"). You acknowledge and agree
              that FarmOR Agri Solutions is not responsible for Third-Party
              Materials, including their accuracy, completeness, timeliness,
              validity, copyright compliance, legality, decency, quality, or any
              other aspect thereof. FarmOR Agri Solutions does not assume and
              will not have any liability or responsibility to you or any other
              person or entity for any Third-Party Materials. Third-Party
              Materials and links thereto are provided solely as a convenience
              to you, and you access and use them entirely at your own risk and
              subject to such third parties terms and conditions.`}
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {` FARMOR AGRI SOLUTIONS USE OF USER CONTENT`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`The Application may allow you to create content such as videos,
              data, photographs, messages, graphics, text, and other information
              (“User Content”), and to share such User Content with FarmOR Agri
              Solutions or with other applications, sites, including social
              networking sites, as you may designate.`}
            </p>
            <p className="mb-2">
              {`The provisions in this Section apply specifically to FarmOR Agri
              Solutions use of User Content posted to or through the
              Application.`}
            </p>
            <p className="mb-2">
              {`You shall be solely responsible for any and all of your User
              Content or User Content that is submitted by you, and the
              consequences of, and requirements for, distributing it. You agree
              that any User Content that you share does not and will not violate
              third-party rights of any kind, including and without limitation
              any Intellectual Property Rights or rights of publicity and
              privacy.`}
            </p>

            <p className="mb-2">
              {`With Respect to User Content, by posting or publishing User
              Content to or through the Application, you authorize Company to
              use the intellectual property and other proprietary rights in and
              to your User Content to enable inclusion and use of the User
              Content in the manner contemplated by this Application and this
              EULA agreement.`}
            </p>

            <p className="mb-2">
              {`By creating User Content through FarmOR Agri Solutions
              Application, you hereby grant FarmOR Agri Solutions a worldwide,
              non-exclusive, royalty-free, sub-licensable, irrevocable, and
              transferable license to use, reproduce, distribute, prepare
              derivative works of, combine with other works, display, and
              perform your User Content in connection with this Application,
              including without limitation for promoting and redistributing all
              or part of this Application in any media formats and through any
              media channels without restrictions of any kind and without
              payment or other consideration of any kind, or permission or
              notification, to you or any third party. You also hereby grant
              each User of this Application a non-exclusive license to access
              your User Content through this Application, and to use, reproduce,
              distribute, prepare derivative works of, combine with other works,
              display, and perform your User Content as permitted through the
              functionality of this Software and under this EULA agreement.`}
            </p>

            <p className="mb-2">
              {`The above licenses granted by you in your User Content terminate
              within a commercially reasonable time after you remove or delete
              your User Content from this Application. You understand and agree,
              however, that FarmOR Agri Solutions may retain (but not
              distribute, display, or perform) server copies of your User
              Content that have been removed or deleted. The above licenses
              granted by you in your User Content are perpetual and irrevocable.`}
            </p>

            <p className="mb-2">
              {`FarmOR Agri Solutions generally does not pre-screen User Content
              but reserves the right (but undertakes no duty) to do so and
              decide whether any item of User Content is appropriate and/or
              complies with this EULA agreement. FarmOR Agri Solutions may
              remove any item of User Content if it violating this EULA
              agreement, at any time and without prior notice.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`USER SUBMISSIONS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`With Respect to User Submissions, you acknowledge and agree that:`}
            </p>
            <ul className="list-disc pl-4 mb-2">
              <li className="mt-2">
                {`your User Submissions are entirely voluntary,`}
              </li>
              <li className="mt-2">
                {`your User Submissions do not establish a confidential
                relationship or obligate FarmOR Agri Solutions to treat your
                User Submissions as confidential or secret.`}
              </li>
              <li className="mt-2">
                {`FarmOR Agri Solutions has no obligation, either express or
                implied, to develop or use your User Submissions, and no
                compensation is due to you or to anyone else for any intentional
                or unintentional use of your User Submissions.`}
              </li>
            </ul>

            <p className="mb-2">
              {`FarmOR Agri Solutions shall own exclusive rights (including all
              intellectual property and other proprietary rights) to any User
              Submissions provided to the FarmOR Agri Solutions and shall be
              entitled to the unrestricted use and dissemination of any User
              Submissions posted to or through the Software for any purpose,
              commercial or otherwise, without acknowledgment or compensation to
              you or to anyone else.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`DISCLAIMER OF WARRANTIES`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`UNLESS OTHERWISE EXPLICITLY AGREED TO IN WRITING BY FarmOR Agri
              Solutions, APPLICATION IS PROVIDED “AS IS”, “AS AVAILABLE” AND
              “WITH ALL FAULTS” AND DEFECTS AND FarmOR Agri Solutions, MAKES NO
              OTHER WARRANTIES, EXPRESS OR IMPLIED, IN FACT, OR IN LAW,
              INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NON-INFRINGEMENT, OTHER THAN AS SET FORTH IN THIS EULA AGREEMENT.`}
            </p>
            <p className="mb-2">
              {`FarmOR Agri Solutions MAKES NO WARRANTIES ABOUT (I) THE ACCURACY,
              COMPLETENESS, OR CONTENT ON THIS APPLICATION AND ASSUMES NO
              LIABILITY OR RESPONSIBILITY FOR THE SAME. FarmOR Agri Solutions
              MAKES NO WARRANTIES THAT THE OPERATION OF THE APPLICATION WILL BE
              SECURE, ERROR-FREE, OR FREE FROM INTERRUPTION.`}
            </p>
            <p className="mb-2">
              {`NO ORAL OR WRITTEN ADVICE PROVIDED BY FarmOR Agri Solutions OR ANY
              AUTHORIZED REPRESENTATIVE OR THIRD PARTY SHALL CREATE A WARRANTY.
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF, OR LIMITATIONS
              ON, IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE
              STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE
              EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.`}
            </p>

            <p className="mb-2">
              {`THE FOREGOING DISCLAIMER OF REPRESENTATIONS AND WARRANTIES SHALL
              APPLY TO THE FULLEST EXTENT PERMITTED BY LAW AND SHALL SURVIVE ANY
              TERMINATION OR EXPIRATION OF THIS EULA AGREEMENT OR YOUR USE OF
              THIS SITE OR THE SERVICES FOUND AT THIS SITE.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`LIMITATION OF LIABILITY`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, IN NO EVENT
              SHALL FarmOR Agri Solutions, ITS OFFICERS, DIRECTORS, EMPLOYEES,
              AGENTS, AND ALL THIRD-PARTY SERVICE PROVIDERS, BE LIABLE TO YOU OR
              ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL,
              SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING
              ANY DAMAGES THAT MAY RESULT FROM (I) THIS AGREEMENT, (II) THE
              ACCURACY, COMPLETENESS, OR CONTENT ON THIS APPLICATION, (III) OR
              FROM THE FURNISHING, PERFORMANCE, INSTALLATION, OR USE OF THE
              APPLICATION, WHEATHER DUE TO A BREACH OF CONTRACT, BREACH OF
              WARRANTY, OR THE NEGLIGENCE OF FarmOR Agri Solutions OR ANY OTHER
              PARTY, EVEN IF FarmOR Agri Solutions IS ADVISED BEFOREHAND OF THE
              POSSIBILITY OF SUCH DAMAGES.`}
            </p>
            <p className="mb-2">
              {`SOME JURISDICTIONS DO NOT ALLOW A LIMITATION OF LIABILITY FOR
            DEATH, PERSONAL INJURY, FRAUDULENT MISREPRESENTATIONS OR CERTAIN
            INTENTIONAL OR NEGLIGENT ACTS, OR VIOLATION OF SPECIFIC STATUTES,
            OR THE LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO SOME
            OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.
            IN NO EVENT SHALL FarmOR Agri Solutions’S TOTAL LIABILITY TO YOU
            FOR ALL DAMAGES (EXCEPT AS REQUIRED BY APPLICABLE LAW) EXCEED THE
            AMOUNT ACTUALLY PAID BY YOU FOR THE APPLICATION. THIS LIMITATION
            APPLIES, BUT IT IS NOT LIMITED TO ANYTHING RELATED TO THE
            APPLICATION, SERVICES, OR CONTENT MADE AVAILABLE THROUGH THE
            APPLICATION. YOU AGREE THAT THE PROVISIONS IN THIS EULA AGREEMENT
            THAT LIMIT LIABILITY ARE ESSENTIAL TERMS OF THIS EULA AGREEMENT.`}
            </p>
            <p className="mb-2">
              {`THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST
            EXTENT PERMITTED BY LAW AND SHALL SURVIVE ANY TERMINATION OR
            EXPIRATION OF THIS EULA AGREEMENT.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`INDEMNITY`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`You agree to protect, defend, indemnify and hold harmless FarmOR
            Agri Solutions and its officers, directors, employees, agents from
            and against any and all claims, demands, costs, expenses, losses,
            liabilities, and damages of every kind and nature (including,
            without limitation, reasonable attorneys’ fees) imposed upon or
            incurred by FarmOR Agri Solutions directly or indirectly arising
            from (i) your use of the Application; (ii) your violation of any
            provision of this Agreement; and/or (iii) your violation of any
            third-party right, including without limitation any intellectual
            property or other proprietary rights. The indemnification
            obligations under this section shall survive any termination or
            expiration of this Agreement or your use of Application.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`AVAILABILITY OF APPLICATION`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {` Subject to the terms and conditions of this Agreement and our
            policies, we shall use commercially reasonable efforts to attempt
            to provide this Application on 24/7 basis. You acknowledge and
            agree that from time to time this Application may be inaccessible
            for any reason including, but not limited to, periodic
            maintenance, repairs or replacements that we undertake from time
            to time, or other causes beyond our control including, but not
            limited to, interruption or failure of telecommunication or
            digital transmission links or other failures.`}
            </p>
            <p className="mb-2">
              {` You acknowledge and agree that we have no control over the
            availability of this Application on a continuous or uninterrupted
            basis and that we assume no liability to you or any other party
            with regard thereto.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`TERMINATION`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {` This EULA agreement is effective from the date you first download,
            install or use the Application and shall continue until
            terminated. You may terminate this Agreement by deleting the
            Application and all copies thereof from your Mobile Device.`}
            </p>
            <p className="mb-2">
              {`This EULA agreement will also be terminated immediately if you
            fail to comply with any term of this EULA agreement. Upon such
            termination, the licenses granted by this EULA agreement will
            immediately terminate and you agree to stop all access and use of
            the Application. The provisions that by their nature continue and
            survive will survive any termination of this EULA agreement.`}
            </p>
            <p className="mb-2">
              {`FarmOR Agri Solutions reserves the right to cease offering or
            providing Application at any time, for any or no reason, and
            without prior notice. Although FarmOR Agri Solutions makes a great
            effort to maximize the lifespan of the Application, it might be,
            that the Application we offer will be discontinued. If that is the
            case, this EULA agreement will be terminated, and the Application
            will no longer be supported by FarmOR Agri Solutions.`}
            </p>
            <p className="mb-2">
              {`Upon termination, all rights granted to you under this EULA
            agreement will also terminate and you must cease all use of the
            Application and delete all copies of the Application from your
            Mobile Device and account.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`COMPLIANCE WITH LOCAL LAWS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`FarmOR Agri Solutions makes no representation or warranty that all
            the content available on this Application is appropriate in every
            country or jurisdiction and use of this Application from countries
            or jurisdictions where its content is illegal is prohibited. Users
            who choose to use this Software are responsible for compliance
            with all local laws, rules, and regulations.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`GOVERNING LAW`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`This EULA agreement and any dispute or claim arising out of or in
            connection with it or its subject matter or formation shall be
            governed by and construed in accordance with the laws of India, to
            the exclusion of conflict of law rules.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl  mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`TITLES AND HEADINGS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`The titles and headings of this EULA agreement are for convenience
            and ease of reference only and shall not be utilized in any way to
            construe or interpret the agreement of the parties as otherwise
            set forth herein.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`LIMITATION OF TIME TO FILE CLAIMS`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
            RELATING TO THIS AGREEMENT OR THE APPLICATION MUST BE COMMENCED
            WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OTHERWISE
            SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`SEVERABILITY`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`Each covenant and agreement in this EULA agreement shall be
            construed for all purposes to be a separate and independent
            covenant or agreement. If a court of competent jurisdiction holds
            any provision (or portion of a provision) of this EULA agreement
            to be illegal, invalid, or otherwise unenforceable, the remaining
            provisions (or portions of provisions) of this EULA agreement
            shall not be affected thereby and shall be found to be valid and
            enforceable to the fullest extent permitted by law.`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`CONTACT INFORMATION`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">
              {`If you have any questions about this EULA agreement, please
            contact us by email or regular mail at the following address`}
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col   ">
          <h1
            className="mt-2 text-xl lg:text-2xl 2xl:text-3xl mb-2 w-full"
            style={{
              color: "#575DC2",
              fontFamily: "Anton",
              letterSpacing: 1.4,
            }}
          >
            {`FarmOR`}
          </h1>

          <div
            className="text-lg  2xl:text-lg mb-2 opacity-80"
            style={{
              fontFamily: "Montserrat",
              color: "#101010",
            }}
          >
            <p className="mb-2">{`3rd floor, KNR Square, 1-60/8, Gachibowli, Hyderabad, Telangana 500032`}</p>
            <p className="mb-2">{`contact@farmor.ag`}</p>
          </div>
        </motion.div>
      </div>

      <Footer></Footer>
    </div>
  );
}
