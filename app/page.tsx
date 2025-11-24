"use client";
import { Smiley } from "@phosphor-icons/react";
export default function Home() {
  return (
    <div className="bg-primary-100 xs:bg-primary-300 tiny:bg-secondary-100 sm:bg-secondary-200 md:bg-secondary-300 lg:bg-secondary-400 xl:bg-secondary-500 2xl:bg-secondary-600 3xl:bg-secondary-700 4xl:bg-secondary-800 min-h-screen flex flex-col items-center justify-center font-sans dark:bg-black gap-4 p-4">
      <div className="text-display-1">Display1</div>
      <div className="text-display-2">Display2</div>
      <div className="text-display-3">Display3</div>
      <div className="text-display-4">Display4</div>
      <div className="text-display-5">Display5</div>

      <div className="text-heading-1">Heading1</div>
      <div className="text-heading-2">Heading2</div>
      <div className="text-heading-3">Heading3</div>
      <div className="text-heading-4">Heading4</div>
      <div className="text-heading-5">Heading5</div>
      <div className="text-heading-6">Heading6</div>

      <div className="text-label-1">Label1</div>
      <div className="text-label-2">Label2</div>
      <div className="text-label-3">Label3</div>
      <div className="text-label-4">Label4</div>
      <div className="text-label-5">Label5</div>

      <div className="w-full rounded-lg border p-4">
        <div>
          <div className="text-label-2 mb-2">Body Examples</div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="body-xl-400">Body XL 400</div>
            <div className="body-xl-500">Body XL 500</div>
            <div className="body-xl-600">Body XL 600</div>

            <div className="body-large-400">Body Large 400</div>
            <div className="body-large-500">Body Large 500</div>
            <div className="body-large-600">Body Large 600</div>

            <div className="body-medium-400">Body Medium 400</div>
            <div className="body-medium-500">Body Medium 500</div>
            <div className="body-medium-600">Body Medium 600</div>

            <div className="body-small-400">Body Small 400</div>
            <div className="body-small-500">Body Small 500</div>
            <div className="body-small-600">Body Small 600</div>

            <div className="body-tiny-400">Body Tiny 400</div>
            <div className="body-tiny-500">Body Tiny 500</div>
            <div className="body-tiny-600">Body Tiny 600</div>

            <div className="body-xs-400">Body XS 400</div>
            <div className="body-xs-500">Body XS 500</div>
            <div className="body-xs-600">Body XS 600</div>
          </div>
        </div>
        <Smiley></Smiley>
      </div>
    </div>
  );
}
