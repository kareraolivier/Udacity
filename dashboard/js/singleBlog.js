fetch("https:/karerandela.herokuapp.com/api/v1/blogs", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(
    (json) =>
      (document.getElementById("singleBlog").innerHTML = json.data.blog
        .map(
          (blog) =>
            `
       <div class="blog-post">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <div class="post">
          <img src="/image/singleblog.jpg" alt="single post" />
          <p>
            A white hot river of heat winds around the bottom of a
            doughnut-shaped machine before the searing light jumps up to fill
            the space and vanishes, leaving only darkness. This is the moment
            when a European experiment to reproduce the process powering the
            sun, called fusion power, set a new global energy record. The
            experiment at the Joint European Torus (JET) in Oxford on 21
            December saw a super-hot plasma sustained for 5 seconds, producing a
            record 59 megajoules of heat energy. JET is previous record was 22
            megajoules for less than a second, set in 1997. “It is not an
            unexpected result. It is really the pinnacle of the work that is
            done for years: that yes, it does do what you understood it should
            do. I feel a certain amount of relief,” says team member Volker
            Naulin at EuroFusion, a consortium of fusion research groups. Fusion
            holds the promise of a continuous low carbon power supply without
            the radioactive waste problem of its cousin, nuclear power from
            fission.
          </p>
          <img src="/image/siglepost.jpeg" alt="siglepost" />
          <p>
            A white hot river of heat winds around the bottom of a
            doughnut-shaped machine before the searing light jumps up to fill
            the space and vanishes, leaving only darkness. This is the moment
            when a European experiment to reproduce the process powering the
            sun, called fusion power, set a new global energy record. The
            experiment at the Joint European Torus (JET) in Oxford on 21
            December saw a super-hot plasma sustained for 5 seconds, producing a
            record 59 megajoules of heat energy. JET is previous record was 22
            megajoules for less than a second, set in 1997. “It is not an
            unexpected result. It is really the pinnacle of the work that is
            done for years: that yes, it does do what you understood it should
            do. I feel a certain amount of relief,” says team member Volker
            Naulin at EuroFusion, a consortium of fusion research groups. Fusion
            holds the promise of a continuous low carbon power supply without
            the radioactive waste problem of its cousin, nuclear power from
            fission.
          </p>
          <div class="author">
            <p>Rwitten by: karera Ol</p>
            <p class="date">Published on: 20 march 2020.</p>
          </div>
        </div>
        <div class="comment-card">
          <div class="post-commet">
            <input type="text" placeholder="your name" class="comment-name" id="comment_name" />
            <input type="text" placeholder="comment...." class="comment-textbox" id="comment_text" />
            <button id="comment_button">comment</button>
          </div>
          <div class="comments">
            <div class="single-comment">
              <h3>Nathan</h3>
              <p>
                Naulin at EuroFusion, a consortium of fusion research groups.
                Fusion holds the promise of a continuous low carbon power supply
                without the radioactive waste problem of its cousin, nuclear
                power from fission.
              </p>
              <p class="date">Posted on: 20 march 2020.</p>
            </div>
            <div class="single-comment">
              <h3>Emmanuel</h3>
              <p>
                Naulin at EuroFusion, a consortium of fusion research groups.
                Fusion holds the promise of a continuous low carbon power supply
                without the radioactive waste problem of its cousin, nuclear
                power from fission. the radioactive waste problem of its cousin,
                nuclear power from fission.
              </p>
              <p class="date">Posted on: 20 march 2020.</p>
            </div>
          </div>
        </div>
      </div> 
            `
        )
        .reverse()
        .join(""))
  );
