import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  PinterestLogoIcon,
  RedditLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function SocialIcons() {
  return (
    <div className="flex items-center">
      <p className="body-small-400 text-white">Follow us : </p>
      <div className="flex items-center gap-3">
        <Link href={"https://www.twitter.com/"} target="_blank">
          <TwitterLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <FacebookLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
        <Link href={"https://www.pinterest.com/"} target="_blank">
          <PinterestLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
        <Link href={"https://www.reddit.com/"} target="_blank">
          <RedditLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
        <Link href={"https://www.youtube.com/"} target="_blank">
          <YoutubeLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <InstagramLogoIcon size={16} weight="fill" className="text-white" />
        </Link>
      </div>
    </div>
  );
}
