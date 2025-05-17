import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-8">
      <div className="relative aspect-square">
        <Image
          alt=""
          src="/hamster.svg"
          fill
          className="fill-foreground object-contain"
          unoptimized
        />
      </div>
      <div className="flex grow flex-col justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">Jungheon Lee</h1>
          <p className="font-mono italic">이정헌 / 2001.02.28</p>
        </div>
        <div className="flex flex-col gap-2 break-keep">
          <p>
            12살 때 우연히 접한 프로그래밍은 내게 새로운 세계를 열어주었습니다.
          </p>
          <p>
            나의 코드로 상상을 현실로 만들어내는 과정에 매료되어 다양한 개발
            분야를 탐색해왔고, 그 여정 속에서 프론트엔드 개발에 깊은 매력을
            발견했습니다.
          </p>
          <p>
            현실의 복잡한 문제를 기술로 '깔끔하게' 풀어내는 순간마다 느끼는
            성취감이 저를 프론트엔드 엔지니어의 길로 이끌고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
