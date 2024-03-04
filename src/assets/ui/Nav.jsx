import { Menu, Group, Center, Burger, Container, Image, Button, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  {
    link: '#1',
    label: 'Voice Over',
    links: [
      { link: '/commercial', label: 'Commercial' },
      { link: '/eLearning', label: 'eLearning' },
      { link: '/eExplainers', label: 'Explainers' },
    ],
  },
  { link: '/studio', label: 'Studio' },
  { link: '/podcast', label: 'Winging It Podcast' },
  { link: '/resume', label: 'Resume' },
  { link: '/contact', label: 'Contact' },

];

export default function Nav() {
  // burger open/close
  const [opened, { toggle }] = useDisclosure(false);

  // map the links
  const items = links.map((link) => {
    // if we have fold downs map those with this:
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link to={item.link} className={classes.link}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    // if we have fold down menus make them the following
    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          {/* menu target is the fold down title */}
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link to={link.link} key={link.label} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  const mobileNav = (
    <Menu shadow="md" width={200} opened={opened} onChange={toggle} position="bottom" offset={50} >
      <Menu.Dropdown>
        <Menu.Item>
          {items}
        </Menu.Item>
        
      </Menu.Dropdown>
    </Menu>
  )

  return (
    <header className={classes.header}>
      <Container size="md">
        {/* desktop nav */}
        <div className={classes.inner}>
          <Image h={90} src='.\images\Logo_1_tansp_white.png' />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          {/* mobile nav */}
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {opened &&
            <>
              {/* <div style={{ border: 'solid 5px red' }}> */}
                {mobileNav}
              {/* </div> */}
            </>
          }
        </div>
      </Container>
    </header>
  );
}
