import { Box, Grid, Grid2, styled, Typography } from "@mui/material";
import React from "react";
import ExpertCard from "../../../components/ExpertCard";

const StyledBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  padding: "70px 50px",
  flexDirection: "column",
  gap: "70px",
  alignItems: "center",
});

const OurExperts = () => {
  const data = [
    {
      imgSrc: "dhaval_jani.jpeg",
      name: "Dhaval Jani",
      title: "Founder & CEO",
      subtitle: "HealthX Partner",
      details: `Dhaval Jani brings two decades of experience driving digital health, therapeutics, R&D, engineering, mixed reality and MedTech solutions for Fortune 500 companies. He has been instrumental in shaping the company’s strategic direction, onboarding industry advisors, experts, to formulating tech partnerships.\nIn previous roles, as Head of Digital Health and Practice Director for engineering solutions, he has provided  thought leadership for the piloted technologies. Their contribution was recognized with awards such as the TATA Group InnoVista and TCS Innovation awards. He has a proven track record of providing consulting services to several bio-pharma and medtech companies, developing go-to-market strategies and delivering double-digit growth as a P&L leader.\nHe also brings rich experiences from working with Medtronic (Cardiovascular) and Philips (Radiology Systems). He has held positions such as Clinical Specialist, Regional Sales, Product Manager, and Customer Support Engineer. He has been instrumental in launching numerous implantable cardiac devices, delivery systems, remote patient monitoring, and radiology systems, working closely with specialty physicians, surgeons, and referral physicians across patient care pathways.
`,
    },
    {
      imgSrc: "milan_patel.jpeg",
      name: "Dr. Milan Patel",
      title: "MD, MBA",
      subtitle: "Industry Advisor & Chief Medical Officer",
      details: `Dr. Milan Patel, MD, MBA, is an accomplished physician executive with extensive leadership experience in hospital administration, pulmonary medicine, and critical care. Currently serving as Chief Medical Officer at St. Mary’s General Hospital, he has a proven track record of improving operational efficiency, clinical quality, and financial performance.\nPreviously, as Senior Medical Director at CHRISTUS Health, Dr. Patel led successful initiatives in length-of-stay reduction, throughput optimization, and revenue growth, resulting in millions in cost savings. His strategic leadership in multidisciplinary collaborations improved emergency department efficiency, reduced labor expenses, and enhanced patient care outcomes.\nDr. Patel holds an Executive MBA from Columbia Business School  With board certifications in Internal Medicine, Pulmonary Disease, and Critical Care Medicine, he combines clinical excellence with strategic leadership to drive hospital and healthcare system transformation.`,
    },
    {
      imgSrc: "neil_gordon.jpeg",
      name: "Neil Gordon",
      title: "Director",
      subtitle: "Business Development",
      details: `Neil is a results-driven healthcare sales leader with over 20 years of experience delivering innovative medical technologies to hospitals, clinics, and physician groups nationwide.\nWith a background that blends business strategy, clinical acumen, and deep product knowledge, Neil thrives at the intersection of cutting-edge innovation and patient care. Throughout his career, Neil has successfully launched and grown next-generation cardiac and diagnostic solutions, collaborating closely with physicians and care teams to ensure smooth implementation and optimal outcomes. At Abbott, he currently manages a territory in the DC Metropolitan Area, driving adoption of technologies like the Aveir leadless pacemaker and Jot DX loop recorder. His ability to educate, influence, and support at every stage—from the OR to the boardroom—sets him apart as a trusted partner to his clients.\nPreviously at Medtronic, Neil played a key role in expanding the use of remote monitoring tools and rhythm diagnostic devices, developing a deep understanding of hospital workflows, reimbursement dynamics, and compliance requirements. His consultative style and data-backed approach consistently led to strong customer retention and revenue growth.\nNeil brings an entrepreneurial mindset and a passion for improving patient outcomes through technology. Whether working with start-ups or global healthcare brands, he is driven by one goal: helping providers deliver smarter, safer, and more efficient care.
`,
    },
    {
      imgSrc: "vanessa_rios.jpeg",
      name: "Vanessa Rios",
      title: "Principal Clinical Specialist",
      subtitle: "Patient Outcomes",
      details: `Vanessa is a forward-thinking healthcare executive with over 15 years of experience leading innovative clinical programs, driving operational excellence, and transforming the delivery of patient care across diverse healthcare settings. With deep expertise in care management, telehealth, and clinical operations, Vanessa has consistently delivered sustainable improvements in quality, cost, and access.\nShe brings a unique combination of frontline clinical knowledge and strategic leadership, having directed large-scale, remote interdisciplinary teams, developed physician engagement initiatives, and executed population health programs impacting tens of thousands of patients.\nAt CareFirst Blue Cross Blue Shield, Vanessa managed and successfully implemented a value-based care program that drove considerable savings while enhancing collaboration across Accountable Care Organizations.\nHer ability to navigate the intersection of policy, technology, and clinical best practices has made her a trusted leader in launching scalable telehealth solutions, fostering provider relationships, and mentoring future healthcare professionals. Whether facilitating nurse training, improving care coordination, or advocating for underserved populations, Vanessa operates with a relentless focus on equitable, patient-centered outcomes.\nVanessa holds two Bachelor of Science degrees in Nursing and Exercise Physiology and a Master of Education. She is a licensed RN in multiple states, a certified case manager, and a recognized leader in clinical excellence and health system innovation.`,
    },
  ];

  return (
    <StyledBox id="ourExperts">
      <Box style={{ width: "100%" }}>
        <Typography color="#636262" fontSize={"32px"} fontFamily="Calibri">
          Our Experts
        </Typography>
        <Typography fontSize={"32px"} fontFamily="Calibri" color="#022A72">
          Investors & Industry Advisors
        </Typography>
      </Box>
      <Grid2 container gap={5} sx={{ justifyContent: "center" }}>
        {data.map((expert) => (
          <ExpertCard
            key={expert.name}
            img={expert.imgSrc}
            name={expert.name}
            title={expert.title}
            subtitle={expert.subtitle}
            details={expert.details}
          />
        ))}
      </Grid2>
    </StyledBox>
  );
};

export default OurExperts;
