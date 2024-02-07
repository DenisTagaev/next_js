import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
        <Image
            src="/images/52962878118_0458a01c85_o.jpg"
            alt="Denis profile picture"
            className="border-4 border-black mt-7
            dark:border-slate-500 drop-shadow-xl
            shadow-black rounded-full mx-auto"
            width={150}
            height={150}
            priority={true}
        />
    </section>
  )
}
