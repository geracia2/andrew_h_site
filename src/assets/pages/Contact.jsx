import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Box, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './Contact.module.css';

const contactMe = [
  { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export default function Contact() {
  return (
    // <Paper shadow="md" radius="lg">
      <div className={classes.wrapper1}>
        <div className={classes.contacts} style={{  }}>
          <Text fz="lg" fw={700} className={classes.heading} c="#fff">
            Contact information
          </Text>
          {contactMe.map((item) => (
            <div key={item.title2} className={classes.wrapper2}>
              <Box mr="md">
                <item.icon style={{ width: rem(24), height: rem(24) }} />
              </Box>
              <div>
                <Text size="xs" className={classes.title2}>{item.title}</Text>
                <Text className={classes.description}>{item.description}</Text>
              </div>
            </div>
          ))}
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.heading}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    // </Paper>
  );
}