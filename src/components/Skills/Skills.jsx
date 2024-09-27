import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
    const technicalSkills = [
        "JavaScript",
        "React",
        "Flutter",
        "Node.js",
        "Express.js",
        "TypeScript",
        "SQLite",
        "Redux",
        "TailWind CSS"
    ];

    const softSkills = [ 
        "Teamwork and Collaboration",
        "Communication Skills",
        "Presentation skills",
        "Leadership",
        "Interpolation skills",
        "Time management",
        "Problem-solving",
        "Adaptability",
        "Work Ethic",
        "Critical Thinking",
        "Creativity",
        


    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Skills 📚💡</h1>
            <div style={styles.skillsSection}>
            <ScrollAnimation animateIn="fadeIn"> <div style={styles.skillsGroup}>
                    <h2 style={styles.groupTitle}>Technical Skills</h2>
                    <div style={styles.skillsContainer}>
                        {technicalSkills.map((skill, index) => (
                            <div key={index} style={styles.skillCard}>
                                <h3 style={styles.skillName}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>  </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn"> <div style={styles.skillsGroup}>
                    <h2 style={styles.groupTitle}>Soft Skills</h2>
                    <div style={styles.skillsContainer}>
                        {softSkills.map((skill, index) => (
                            <div key={index} style={styles.skillCard}>
                                <h3 style={styles.skillName}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div> </ScrollAnimation>
            </div>
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
        fontSize: '28px',
        color: "black",
        marginBottom: "20px",
        textAlign: "center",
        fontWeight: 900,
    },
    skillsSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    skillsGroup: {
        margin: "20px 0",
        width: "100%",
        maxWidth: "600px",
    },
    groupTitle: {
        fontSize: "1.5rem",
        color: "#555",
        marginBottom: "10px",
        textAlign: "start",
        fontStyle: "italic",
        fontWeight: 900,
    },
    skillsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    skillCard: {
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        padding: "10px",
        width: "160px",
        textAlign: "center",
        transition: "transform 0.3s",
        cursor: "pointer",
    },
    skillName: {
        fontSize: "1.1rem",
        color: 'rgb(18, 111, 250)',
        fontWeight: 500,
    }
};

export default Skills;
