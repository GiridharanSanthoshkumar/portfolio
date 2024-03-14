import React from 'react';

const CertificateSection = () => {
  // Array of certificate objects
  const certificates = [
    {
      imgUrl: 'Images/webdev.png',
      title:"Full Stack Web Development - MERN Stack",
      description: 'Successfully completed a comprehensive course from udemy focusing on the MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack web development. Throughout the course, I gained practical expertise in building modern web applications, encompassing various aspects such as database design, server-side development, and client-side interface creation. This hands-on experience equipped me with the skills necessary to architect and develop robust, scalable web solutions using industry-standard technologies.',
    },
    {
      imgUrl: 'Images/Milt.png',
      title:"Milt Peak performer Workshop",
      description: 'Completed the Peak Performer Workshop (PPW) led by Daniel Jacob, accredited trainer of MILT Training Foundation. Acquired skills include increased self-confidence, improved public speaking abilities, and enhanced human relations. Techniques learned provided newfound confidence in addressing audiences and overcoming tension. Emphasis on maintaining a positive attitude towards people and situations. Daniel Jacob, alongside qualified trainers, offered expert guidance for personal and professional growth.',
    },{
      imgUrl: 'Images/Ml.png',
      title:"Machine Learning with Python",
      description: 'Completed an extensive Machine Learning with Python course on Coursera, establishing a strong foundation in machine learning principles. Through engaging assignments and projects, I gained hands-on experience in applying various machine learning algorithms to real-world problems. Mastering data preprocessing, model training, and evaluation methodologies equipped me with essential skills for complex data analysis and predictive modeling tasks. This course provided me with the necessary tools and knowledge to confidently tackle machine learning challenges.',
    },
    // Add more certificate objects as needed
  ];

  return (
    <div id="certificate-section" className='certificate-section'>
      <h2 style={{marginBottom: "5rem",
    textAlign: "center",
    color: "whitesmoke",
    fontWeight: "100",
    marginTop: "0px",
    paddingTop: "5rem",
    fontSize: "3rem",
    fontFamily: "Quicksand, sans-serif"}}>My <strong style={{fontFamily: "Quicksand, sans-serif",fontSize: "3rem"}}>Certificates</strong></h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {certificates.map((certificate, index) => (
          <div className="cert-row" key={index} 
>
            <img src={certificate.imgUrl} alt="Certificate" 
          />
            <div className="cert-content">
            <h1>{certificate.title}</h1>
            <p style={{color: "rgba(255, 255, 255, 0.344)",fontSize: "1.25rem",
    paddingRight: "10%",
    lineHeight: "1.5",
    fontWeight: "100"}}>{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
