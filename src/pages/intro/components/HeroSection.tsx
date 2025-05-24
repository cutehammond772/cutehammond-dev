import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import H1 from "@/shared/components/Primitive/H1";
import Paragraph from "@/shared/components/Primitive/Paragraph";
import Text from "@/shared/components/Primitive/Text";
import { Button } from "@/shared/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <VStack gap={8}>
      <HStack gap={8}>
        <Image
          src="/hamster.png"
          alt=""
          className="rounded-full"
          width={128}
          height={128}
        />
        <VStack gap={4}>
          <H1>Jungheon Lee</H1>
          <Text>이정헌 / 2001.02.28</Text>
          <HStack gap={4}>
            <Button asChild variant="outline">
              <Link href="https://github.com/cutehammond772" target="_blank">
                <SiGithub />
                <Text>Github</Text>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.linkedin.com/in/%EC%A0%95%ED%97%8C-%EC%9D%B4-a49698306/"
                target="_blank"
              >
                <Link2Icon />
                <Text>LinkedIn</Text>
              </Link>
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <VStack gap={4} className="font-serif break-keep">
        <Paragraph>
          12살 때 우연히 접한 프로그래밍은 내게 새로운 세계를 열어주었습니다.
        </Paragraph>
        <Paragraph>
          나의 코드로 상상을 현실로 만들어내는 과정에 매료되어 다양한 개발
          분야를 탐색해왔고, 그 여정 속에서 프론트엔드 개발에 깊은 매력을
          발견했습니다.
        </Paragraph>
        <Paragraph>
          현실의 복잡한 문제를 기술로 깔끔하게 풀어내는 순간마다 느끼는 성취감이
          저를 프론트엔드 엔지니어의 길로 이끌고 있습니다.
        </Paragraph>
      </VStack>
    </VStack>
  );
}
