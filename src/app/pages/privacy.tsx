"use client";

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import {
    Container,
    Typography,
    CssBaseline,
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6200ea',
        },
        secondary: {
            main: '#03dac6',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#333333',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h3: {
            fontWeight: 700,
            color: '#6200ea',
        },
        h5: {
            fontWeight: 600,
            color: '#03dac6',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                },
            },
        },
    },
});

export const metadata: Metadata = {
    title: 'Privacy Policy - Reef',
};

const PrivacyPolicy = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" component="h1" align="center" gutterBottom>
                        Privacy Policy
                    </Typography>
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <Typography variant="body1" paragraph>
                            Welcome to Reef! This privacy policy explains how we collect,
                            use, and protect your information when you use our app.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Information Collection
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Reef does not collect any personal information from its users. However, we
                            use Firebase Analytics to collect anonymized data about app usage. This helps
                            us improve user experience by understanding how users interact with the app.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Additionally, we serve advertisements via Admob Ads, which may collect
                            non-personal information such as device type, location, and other data to
                            display relevant ads.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Firebase Analytics
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use Firebase Analytics to gather insights about how our users interact
                            with Reef. Firebase Analytics collects anonymized data, including user actions
                            and in-app events, to help us enhance the app&apos;s performance and usability.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The data collected through Firebase Analytics is used solely to improve the
                            app and is not shared with any third parties.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Admob Ads
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Reef uses Admob Ads to serve advertisements. Admob may collect certain
                            non-personal information to display relevant ads. Please refer to
                            Admob&apos;s privacy policy for more details on how they collect and use data.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The information collected by Admob is used solely for ad-serving purposes
                            and is not shared beyond what is necessary for the operation of the ad
                            network.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 50, delay: 0.6 }}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Changes to This Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may update this privacy policy from time to time. Any changes will
                            be posted on this page. We encourage you to review this policy
                            periodically to stay informed about how we are protecting your
                            information.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If we make significant changes to the policy, we will provide a more
                            prominent notice.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 50, delay: 0.8 }}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions about this privacy policy, please contact us
                            at rayensbai2@gmail.com. We are committed to addressing your
                            questions and resolving any concerns you may have.
                        </Typography>
                    </motion.div>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
};

export default PrivacyPolicy;
