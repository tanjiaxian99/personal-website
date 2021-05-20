import "./App.css";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
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
      console.log(entry);
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
      <Header />
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
