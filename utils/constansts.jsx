import { MdDashboard } from "react-icons/md";
import { BsFillPostcardFill } from "react-icons/bs";
import { TbWorldCheck, TbExplicitOff } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export const sideNav = [
    {
        id: 1,
        element: 'dashboard',
        path: '',
        icon: <MdDashboard />
    },
    {
        id: 2,
        element: 'manage blogs',
        path: 'blogs',
        icon: <BsFillPostcardFill />
    },
    {
        id: 3,
        element: 'check urls',
        path: 'urls',
        icon: <TbWorldCheck />
    },
    {
        id: 4,
        element: 'confirmed explicit',
        path: 'explicit',
        icon: <TbExplicitOff />
    },
    {
        id: 5,
        element: 'newsletters',
        path: 'newsletters',
        icon: <IoMdMail />
    },
    {
        id: 6,
        element: 'manage profile',
        path: 'profile',
        icon: <FaUser />
    },
]

export const dashboardNav = [
    {
        id: 2,
        element: 'blog posts',
        path: 'blogs',
        icon: <BsFillPostcardFill />,
        count: 34
    },
    {
        id: 3,
        element: 'Urls registered',
        path: 'urls',
        icon: <TbWorldCheck />,
        count: 2
    },
    {
        id: 4,
        element: 'confirmed explicit',
        path: 'explicit',
        icon: <TbExplicitOff />,
        count: 3
    },
    {
        id: 5,
        element: 'newsletter subscribers',
        path: 'newsletters',
        icon: <IoMdMail />,
        count: 15
    },
]

export const blogPosts = [
    {
        id: 1,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 2,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 3,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 4,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 5,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 6,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    },
    {
        id: 7,
        title: 'This is a sample blog to show',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus, nisi nesciunt atque impedit necessitatibus. Dolor totam eius maiores, itaque error assumenda cupiditate odit asperiores dolorem at fugiat aut velit iure, placeat debitis! Amet aliquid nihil veritatis aut iusto odio accusantium. Vitae, eos earum! Ut saepe iure explicabo quas fugiat quam quod esse, sequi autem necessitatibus ea officiis consequatur, repudiandae corrupti culpa, aliquid minima alias? A fuga delectus voluptatem quibusdam, optio quos laborum est nihil maiores tempora modi quisquam eum, ex quae placeat quidem magnam officia numquam, veritatis accusamus consequuntur vitae minima. Consectetur pariatur eum cum hic! Molestiae cumque atque repellat voluptatem doloribus cum voluptas voluptatibus, ipsa, cupiditate, dolorem quam enim commodi labore ullam. Optio minus repudiandae eius saepe commodi distinctio, nostrum ea error eos nulla unde itaque aliquam libero quaerat porro totam dignissimos asperiores laudantium veniam repellendus dicta dolor. Obcaecati atque fugiat ducimus dolorum eum quo a delectus repellat asperiores dolor, placeat repellendus, at quam voluptatibus voluptates omnis impedit molestias laboriosam minus quod aperiam amet hic. Ex beatae perspiciatis dolor libero eveniet iste nihil reprehenderit pariatur maxime unde, ad reiciendis mollitia accusamus debitis, eum consequuntur id voluptate inventore, corporis hic iusto corrupti vitae! Quibusdam delectus architecto consequatur labore eveniet perspiciatis illum nesciunt vitae odio dolores beatae debitis omnis totam eos, eum voluptatem sint eligendi veniam ducimus porro quam! Velit, dolore delectus ut iste distinctio non, tenetur quae accusamus eligendi omnis porro, tempora assumenda error aspernatur ipsum reprehenderit ad vel nesciunt dolorum facilis quibusdam adipisci deleniti repudiandae. Laudantium dicta, dolore explicabo, asperiores ipsam tempora ut a repellendus quibusdam temporibus accusantium delectus, deserunt modi. Ipsum consequatur voluptate id est distinctio culpa mollitia, harum voluptatum cum eveniet pariatur nihil repellat fugit sed rerum. Molestias, ullam. Adipisci fugiat omnis corrupti explicabo cumque aperiam dolorem vel delectus dolores voluptas facere illo natus, est commodi blanditiis illum, quisquam voluptate eaque itaque numquam pariatur. Tempore incidunt doloribus ducimus recusandae, vero ipsam voluptas neque possimus necessitatibus repellat impedit?',
        postedBy: 'Gabriel Ayodele',
        datePost: 'Aug. 23, 2023',
        image: '/images/join-us.jpg'
    }
]