import React, { useState } from "react";
import {
  Segment,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
  Divider,
  Header
} from "semantic-ui-react";

const Contact = () => {
  const [value, setValue] = useState("");

  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" }
  ];

  const handleChange = (e, { value }) => setValue({ value });

  return (
    <Segment style={{ marginTop: 80 }}>
      <Grid columns={2} stackable style={{ padding: 40 }}>
        <Divider vertical>Or</Divider>

        <Grid.Row>
          <Grid.Column>
            <h1>Photographer</h1>
            <Header>Alain Green Photography</Header>

            <p>agphotophy@alaingreen.com</p>
            <p>954-822-2560</p>
          </Grid.Column>

          <Grid.Column style={{ paddingLeft: 50 }}>
          <h1>Send Me A Note</h1>
            <Header>Message</Header>
            <Form>
              <Form.Group widths={2}>
                <Form.Input size="big" label="Name" placeholder="Super Model" />
                <Form.Input
                  size="big"
                  label="Email"
                  placeholder="model@agency.com"
                />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.TextArea
                  size="big"
                  style={{ width: 460 }}
                  label="About"
                  placeholder="How can I help you..."
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Contact;
