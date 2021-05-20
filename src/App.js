import "./App.css";
import { useEffect, useRef, useState } from "react";
import Hi from "./components/Hi.js";

function App() {
  // State to track whether a page should show
  const [show, setShow] = useState({
    p1: false,
  });

  // References to pages
  const p1Ref = useRef(null);

  function callback(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setShow({ p1: true });
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 1,
  });

  useEffect(() => {
    observer.observe(p1Ref.current);
  }, [p1Ref]);

  return (
    <div className="container">
      <p style={{ fontSize: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam
        atque ratione iure voluptatum dolore dolorum aut omnis iusto
        consequuntur consectetur quam enim vero similique labore quaerat odio
        nam architecto veniam unde facilis aperiam, eum ipsum saepe? Doloribus
        deserunt nobis incidunt ratione rerum eos harum quae, unde recusandae
        quia expedita adipisci ut est delectus quisquam in labore tenetur
        pariatur ad? Doloribus animi recusandae odit cupiditate architecto?
        Tempora, voluptatum ut! Labore saepe ad magnam nobis magni veniam
        assumenda ab ipsum, praesentium perferendis obcaecati tempore
        necessitatibus aliquid nostrum sint, consequuntur laboriosam vel
        molestiae sed, quam eligendi aliquam earum? Itaque odit eligendi
        consectetur aliquid natus maiores dolorem possimus excepturi voluptatum
        quae laboriosam ab, dolores facilis, porro nisi molestiae? Perferendis,
        nam eius! Corporis, pariatur suscipit! Architecto cupiditate delectus
        natus magnam dolore quos minus voluptas nihil voluptatum voluptate quas
        doloribus quibusdam aperiam, inventore laboriosam dignissimos! Cumque
        quae cum laboriosam beatae repellendus? Corrupti, ea commodi eligendi
        sit est voluptate tenetur culpa dolore consequuntur aspernatur, porro
        pariatur nesciunt recusandae nemo doloribus possimus optio deleniti.
        Consequatur temporibus illum fuga porro quasi ratione officiis natus ab,
        amet ut pariatur, accusantium voluptate et soluta cupiditate quaerat
        libero tempora eos quis rem! Repudiandae repellat inventore tenetur
        deserunt enim quae quam fugit suscipit mollitia sequi. Suscipit aut ad
        eveniet quae quos temporibus at excepturi, provident id assumenda unde
        animi explicabo libero repudiandae, error placeat cumque distinctio
        magnam totam. Quas perspiciatis, nihil totam nulla iste aliquam,
        doloremque est tempore explicabo reiciendis et maxime odit. Quibusdam
        nisi facere amet blanditiis perferendis ut dignissimos nihil accusantium
        vel est pariatur saepe libero molestiae in assumenda esse nam architecto
        consequatur magni nostrum eum exercitationem, hic earum! Fugiat
        veritatis perferendis ea ipsum labore laborum ducimus blanditiis,
        similique, quidem distinctio, alias aspernatur beatae. Culpa magnam
        saepe perferendis ipsa expedita eveniet corporis consectetur voluptates
        non nobis reiciendis magni, recusandae iure temporibus rerum facere
        placeat eius vel. Atque, unde id? Perferendis, eius fugit! Quo molestiae
        laudantium atque natus, recusandae dignissimos. Tempora ab veritatis
        voluptas quis, iusto magni debitis sint, eius earum amet a perspiciatis
        eos beatae ipsam necessitatibus repellendus eligendi quam, cumque
        provident? Perspiciatis, quibusdam. Nemo eaque minus at dicta quos est
        nobis porro. Vero, ipsam repellendus! Molestiae est nemo dolores
        exercitationem amet ullam laborum optio nihil impedit iusto qui tempore
        iste soluta facere vitae harum labore dolore cupiditate rerum, explicabo
        repellendus numquam maiores mollitia? Possimus in nisi tenetur, aliquam
        ipsam nesciunt, excepturi laudantium enim, iure non harum soluta quis a
        molestias maxime? Qui itaque culpa cum est. Ratione enim, ad dolore
        consequuntur suscipit voluptatibus saepe nam hic facere, quam dolor,
        porro non! Debitis provident sunt veniam voluptates harum reiciendis
        mollitia. Ducimus omnis reiciendis nihil dolor laboriosam cum eaque
        aperiam obcaecati tempora illum eius placeat voluptates, eveniet dolorem
        adipisci, maiores doloribus doloremque qui sunt sit? Molestias adipisci,
        iste explicabo, aut repellendus maxime dolore excepturi quis aperiam
        totam, architecto quasi at repellat cupiditate assumenda accusamus
        facere. Nihil amet dolores recusandae aspernatur placeat fugit a totam
        explicabo nesciunt vitae officia laborum asperiores praesentium,
        voluptatibus perferendis eveniet minima deleniti eum nemo? Sunt,
        molestias eius!
      </p>
      <Hi animate={show.p1} ref={p1Ref} />
      <p style={{ fontSize: "30px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio
        adipisci nam ab aut. Nostrum ipsam doloribus hic, nesciunt
        necessitatibus sit voluptatem veniam voluptate sunt magni quam facere
        quasi beatae eaque quod provident, vitae in obcaecati ducimus odit id.
        Autem quo, eligendi labore assumenda fuga debitis doloremque! Doloremque
        similique incidunt eligendi at quisquam hic ad, voluptas eius voluptate
        temporibus nostrum. Neque aspernatur sunt laborum quibusdam quo nihil
        accusamus qui impedit, delectus iure rerum, et officiis aut id nostrum.
        Fugit quo cum neque dolor? Suscipit, illum? Amet velit rem fuga iste, id
        asperiores magni quisquam assumenda. Sed illo totam ipsum iusto. Dolorum
        fugiat minima voluptatem repellat praesentium hic. Recusandae dicta
        expedita quibusdam optio! Adipisci iusto soluta quaerat quod
        reprehenderit? Perspiciatis odio, voluptas quas adipisci maiores
        blanditiis ullam, reprehenderit architecto nihil qui iusto magnam eos
        incidunt praesentium? Maiores quas modi iste ipsam beatae, voluptatum
        non quos quo, et error omnis natus, corporis dolores aliquam! Rem
        repellendus soluta magni repudiandae consequatur minus? Ut esse
        molestias obcaecati amet molestiae rem dolores iste recusandae quaerat,
        delectus illum dolorum ducimus voluptas eaque ratione laudantium. Sit
        aperiam ex, pariatur quas iusto ut quam eos doloribus iste, asperiores
        distinctio, consequatur assumenda placeat laboriosam incidunt ullam fuga
        possimus? Numquam, quae earum et illum recusandae culpa. Nam quidem
        sapiente laboriosam repudiandae aperiam pariatur autem nesciunt est,
        numquam aut facere explicabo soluta dignissimos saepe? Voluptatum
        mollitia quibusdam consequatur ex facere repellendus debitis deleniti
        unde iste est provident, magni impedit voluptatibus veniam doloremque
        alias in, odit quam perferendis. Odio necessitatibus corporis aliquid.
        Eius obcaecati, numquam quod perspiciatis exercitationem earum error?
        Accusamus molestiae voluptates earum incidunt ex, impedit vel quod
        explicabo vero ab enim numquam nulla neque eveniet ut quidem minima,
        voluptatum ullam dolorem perferendis totam eos commodi odio. Voluptate,
        numquam ratione! Beatae, ea. Totam iste eveniet quisquam placeat odio
        similique, ipsam veniam aliquam eaque recusandae saepe, eos praesentium
        eius. Voluptas sapiente eius amet eum quibusdam? Perspiciatis nam dolore
        at, saepe ducimus quibusdam fuga, tempora porro, reiciendis fugit
        maiores totam obcaecati odit placeat temporibus accusantium distinctio?
        Cupiditate repellendus veniam, laudantium dolorem error aliquid ducimus
        ad explicabo illo. Adipisci esse ea fugit quos, excepturi cupiditate hic
        consequatur velit voluptate totam laborum in ipsam dolore, repellendus
        ab natus a unde perferendis omnis sint ut. Odit aliquam incidunt
        repellat. Corporis itaque quo eum possimus accusantium explicabo, cumque
        repellat praesentium esse unde, voluptas perferendis, similique illo
        ducimus? Aliquam perferendis at a pariatur iste, incidunt, cupiditate
        veritatis quas molestiae ratione consequatur dolorum. Autem nisi
        necessitatibus assumenda praesentium suscipit mollitia excepturi optio?
        Veritatis neque deserunt corrupti mollitia. Harum libero quibusdam
        perspiciatis suscipit perferendis quidem laborum consequuntur
        exercitationem atque odit aliquam minus ducimus corrupti provident,
        minima tenetur eum aliquid et alias porro nobis. Quaerat dicta eius
        eveniet nostrum dolorum est illum laboriosam necessitatibus asperiores
        suscipit, animi molestias sequi architecto ullam atque delectus. Ea
        maiores, praesentium odit nam commodi ad quia sequi tempore obcaecati!
        Vero, rerum? Maiores tempora culpa error dolor fuga officia ratione
        numquam. Omnis aperiam suscipit tempora ipsam sit sunt nesciunt nulla
        iste, explicabo facilis commodi corrupti blanditiis quisquam.
      </p>
    </div>
  );
}

export default App;
