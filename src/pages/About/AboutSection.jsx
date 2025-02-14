import React from "react"
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const AboutSection = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Container style={{ padding: '30px' }}>

        <h2>Irawan Aji Pangestu</h2>
        <p>Web Developer</p>

        <Button variant="dark"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            Click Me!
        </Button>
        <Collapse in={open}>
            <div style = {{ width: '50%', margin: '4px' }} >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </Collapse>
    </Container>
    </>
  );
}

export default AboutSection;