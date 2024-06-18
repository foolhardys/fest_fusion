import Image from "next/image";
import React from "react";
import image from "@/components/shared/assets/home-feat-blog-sample.png";
import { ArrowDownIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";

const SingleBlog = () => {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden mb-10 p-4 w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <Image src={image} alt="Blog Post Image" className="md:w-full w-[70%] rounded-md"/>
      <div className="p-4 md:w-full w-[70%]">
        <h2 className="text-5xl font-semibold mb-4">Blog Post Title</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          distinctio natus mollitia ducimus nemo quae provident assumenda
          suscipit nisi modi laudantium, ipsa vitae nostrum aliquid, accusamus
          dicta deserunt, culpa porro dolores. Modi eius animi dolor vel fugit
          libero harum provident recusandae reiciendis est mollitia illo
          laboriosam accusantium voluptates, molestias natus, optio totam
          repellat. Illo consectetur ullam sunt aperiam aliquid, eius provident
          ipsa porro quam quis inventore nisi dolorem harum! Doloribus
          repellendus, rerum alias reprehenderit est earum necessitatibus
          distinctio laudantium numquam deleniti. Similique corrupti pariatur
          dolores, fugiat magnam ab tenetur ipsam. Assumenda tempora ipsa eaque
          accusantium quia ipsam, harum odit dolor dolorum laboriosam incidunt
          expedita, earum molestias, temporibus ipsum accusamus voluptatibus vel
          saepe repellat facere autem? Quia animi, molestias quos tempora
          corrupti laudantium, unde sapiente ipsam sint iste repudiandae.
          Exercitationem laboriosam aspernatur pariatur enim, voluptas saepe
          illo, minima, dignissimos perferendis quos sint ullam expedita rem
          vero delectus molestiae in quidem. Tempora ratione tempore sunt? Nisi
          autem quibusdam sequi natus! Eaque rerum commodi quibusdam ut,
          similique reprehenderit fuga quae dolores magnam sunt natus accusamus,
          quam nihil. Amet totam quasi expedita pariatur distinctio maiores
          illum eius magni explicabo consequatur. Corporis nemo ducimus commodi,
          eius unde tenetur? Ab adipisci nisi soluta dolores exercitationem
          perspiciatis magni ipsam? Provident laudantium corporis dignissimos
          eos tenetur in repellendus, doloribus impedit nostrum aspernatur
          commodi voluptate odio assumenda, hic beatae suscipit aliquam nobis!
          Ea repudiandae animi fugit adipisci itaque ut cum, cumque harum
          explicabo quos aliquam nisi pariatur necessitatibus deleniti nemo
          saepe, consequatur, ab sint ratione nulla eum! A, ipsam!
        </p>
        <div className="flex items-center gap-1">
          <a
            href="#"
            className=" hover:text-primary hover:underline mr-2 flex gap-1 items-center"
          >
            <BookmarkFilledIcon />
            Read Blog
          </a>
          <span className="text-gray-400 text-sm">Published on - May 16, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
