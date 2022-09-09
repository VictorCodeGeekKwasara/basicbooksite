import React from 'react'
import Layout from '../components/layout'
import { Typography, Card, TextField } from '@mui/material'
import {formBox,container, formComponents} from "./contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <div className={container}>
        <Card
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            backgroundColor: "#001712",
          }}
          noValidate
          autoComplete="off"
          className={formBox}
        >
          <div className={formComponents}>
            <TextField
              label="Size"
              id="outlined-size-small"
              defaultValue="Email"
              size="large"
            />
            <TextField
              label="Size"
              id="outlined-size-normal"
              defaultValue="Message"
              multiline="true"
              minRows="7"
            />
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Contact