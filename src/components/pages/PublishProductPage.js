import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import axios from 'axios';
import Layout from '../Layout';

const publishProductFormInitialState = {
  title: '',
  description: '',
  brand: '',
  price: '',
  image: '',
};

function PublishProductPage() {
  const [form, setForm] = useState(publishProductFormInitialState);

  const onSubmit = () => {
    axios.post('http://localhost:3017/add-product', { productData: { ...form, price: Number(form.price) } })
      .then(setForm(publishProductFormInitialState))
      .catch((error) => console.log('Error:', error));
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">

        <Box p={4}>
          <Typography variant="h5" fontWeight="bold">
            Publish product
          </Typography>
        </Box>
        <Box m={2} width={400}>
          <Box>
            <TextField
              fullWidth
              id="title"
              label="title"
              variant="standard"
              value={form.title}
              onChange={(event) => {
                setForm({ ...form, title: event.target.value });
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="description"
              label="description"
              variant="standard"
              value={form.description}
              onChange={(event) => {
                setForm({ ...form, description: event.target.value });
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="brand"
              label="brand"
              variant="standard"
              value={form.brand}
              onChange={(event) => {
                setForm({ ...form, brand: event.target.value });
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="price"
              label="price"
              variant="standard"
              type="number"
              value={form.price}
              onChange={(event) => {
                setForm({ ...form, price: event.target.value });
              }}
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              id="image"
              label="image"
              variant="standard"
              value={form.image}
              onChange={(event) => {
                setForm({ ...form, image: event.target.value });
              }}
            />
          </Box>
        </Box>
        <Box mt={3}>
          <Button variant="contained" onClick={onSubmit}>Publish</Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default PublishProductPage;
