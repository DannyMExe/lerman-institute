"use client";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
`;

const Quote = styled.h3`
  font-size: 28px;
  font-style: italic;
  margin-bottom: 0;
`;

const QuoteAuthor = styled.p`
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 26px;
  margin-bottom: 40px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  margin-right: 20px;
`;

const ImageDescription = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  color: gray;

  span {
    font-size: 12px;
    font-weight: 300;
  }
`;

const HomePage = () => {
  return (
    <MainContainer>
      <Title>Lerman Institute for the Advancement of Science</Title>
      <Quote>
        "I hear and I forget; I see and I remember; I do and I understand.”
      </Quote>
      <QuoteAuthor>Chinese proverb</QuoteAuthor>
      <Description>
        The Lerman Institute believes strongly in this proverb, that is why we
        incorporate visualization and art in the teaching of science. Students
        remember and understand abstract scientific concepts best by creating
        their own artistic projects. Through this process, students take an
        active role in the learning process, instead of only being passive
        observers. The students can produce visualization projects using the
        media of their choice, from computer animation (High Tech) to dance and
        drama (No Tech). These projects can be used as an alternative assessment
        method. This method has been proven successful with underprivileged
        students around the globe.
      </Description>
      <ImageContainer>
        <Image src="/polution.jpg" alt="A Student's art on pollution" />
        <ImageDescription>Image 1 description</ImageDescription>
      </ImageContainer>
      <Description>
        The 21st Century is truly the century of science and technology. If we
        will not make science and technology accessible to all, we will form a
        two-class society, divided not by royalty or economic status, but by
        knowledge of science and technology. It is my tenet in life that science
        education is a human right that belongs to all. Therefore, it is
        essential that we employ every method possible to make chemistry
        accessible to all in the 21st Century.
      </Description>
      <ImageContainer>
        <Image
          src="/societyDivided.png"
          alt="Drawing respresenting High tech and no tech societies divided"
        />
        <ImageDescription>
          A two class society
          <br />
          <span>
            drawn by a student at the Science Institute, Columbia College
          </span>
        </ImageDescription>
      </ImageContainer>
    </MainContainer>
  );
};

export default HomePage;
