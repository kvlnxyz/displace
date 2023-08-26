"use client";

export default function Window(props) {
  return (
    <a href={props.url} target="_blank">
      <div className="flex flex-col w-96  bg-[#0F0F0F] space-y-4 px-2 py-2 mx-1 my-1">
        <div>{props.title}</div>
        <img
          src={
            props.image
              ? props.image
              : "https://i.insider.com/64e62a424c17ff0019bb16bc?width=1200&format=jpeg"
          }
          alt="Article image"
        />
      </div>
    </a>
  );
}
