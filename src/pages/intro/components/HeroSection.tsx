import Image from "next/image";

import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import LinkButton from "@/shared/components/LinkButton";
import H1 from "@/shared/components/Primitive/H1";
import Paragraph from "@/shared/components/Primitive/Paragraph";
import Text from "@/shared/components/Primitive/Text";

export default function HeroSection() {
  return (
    <VStack gap={8}>
      <hr />
      <HStack gap={8}>
        <div className="relative aspect-square h-30 rounded-full">
          <Image src="/hamster.png" alt="" fill className="rounded-full" />
        </div>
        <VStack gap={4}>
          <H1>Jungheon Lee</H1>
          <Text>이정헌 / 2001.02.28</Text>
          <HStack gap={4}>
            <LinkButton
              href="https://github.com/cutehammond772"
              target="_blank"
            >
              <Text>Github</Text>
            </LinkButton>
            <LinkButton
              href="https://www.linkedin.com/in/%EC%A0%95%ED%97%8C-%EC%9D%B4-a49698306/"
              target="_blank"
            >
              <Text>LinkedIn</Text>
            </LinkButton>
          </HStack>
        </VStack>
      </HStack>
      <VStack gap={4}>
        <Paragraph>
          프로그래밍 하나면 뭐든지 만들수 있고, 사람들을 편하게 만들 수 있다는
          기대감. 12살 적에 불타올랐던 그 열기는 아직까지도 활활 빛나고
          있습니다.
        </Paragraph>
        <Paragraph>
          저는 프론트엔드 엔지니어로서, 사용자의 시선에서 문제를 파악하고,
          엔지니어의 시선에서 문제를 해결합니다.
        </Paragraph>
      </VStack>
      <hr />
    </VStack>
  );
}
