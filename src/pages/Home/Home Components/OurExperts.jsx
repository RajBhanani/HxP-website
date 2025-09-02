import { Box, Grid, Grid2, styled, Typography } from '@mui/material';
import React from 'react';
import ExpertCard from '../../../components/ExpertCard';

const StyledBox = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  padding: '70px 50px',
  flexDirection: 'column',
  gap: '70px',
  alignItems: 'center',
});

const OurExperts = () => {
  const data = [
    {
      imgSrc: 'dhaval_jani.jpg',
      name: 'Dhaval Jani',
      title: 'Founder & CEO',
      subtitle: 'HealthX Partner',
      details: (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography fontFamily={'calibri'}>
            As the Founder and CEO of HealthX Partner, Dhaval Jani brings over two decades of experience as a leader in the HealthTech and medical
            device industries. He has worked with Fortune 500 companies launching high-impact and transformative solutions. As a consultant he has
            been instrumental in designing and developing digital therapeutic solutions that improve chronic disease management for multi-disciplinary
            care teams and patients.
          </Typography>
          <Typography fontFamily={'calibri'} marginBottom={'-20px'}>
            Dhaval's expertise spans multiple key areas of the medical technology industry:
          </Typography>
          <ul>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong>Radiology Equipment:</strong> Extensive experience in the installation, maintenance, and business development of devices such
                as CT scanners, fluoroscopy, X-ray, and ultrasound machines.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong>Implantable Cardiac Devices:</strong> He has managed P&L for several generations of cardiac implants (pacemakers,
                defibrillators, heart failure devices) and led techno-clinical teams.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong>Remote Patient Monitoring (RPM):</strong> He has a proven track record in launching new products for hospitals, clinics, and
                home applications, providing sales, training, and ongoing support to boost adoption.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong>Strategic Digital Therapeutic (DTx) Consulting:</strong> He has provided Go-to-Market (GTM) strategy and consulting to R&D
                teams, tech SMEs, and startups, helping to launch a wide range of DTx solutions, including vitals monitoring, wound management,
                surgical navigation, and XR gamified interventions.
              </Typography>
            </li>
          </ul>
          <Typography fontFamily={'calibri'}>
            Dhaval is a firm believer that the right DTx solution can significantly improve care management and patient outcomes. He sees it as an
            invaluable tool for enhancing patient awareness and helping individuals achieve their lifestyle goals in the most cost-effective manner.
          </Typography>
        </Box>
      ),
    },
    {
      imgSrc: 'milan_patel.jpeg',
      name: 'Milan Patel',
      title: 'MD, MBA',
      subtitle: 'Industry Advisor &\n Chief Medical Officer',
      details: (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography fontFamily={'calibri'}>
            Dr. Milan Patel, MD, MBA, is an accomplished physician executive with extensive leadership experience in hospital administration,
            pulmonary medicine, and critical care. Currently serving as Chief Medical Officer at St. Mary’s General Hospital, he has a proven track
            record of improving operational efficiency, clinical quality, and financial performance.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Previously, as Senior Medical Director at CHRISTUS Health, Dr. Patel led successful initiatives in length-of-stay reduction, throughput
            optimization, and revenue growth, resulting in millions in cost savings. His strategic leadership in multidisciplinary collaborations
            improved emergency department efficiency, reduced labor expenses, and enhanced patient care outcomes.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Dr. Patel holds an Executive MBA from Columbia Business School With board certifications in Internal Medicine, Pulmonary Disease, and
            Critical Care Medicine, he combines clinical excellence with strategic leadership to drive hospital and healthcare system transformation.
          </Typography>
        </Box>
      ),
    },
    {
      imgSrc: 'neil_gordon.jpeg',
      name: 'Neil Gordon',
      title: 'Director',
      subtitle: 'Business Development',
      details: (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography fontFamily={'calibri'}>
            Neil is a results-driven healthcare sales leader with over 20 years of experience delivering innovative medical technologies to hospitals,
            clinics, and physician groups nationwide.
          </Typography>
          <Typography fontFamily={'calibri'}>
            With a background that blends business strategy, clinical acumen, and deep product knowledge, Neil thrives at the intersection of
            cutting-edge innovation and patient care. Throughout his career, Neil has successfully launched and grown next-generation cardiac and
            diagnostic solutions, collaborating closely with physicians and care teams to ensure smooth implementation and optimal outcomes. At
            Abbott, he currently manages a territory in the DC Metropolitan Area, driving adoption of technologies like the Aveir leadless pacemaker
            and Jot DX loop recorder. His ability to educate, influence, and support at every stage—from the OR to the boardroom—sets him apart as a
            trusted partner to his clients.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Previously at Medtronic, Neil played a key role in expanding the use of remote monitoring tools and rhythm diagnostic devices, developing
            a deep understanding of hospital workflows, reimbursement dynamics, and compliance requirements. His consultative style and data-backed
            approach consistently led to strong customer retention and revenue growth.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Neil brings an entrepreneurial mindset and a passion for improving patient outcomes through technology. Whether working with start-ups or
            global healthcare brands, he is driven by one goal: helping providers deliver smarter, safer, and more efficient care.
          </Typography>
        </Box>
      ),
    },
    {
      imgSrc: 'vanessa_rios.jpeg',
      name: 'Vanessa Rios',
      title: 'BSN, M.Ed, RN, CCM',
      subtitle: 'Principal Clinical Specialist,\nPatient Outcomes',
      details: (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography fontFamily={'calibri'}>
            Vanessa is a forward-thinking healthcare executive with over 15 years of experience leading innovative clinical programs, driving
            operational excellence, and transforming the delivery of patient care across diverse healthcare settings. With deep expertise in care
            management, telehealth, and clinical operations, Vanessa has consistently delivered sustainable improvements in quality, cost, and access.
          </Typography>
          <Typography fontFamily={'calibri'}>
            She brings a unique combination of frontline clinical knowledge and strategic leadership, having directed large-scale, remote
            interdisciplinary teams, developed physician engagement initiatives, and executed population health programs impacting tens of thousands
            of patients.
          </Typography>
          <Typography fontFamily={'calibri'}>
            At CareFirst Blue Cross Blue Shield, Vanessa managed and successfully implemented a value-based care program that drove considerable
            savings while enhancing collaboration across Accountable Care Organizations.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Her ability to navigate the intersection of policy, technology, and clinical best practices has made her a trusted leader in launching
            scalable telehealth solutions, fostering provider relationships, and mentoring future healthcare professionals. Whether facilitating nurse
            training, improving care coordination, or advocating for underserved populations, Vanessa operates with a relentless focus on equitable,
            patient-centered outcomes.
          </Typography>
          <Typography fontFamily={'calibri'}>
            Vanessa holds two Bachelor of Science degrees in Nursing and Exercise Physiology and a Master of Education. She is a licensed RN in
            multiple states, a certified case manager, and a recognized leader in clinical excellence and health system innovation.
          </Typography>
        </Box>
      ),
    },
    {
      imgSrc: 'praharsh_jani.png',
      name: 'Praharsh Jani',
      subtitle: 'Technical Specialist: Patient Solutions at HealthX Partner (HxP)',
      details: (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography fontFamily={'calibri'}>
            Praharsh is crucial to the on-site implementation and ongoing support of Remote Patient Monitoring (RPM) solutions, in Skilled Nursing
            Facility (SNF) and Assisted Living Facilities (ALF). His role combines a strong technical foundation with an empathetic approach to client
            engagement.
          </Typography>
          <Typography fontFamily={'calibri'} marginBottom={"-20px"}>
            Leveraging his background in audio engineering and expertise in system integration and networking, PJ ensures seamless operation from day
            one. His core responsibilities include:
          </Typography>
          <ul>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong> On-site Hardware and Software Installation:</strong> Ensuring precise setup of devices and associated software within client
                facilities.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong> Technical Troubleshooting & Resolution:</strong> Diagnosing and resolving any technical issues related to RPM systems to
                maintain continuous functionality.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong>Comprehensive Staff Training:</strong> Conducting hands-on training for SNF, ALF staff, drawing on his experience as an
                educator to foster effective learning and adoption.
              </Typography>
            </li>
            <li>
              <Typography fontFamily={'calibri'}>
                <strong> Seamless System Integration:</strong> Working to ensure that HxP's solutions integrate smoothly within the client's existing
                technical environment.
              </Typography>
            </li>
          </ul>
          <Typography fontFamily={'calibri'}>
            Beyond his technical acumen, Praharsh's years as an educator and instructor have honed his exceptional communication and client
            interaction skills, making him adept at translating complex technical information into easily understandable concepts for users. This
            unique combination ensures that patient solutions are not just installed, but successfully adopted and maintained, contributing directly
            to improved patient care.
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <StyledBox id="ourExperts">
      <Box style={{ width: '100%' }}>
        <Typography color="#636262" fontSize={'32px'} fontFamily="Calibri">
          Our Experts
        </Typography>
        <Typography fontSize={'32px'} fontFamily="Calibri" color="#022A72">
          Investors & Industry Advisors
        </Typography>
      </Box>
      <Grid2 container gap={5} sx={{ justifyContent: 'center' }}>
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
