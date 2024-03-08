import {
  Menu,
  Group,
  Burger,
  Container,
  Image,
  rem,
  ActionIcon
} from '@mantine/core';
import {
  IconChevronDown,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandTwitch
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  {
    link: '#1',
    label: 'Voice Over',
    links: [
      { link: '/voiceOver', label: "What's the deal?" },
      { link: '/commercial', label: 'Commercial' },
      { link: '/eExplainers', label: 'Explainers' },
      { link: '/characters', label: 'Characters' },
      { link: '/eLearning', label: 'eLearning' },
      { link: '/audioDrama', label: 'Audio Drama' },
    ],
  },
  { link: '/podcast', label: 'Winging It Podcast' },
  { link: '/resume', label: 'Resume' },
  { link: '/about', label: 'About Me and Studio' },
  { link: '/contact', label: 'Contact' },

];

export default function Nav() {

  // burger open/close
  const [opened, { toggle }] = useDisclosure(false);

  // links into menu items
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
            <a href={link.link} className={classes.link} onClick={(event) => event.preventDefault()} >
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown size="0.9rem" stroke={1.5} />
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

  const socialMedia = (
    <Container className={classes.inner}>
      <Group justify="space-around" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle" component='a' href="https://www.linkedin.com/in/andrewhartmanvo/" target="_blank">
          <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle" component='a' href="https://www.youtube.com/channel/UCAMlYN8vT418x6MBxlnyDeA" target="_blank">
          <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle" component='a' href="https://www.instagram.com/hartblam/" target="_blank">
          <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  )

  return (
    <header className={classes.headerBar}>
      <Container size="md">
        {/* desktop Nav */}
        <div className={classes.inner}>
          <Link to='/'><Image h={90} src='.\images\Logo_1_tansp_white.png' /></Link>
          <div className={classes.stackNav}>
            {socialMedia}
            <Group gap={5} visibleFrom="sm" className={classes.inner}>{items}</Group>
          </div>
          {opened ?
            (<>
              {/* mobile dropdown Nav */}
              <Menu shadow="md" width={200} opened={opened} position="bottom" offset={20}  >
                <Menu.Target>
                  <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    {items}
                  </Menu.Item>
                  {/* {socialMedia} */}
                </Menu.Dropdown>
              </Menu>
            </>) : (<>
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </>)
          }
        </div>
      </Container>
    </header >
  );
}
