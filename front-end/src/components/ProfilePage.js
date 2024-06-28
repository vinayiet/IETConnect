import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const uploadedPapers = [
  { title: 'C Language Paper', date: '2023-06-20' },
  { title: 'DBMS Exam Paper', date: '2023-06-22' },
  // Add more papers as needed
];

const ProfilePage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
        <Grid item xs={12}>
          <Box sx={{ p: 4 }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    alt="User Profile"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h4">Vinay Sharma</Typography>
                  <Typography variant="subtitle1">vinayiet435@gmail.com</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6">Uploaded Papers</Typography>
              <List>
                {uploadedPapers.map((paper, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={paper.title}
                        secondary={`Uploaded on: ${paper.date}`}
                      />
                      <Button variant="contained" color="primary">
                        Download
                      </Button>
                    </ListItem>
                    {index < uploadedPapers.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ProfilePage;
