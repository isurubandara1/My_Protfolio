import React from "react";

function Experience() {
    const experiences = [
        {
            company: "CodSoft",
            logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/Aq20eV79zLfpXV6b/1685789339697-YrDL60zzRBfzM6Wr.jpg", // Replace with actual logo URL
            role: "Mobile Application Developer Virtual Internship",
            duration: "2024 - 2024 · Less than a year",
            location: "West Bengal, India · Remote",
            description:
                "During this virtual internship, I developed three Flutter apps: a Personal Expense Tracker, a To-Do List, and a Recipe App. This experience enhanced my skills in cross-platform mobile development, state management, UI/UX design, and API integration, while also improving my problem-solving abilities, time management, and version control using GitHub."
        },
        {
            company: "OREL IT",
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGX3SyKS3EEyg/company-logo_200_200/company-logo_200_200/0/1630640418238/orel_it_logo?e=2147483647&v=beta&t=dBRB7A9TV_cG2zASPieJFuYKvFm-OJ4jAuR7Y2zrTaQ", // Replace with actual logo URL
            role: "Quality Specialist",
            duration: "Jan 2021 - May 2021 · 5 mos",
            location: "On-site",
            description:
                "I effectively handled issues and managed my time, completing tasks with accuracy and timeliness while collaborating closely with my team and supporting my peers."
        },
        {
            company: "Bank of Ceylon",
            logo: "https://www.asia-pages.com/attach/product__i0s_1__1700.jpg", // Replace with actual logo URL
            role: "Bank Assistant",
            duration: "2020 - 2021 · 1 yr",
            location: "Kurunegala District, North Western Province, Sri Lanka · On-site",
            description:
                "I successfully managed transactions with precision, resolved account issues efficiently, and built strong customer relationships, contributing to the smooth operation of the branch and achieving high customer satisfaction."
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Experience</h1>
            {experiences.map((experience, index) => (
                <div key={index} style={styles.experienceCard}>
                    <img src={experience.logo} alt={`${experience.company} logo`} style={styles.logo} />
                    <div style={styles.details}>
                        <h2 style={styles.role}>{experience.role}</h2>
                        <p style={styles.company}>{experience.company}</p>
                        <p style={styles.duration}>{experience.duration}</p>
                        <p style={styles.location}>{experience.location}</p>
                        <p style={styles.description}>{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "2.5rem",
        color: "#333",
        marginBottom: "20px",
        textAlign: "center",
    },
    experienceCard: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        padding: "20px",
        maxWidth: "900px",
        width: "100%",
        transition: "transform 0.3s",
    },
    logo: {
        width: "100px",
        height: "100px",
        marginRight: "20px",
        borderRadius: "8px",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    role: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333",
    },
    company: {
        fontSize: "1.2rem",
        color: "#666",
    },
    duration: {
        fontSize: "1rem",
        color: "#888",
    },
    location: {
        fontSize: "1rem",
        color: "#888",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
        lineHeight: "1.5",
    }
};

export default Experience;
