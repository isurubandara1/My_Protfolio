import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Education() {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>Educational Background 🎓</h1>
            </div>

            <section style={styles.educationSection}>
                <div style={styles.container}>

                    <ScrollAnimation animateIn="fadeIn">
                        <div style={styles.educationItem}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/5/5a/Logo-SUSL.png"
                                alt="Sabaragamuwa University"
                                style={styles.eduImage}
                            />
                            <div style={styles.eduDetails}>
                                <h3 style={styles.eduTitle}>BSc. (Hons) in Computing & Information Systems</h3>
                                <p style={styles.eduDetailsSub}>Sabaragamuwa University of Sri Lanka</p>
                                <p style={styles.eduDetailsSub}>2021 – 2025</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" >
                        <div style={styles.educationItem}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDfVb669z1bbFyGrKaUfkWS_jnekQ-S46_A&s"
                                alt="Maliyadeva Model College"
                                style={styles.eduImage}
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
        fontSize: '28px',
        marginBottom: '10px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    educationSection: {
        paddingLeft: '50px',
        paddingTop: '40px',
    },
    educationItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px',
        flexDirection: 'row',
    },
    eduImage: {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '10%',
        marginRight: '30px',
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
    '@media screen and (maxWidth: 768px)': {
        educationItem: {
            flexDirection: 'column',
            textAlign: 'center',
        },
        eduImage: {
            marginBottom: '20px',
            marginRight: '0',
        },
        eduTitle: {
            fontSize: '1.25rem',
        },
    },
};

export default Education;
