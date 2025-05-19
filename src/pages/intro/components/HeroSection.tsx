import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import { Button } from "@/shared/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-8 md:mt-12 md:grid md:grid-cols-[1fr_2fr] md:gap-12">
      <div className="relative aspect-square w-1/2 md:w-full">
        <Image
          src="/hamster.png"
          alt=""
          className="rounded-full object-cover"
          fill
          priority
          sizes="(max-width: 768px) 128px, 256px"
        />
      </div>
      <VStack justify="between" gap={8}>
        <VStack gap={4}>
          <h1 className="text-xl font-extrabold md:text-3xl">Jungheon Lee</h1>
          <span>이정헌 / 2001.02.28</span>
          <HStack gap={4}>
            <Button asChild variant="outline">
              <Link href="https://github.com/cutehammond772" target="_blank">
                <SiGithub />
                <span>Github</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.linkedin.com/in/%EC%A0%95%ED%97%8C-%EC%9D%B4-a49698306/"
                target="_blank"
              >
                <Link2Icon />
                <span>LinkedIn</span>
              </Link>
            </Button>
          </HStack>
        </VStack>
        <VStack gap={4} className="font-serif break-keep">
          <p>
            12살 때 우연히 접한 프로그래밍은 내게 새로운 세계를 열어주었습니다.
          </p>
          <p>
            나의 코드로 상상을 현실로 만들어내는 과정에 매료되어 다양한 개발
            분야를 탐색해왔고, 그 여정 속에서 프론트엔드 개발에 깊은 매력을
            발견했습니다.
          </p>
          <p>
            현실의 복잡한 문제를 기술로 깔끔하게 풀어내는 순간마다 느끼는
            성취감이 저를 프론트엔드 엔지니어의 길로 이끌고 있습니다.
          </p>
        </VStack>
      </VStack>
    </div>
  );
}
