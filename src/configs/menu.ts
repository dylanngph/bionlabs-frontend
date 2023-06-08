import {IoLogoDiscord , IoLogoTwitter, IoLogoGithub} from 'react-icons/io5'
import {FaTelegram} from 'react-icons/fa'

export const MENU_HEIGHT = 82;

export const menu_items = [
    {
        label: 'Projects',
        href: '/projects',
        key: 'projects',
    },
    {
        label: 'About',
        href: '/about',
        key: 'about',
    },
    {
        label: 'Resources',
        href: '/resources',
        key: 'resources',
    },
    {
        label: 'Contact',
        href: '/contact',
        key: 'contact',
    }
]

export const social_items = [
    {
        label: 'Twitter',
        href: '',
        icon: IoLogoTwitter,
        key: 'twitter',
    },
    {
        label: 'Github',
        href: '',
        icon: IoLogoGithub,
        key: 'github',
    },
    {
        label:  'Discord',
        href: '',
        icon: IoLogoDiscord,
        key: 'discord',
    },
    {
        label: 'Telegram',
        href: '',
        icon: FaTelegram,
        key: 'telegram',
    }
]