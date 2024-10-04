import Testimonial from "../components/Testimonial";

export default function TestimonialSection() {
  return (
    <>
      <div className="flex w-full max-w-8xl flex-col items-center text-white">
        <div className="flex w-full  max-w-8xl flex-col items-start px-4 sm:px-16">
          <p className="font-basier text-sm  opacity-50">OUR CLIENTS</p>
          <h2 className="mb-12 mt-2 text-center text-4xl font-semibold leading-[1.2] tracking-tight sm:text-4xl">
            Testimonials
          </h2>
        </div>
      </div>
      <div className="masonry max-w-8xl px-4 sm:px-16">
        <Testimonial
          text="After the new website launch one of our hard-to-get leads reached out. That says a lot."
          user="Arvid Winterfeld"
          role="CEO / Qura"
          imageUrl="/images/profiles/arvid.png"
        />
        <Testimonial
          text="Professional team doing a really good job. After the first job I hired them again. "
          user="Jan Eriksson"
          role="CEO / Flexiwaggon & TTS"
          imageUrl="/images/profiles/jan.png"
        />
        <Testimonial
          text="Så jävla snyggt. Stort tack! Alla i gänget är mycket nöjda med hemsidan, och jag har redan fått positiv feedback från kunder. ”Snyggt!” är genomgående vad de säger. Det är superkul."
          user="Magnus Ivarsson"
          role="CEO at MycoMine"
          imageUrl="/images/profiles/magnus.png"
        />
        <Testimonial
          text="Så jävla snyggt. Stort tack! Alla i gänget är mycket nöjda med hemsidan, och jag har redan fått positiv feedback från kunder. ”Snyggt!” är genomgående vad de säger. Det är superkul."
          user="Magnus Ivarsson"
          role="CEO / MycoMine"
          imageUrl="/images/profiles/magnus.png"
        />
        <Testimonial
          text="Professional team doing a really good job. After the first job I hired them again. "
          user="Jan Eriksson"
          role="CEO at Flexiwaggon & TTS"
          imageUrl="/images/profiles/jan.png"
        />
        <Testimonial
          text="After the new website launch one of our hard-to-get leads reached out. That says a lot."
          user="Arvid Winterfeld"
          role="CEO at Qura"
          imageUrl="/images/profiles/arvid.png"
        />

        <Testimonial
          text="Really happy with how clean the new website and brand turned out. Thanks!"
          user="Karthik Laxman"
          role="CEO at Stockholm Water"
          imageUrl="/images/profiles/karthik.png"
        />
        <Testimonial
          text="Professional team doing a really good job. After the first job I hired them again. "
          user="Jan Eriksson"
          role="CEO at Flexiwaggon & TTS"
          imageUrl="/images/profiles/jan.png"
        />
        <Testimonial
          text="Så jävla snyggt. Stort tack! Alla i gänget är mycket nöjda med hemsidan, och jag har redan fått positiv feedback från kunder. ”Snyggt!” är genomgående vad de säger. Det är superkul."
          user="Magnus Ivarsson"
          role="CEO at MycoMine"
          imageUrl="/images/profiles/magnus.png"
        />
        <Testimonial
          text="They totally understood our company and vision. I definitely recommend these guys. Within a week we had our new website up and running, already getting contacted by customers."
          user="Hans Delking"
          role="CEO at Payable"
          imageUrl="/images/profiles/hans.png"
        />
        <Testimonial
          text="Professional team doing a really good job. After the first job I hired them again. "
          user="Jan Eriksson"
          role="CEO at Flexiwaggon & TTS"
          imageUrl="/images/profiles/jan.png"
        />
        <Testimonial
          text="After the new website launch one of our hard-to-get leads reached out. That says a lot."
          user="Arvid Winterfeld"
          role="CEO at Qura"
          imageUrl="/images/profiles/arvid.png"
        />
      </div>
    </>
  );
}
