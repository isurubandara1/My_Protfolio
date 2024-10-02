import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Education() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Add a resize event listener to update isMobile when the screen is resized
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={{ ...styles.title, marginLeft: isMobile ? "0px" : "100px" }}>
                    Educational Background 🎓
                </h1>
            </div>

            <section style={{ ...styles.educationSection, paddingLeft: isMobile ? '0px' : '120px' }}>
                <div style={styles.container}>
                    <ScrollAnimation animateIn="fadeIn">
                        <div style={{ ...styles.educationItem, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/5/5a/Logo-SUSL.png"
                                alt="Sabaragamuwa University"
                                style={{ ...styles.eduImage, marginRight: isMobile ? '0' : '30px', marginBottom: isMobile ? '20px' : '0' }}
                            />
                            <div style={styles.eduDetails}>
                                <h3 style={styles.eduTitle}>BSc. (Hons) in Computing & Information Systems</h3>
                                <p style={styles.eduDetailsSub}>Sabaragamuwa University of Sri Lanka</p>
                                <p style={styles.eduDetailsSub}>2021 – 2025</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn">
                        <div style={{ ...styles.educationItem, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDfVb669z1bbFyGrKaUfkWS_jnekQ-S46_A&s"
                                alt="Maliyadeva Model College"
                                style={{ ...styles.eduImage, marginRight: isMobile ? '0' : '30px', marginBottom: isMobile ? '20px' : '0' }}
                            />
                            <div style={styles.eduDetails}>
                                <h3 style={styles.eduTitle}>G.C.E. Advanced Level (Physical Stream)</h3>
                                <p style={styles.eduDetailsSub}>Maliyadeva Model College</p>
                                <p style={styles.eduDetailsSub}>2015 – 2018</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}

// Styles (CSS in JS approach)
const styles = {
    page: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
    },
    title: {
        fontSize: "1.7rem",
        color: "#333",
        marginBottom: "10px",
        fontWeight: 900,
    },
    container: {
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    educationSection: {
        paddingTop: '40px',
    },
    educationItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
    },
    eduImage: {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '10%',
    },
    eduDetails: {
        flexGrow: 1,
    },
    eduTitle: {
        fontSize: '1.3rem',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    eduDetailsSub: {
        fontStyle: 'italic',
        color: 'rgb(18, 111, 250)',
        fontWeight: 900,
    },
};

export default Education;
