import Testimonial from "../components/Testimonial";

export default function TestimonialSection() {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-1 flex-col gap-4">
        <Testimonial
          text="After the new website launch one of our hard-to-get leads reached out. That says a lot."
          user="Arvid Winterfeld"
          role="CEO at Qura"
          imageUrl="/images/profiles/arvid.png"
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
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <Testimonial
          text="Så jävla snyggt. Stort tack! Alla i gänget är mycket nöjda med hemsidan, och jag har redan fått positiv feedback från kunder. ”Snyggt!” är genomgående vad de säger. Det är superkul."
          user="Magnus Ivarsson"
          role="CEO at MycoMine"
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
      </div>
      <div className="flex flex-1 flex-col gap-4">
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
      </div>
      <div className="flex flex-1 flex-col gap-4">
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
    </div>
  );
}
