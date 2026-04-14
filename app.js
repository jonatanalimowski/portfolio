/* biblioteka tsparticles */

const loadParticles = async () => {
    await tsParticles.load({
        id: "tsparticles",
        options: {
            fullScreen: {
                enable: false,
                zIndex: -2
            },
            particles: {
                number: {
                    value: 10,
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080
                    }
                },
                color: {
                    value: "#fff"
                },
                shape: {
                    type: "image",
                    options: {
                        image: {
                            src: "./assets/sakura_platek.svg",
                            width: 100,
                            height: 100
                        }
                    }
                },
                opacity: {
                    value: { min: 0.3, max: 0.8 }
                },
                size: {
                    value: { min: 10, max: 20 }
                },
                move: {
                    enable: true,
                    speed: 10,
                    direction: "bottom-right",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    },
                    trail: {
                        enable: false
                    }
                },
                rotate: {
                    value: { min: 0, max: 360 },
                    animation: {
                        enable: true,
                        speed: 5
                    }
                },
                tilt: {
                    enable: true,
                    value: { min: 0, max: 360 },
                    animation: {
                        enable: true,
                        speed: 5
                    }
                },
                roll: {
                    enable: true,
                    speed: { min: 5, max: 15 }
                },
                wobble: {
                    enable: true,
                    distance: 10,
                    speed: 10
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 2
                    }
                }
            },
        }
    });
};

loadParticles();
