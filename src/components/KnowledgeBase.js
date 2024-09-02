import * as React from 'react';
import { Box, Grid, Paper, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const qaData = [
  { question: 'How to reset my password?', answer: 'Go to settings, click on "Password", and follow the instructions.' },
  { question: 'How to update my profile?', answer: 'Go to your profile page, click "Edit Profile", and save changes.' },
  { question: 'How to contact support?', answer: 'You can reach out to our support team via the "Help" section.' },
  { question: 'How to track my order?', answer: 'Visit the "Orders" section and click on the order you want to track.' },
];

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredQA, setFilteredQA] = React.useState(qaData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredQA(
      qaData.filter((qa) =>
        qa.question.toLowerCase().includes(query) || qa.answer.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Box sx={{ flexGrow: 1, width: 'auto', padding: '20px' }}>
      <Paper
        sx={{
          p: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Knowledge Base"
          inputProps={{ 'aria-label': 'search knowledge base' }}
          value={searchQuery}
          onChange={handleSearch}
        />
      </Paper>
      <Grid container spacing={2}>
        {filteredQA.map((qa, index) => (
          <Grid item xs={12} key={index}>
            <Paper sx={{ padding: '15px', marginBottom: '10px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {qa.question}
              </Typography>
              <Typography variant="body1">{qa.answer}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KnowledgeBase;
