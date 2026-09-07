const siteContent = {
  // Replace placeholders with your verified team details, media paths, and links.
  team: {
    name: "Aztec Robotics",
    number: 31174,
    school: "Mendota High School",
    location: "Mendota, California",
    rookieYear: 2025,
    league: "NorCal FTC Central Valley League",
    description:
      "Aztec Robotics is FTC Team #31174 from Mendota High School. FIRST records list the team as a 2025 rookie from Mendota, California, competing in the NorCal FTC Central Valley League. We are building our identity through robot design, match strategy, programming, and the discipline of showing up ready to compete.",
  },
  stats: [
    { label: "Team Number", value: 31174, suffix: "" },
    { label: "Rookie Season", value: 2025, suffix: "" },
    { label: "2025 Match Record", value: 19, suffix: "-11-0" },
    { label: "2025 Official Events", value: 5, suffix: "" },
  ],
  robot: {
    description:
      "ACE was developed through collective design, CAD, fabrication, testing, and iteration. The portfolio documents four core engineering areas: a mecanum drivetrain, a custom turret, geared intake mechanisms, and a multi-stage intake designed for fast vectoring.",
    specs: [
      {
        title: "ACE / 2025 Robot",
        copy: "The 2025 competition platform documented in the team's FTC engineering portfolio.",
      },
      {
        title: "Mecanum Drivetrain",
        copy: "The team selected mecanum wheels for precise movement and strafing. The GoBILDA starter bot uses a 1:1 bevel gear configuration, four 312 RPM motors, and 8 mm x 8 mm ball bearings. The design was chosen for controlled movement, torque transfer, and calibration accuracy.",
      },
      {
        title: "Custom Turret",
        copy: "The turret uses a geared ring, a pinion gear, and a 5203 312 RPM GoBILDA motor. Its 360-degree range supports rapid firing, odometry tracking, and autonomous driving. The stack-bearing design was 3D printed to match the robot's proportions.",
      },
      {
        title: "Gearing Mechanisms",
        copy: "The intake uses a 2:1 bevel gear ratio with a 5203 Series Yellow Jacket planetary motor. A dual-mode servo, 40-tooth pinion, and 276-tooth rack create a 6.9:1 ratio for the shooter, increasing torque and enabling rapid firing with better control.",
      },
      {
        title: "Multi-stage Intake",
        copy: "The documented V4 intake combines bootleg and small gecko wheels with a soft elastic grip. The team tested different intake variations and moved from a 2:1 ratio to a 1:2 ratio after identifying motor overheating. The final design improved rotation, spacing, and artifact transfer into the shooter.",
      },
      {
        title: "Testing + Lessons Learned",
        copy: "Testing exposed gear misalignment, wheel lock-up, motor overheating, spacing constraints, and wire-tangle risks. The team improved bearing contact, adjusted gear spacing, changed intake gearing, and refined the design through repeated CAD and real-life measurements.",
      },
      {
        title: "Localization System",
        copy: "The team used Pinpoint Localizer, Swing Arm Odometry, a mecanum encoder, and Limelight 3A. Odometry provides the robot pose, while Trig-based coordinate correction and Limelight 3A fusion help relocalize the robot when odometry drifts.",
      },
      {
        title: "Autonomous Programming",
        copy: "The robot was programmed in Java using Pedro Pathing to build autonomous paths and functions. Objectives included close- and far-zone starting poses, 15+ artifacts in 30 seconds, leaving the launch line every time, and alliance synchronization for scoring or parking.",
      },
      {
        title: "Driver Control",
        copy: "Driver-control enhancements included direct odometry localization, Limelight 3A correction, lookup-table points for easier shooting, and shooting while moving so the driver could move around the map and shoot simultaneously.",
      },
    ],
  },
  buildProcess: [
    { name: "IDEATE", copy: "Round-robin brainstorming across mechanics, coding, strategy, and CAD." },
    { name: "DESIGN", copy: "Turn team ideas into CAD models, trajectories, mechanisms, and scoring plans." },
    { name: "BUILD", copy: "Build, wire, and iterate from starter bot concepts toward V5 ACE." },
    { name: "PROGRAM", copy: "Create classes, autonomous paths, localization, lookup tables, and driver controls." },
    { name: "TEST", copy: "Run trial-and-error tests, measure performance, find errors, and improve." },
    { name: "COMPETE", copy: "Use fast cycles, consistent scoring, alliance synchronization, and strategy." },
  ],
  achievements: [
    {
      year: "2025",
      title: "1st Inspire Award",
      meta: "Central Valley League Tournament / FIRST FTC Event Web",
    },
    {
      year: "2025",
      title: "Winning Alliance - 1st Team Selected",
      meta: "Central Valley League Tournament / FIRST FTC Event Web",
    },
    {
      year: "2025",
      title: "1st Sustain Award",
      meta: "NorCal Regional Championship / FIRST FTC Event Web",
    },
    {
      year: "2025",
      title: "NorCal Regional Championship - Gold Division",
      meta: "Official event appearance / FIRST FTC Event Web",
    },
    {
      year: "2026",
      title: "Season Awaits",
      meta: "???",
    },
  ],
  projects: [
    {
      title: "Mecanum Drivetrain",
      description: "Design must-haves included mecanum wheels, motor-over-wheel packaging, two bevel gear pairs, and 8 mm x 8 mm ball bearings. Pros included strafing and optimized torque transfer; tradeoffs included alignment precision, bearing maintenance, and limited mechanism space.",
    },
    {
      title: "Turret Engineering",
      description: "The custom turret provides rotational freedom and minimum drivetrain movement while staying secured to the drivebase. Its complex CAD, hyper-specific alignments, and real-life measurements made it one of the team's defining engineering challenges.",
    },
    {
      title: "Gearing Mechanisms",
      description: "The team used 2:1 gearing for the intake, then developed a dual pinion gear and rack system for the hood angle servo. The updated design increased torque value, maintained temperature consistency, and improved control during rapid shooting.",
    },
    {
      title: "Intake Iteration",
      description: "The intake evolved through research, testing, and lessons learned. The V4 design uses bootleg wheels and small gecko wheels to improve grip and rotation, while its three stages support transfer, transport, and vectoring.",
    },
    {
      title: "Autonomous + Localization",
      description: "The team combined Pedro Pathing, Pinpoint/Odometry, and Limelight 3A fusion to pursue a 30-second autonomous period, reliable launch-line exits, close and far starting poses, and accurate X/Y heading position.",
    },
    {
      title: "Programming + Driver Control",
      description: "The control system added direct odometry localization, lookup-table shooting points, and shooting while moving. The goal was to let drivers move around the field while maintaining easier, more consistent shots.",
    },
    {
      title: "Brainstorming + Strategy",
      description: "The team used round-robin brainstorming, documented scoring and collection data, and refined a strategy around quick cycle times, fast throughput, alliance synchronization, and consistent scoring.",
    },
    {
      title: "Outreach + Collaboration",
      description: "The team expanded its localization and engineering context through a meeting at Pinterest Corporation in San Francisco with formal MHS alumnus and MIT graduate Juventino Mejia. The team also collaborated with FRC team Uni-Rex (5817) to learn about odometry localization, reusable sample code, automatic set points, and shooting constants.",
    },
  ],
  members: [
    {
      name: "Jonathan Alfaro, 12th",
      role: "Co-founder / Captain / Co-driver / Lead Programmer",
      description: "Leads match strategy, programming, and the team build direction.",
    },
    {
      name: "Manuel Reyes, 12th",
      role: "Co-founder / Lead CAD Designer / Builder + Wiring",
      description: "Leads CAD design, fabrication, electrical integration, and wiring.",
    },
    {
      name: "Christopher Torres, 12th",
      role: "Co-founder / Lead Driver / Builder + Wiring",
      description: "Leads driving performance while building and wiring the competition robot.",
    },
  ],
  media: [
    {
      title: "Build Session",
      caption: "Official build-session media",
      image: "assets/images/building-atstart.jpg",
    },
    {
      title: "Competition Testing",
      caption: "Robot testing on the FTC field",
      image: "assets/images/egg-comp-testing.jpg",
    },
    {
      title: "CAD Iterations",
      caption: "Engineering parts and mechanism iterations",
      image: "assets/images/cad-iterations.jpg",
    },
    {
      title: "NorCal Inspection",
      caption: "ACE presented during NorCal competition inspection",
      image: "assets/images/norcal-inspection.jpg",
    },
    {
      title: "Judging Preparation",
      caption: "Team preparation before competition judging",
      image: "assets/images/norcal-judgingprep.jpg",
    },
    {
      title: "Pinterest Collaboration",
      caption: "Engineering conversation at Pinterest Corporation in San Francisco",
      image: "assets/images/pinterest-collab.jpg",
    },
    {
      title: "Uni-Rex Collaboration",
      caption: "Technical collaboration and localization discussion with FRC Team Uni-Rex",
      image: "assets/images/unirex-collab.jpg",
    },
    {
      title: "Board Collaboration",
      caption: "Team, mentors, and community supporters with ACE",
      image: "assets/images/board-collab.jpg",
    },
  ],
  socials: {
    instagram: {
      handle: "@ftc31174",
      url: "https://www.instagram.com/ftc31174/",
      text: "Follow us on Instagram",
    },
    youtube: {
      handle: "@AztecRobotics31174",
      url: "https://www.youtube.com/@AztecRobotics31174",
      text: "Watch us on YouTube",
    },
  },
  contact: [
    { label: "Instagram", value: "@ftc31174", href: "https://www.instagram.com/ftc31174/" },
    { label: "YouTube", value: "@AztecRobotics31174", href: "https://www.youtube.com/@AztecRobotics31174" },
    { label: "Email", value: "roboticsaztec@gmail.com", href: "mailto:roboticsaztec@gmail.com" },
    { label: "FTC Team Record", value: "FIRST Event Web", href: "https://ftc-events.firstinspires.org/team/31174" },
  ],
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const CAD_PARTICLE_SOURCE = "assets/images/ace-cad.png";
document.body.classList.add("intro-active");

function initIntro() {
  const intro = document.getElementById("intro");
  if (!intro) return;

  const finish = () => {
    intro.classList.add("is-complete");
    document.body.classList.remove("intro-active");
  };

  if (reduceMotion || typeof window.gsap === "undefined") {
    finish();
    return;
  }

  const timeline = gsap.timeline({ onComplete: finish });
  timeline
    .set(".intro-mark", { y: "8vh", opacity: 0 })
    .set(".intro-kicker, .intro-number, .intro-location", { opacity: 0, y: 12 })
    .set(".intro-mark h1", { opacity: 0, y: 36, filter: "blur(8px)" })
    .set(".intro-image", { clipPath: "inset(100% 0 0 0)" })
    .to(".intro-mark", { opacity: 1, duration: 0.25 })
    .to(".intro-kicker", { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
    .to(".intro-number", { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "<0.05")
    .to(".intro-mark h1", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }, "<0.08")
    .to(".intro-location", { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "<0.12")
    .to(".intro-image", { clipPath: "inset(0% 0 0 0)", duration: 0.75, ease: "power3.inOut" }, "<0.05")
    .to(".intro-progress span", { width: "100%", duration: 0.7, ease: "power2.inOut" }, "<0.1")
    .to(".intro-mark", { scale: 1.04, y: "-2vh", duration: 0.65, ease: "power2.inOut" }, ">0.05")
    .to(".intro", { opacity: 0, duration: 0.7, ease: "power2.inOut" }, ">0.08");
}

function placeholderImage(label) {
  const text = encodeURIComponent(label.toUpperCase());
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop stop-color='#0a1420' offset='0'/>
          <stop stop-color='#142538' offset='1'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='800' fill='url(#g)'/>
      <g stroke='rgba(111,216,255,0.35)' fill='none'>
        <path d='M0 120h1200M0 240h1200M0 360h1200M0 480h1200M0 600h1200M0 720h1200'/>
        <path d='M140 0v800M280 0v800M420 0v800M560 0v800M700 0v800M840 0v800M980 0v800M1120 0v800'/>
      </g>
      <text x='50%' y='50%' fill='#ffffff' text-anchor='middle' font-size='56' font-family='Arial, sans-serif'>${label}</text>
    </svg>`
  )}`;
}

function safeHref(href) {
  if (!href || href.includes("[INSERT INFORMATION]")) return "#";
  return href;
}

function createCardImage(src, alt, label) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.src = placeholderImage(label);
  });
  return img;
}

function mountTextContent() {
  document.getElementById("aboutDescription").textContent = siteContent.team.description;
  document.getElementById("robotDescription").textContent = siteContent.robot.description;
}

function mountStats() {
  const grid = document.getElementById("statsGrid");
  siteContent.stats.forEach((item) => {
    const card = document.createElement("article");
    card.className = "stat-card reveal-up";
    card.innerHTML = `
      <span class="stat-value" data-target="${item.value}" data-suffix="${item.suffix || ""}">0</span>
      <p class="stat-label">${item.label}</p>
    `;
    grid.appendChild(card);
  });
}

function mountRobotSpecs() {
  const wrap = document.getElementById("robotSpecs");
  siteContent.robot.specs.forEach((spec) => {
    const card = document.createElement("article");
    card.className = "tech-card reveal-up";
    card.innerHTML = `<h3>${spec.title}</h3><p>${spec.copy}</p>`;
    wrap.appendChild(card);
  });
}

function mountProcess() {
  const track = document.getElementById("processTrack");
  siteContent.buildProcess.forEach((step, i) => {
    const item = document.createElement("article");
    item.className = "process-step reveal-up";
    item.innerHTML = `
      <span class="process-index">0${i + 1}</span>
      <span class="process-name">${step.name}</span>
      <p class="process-copy">${step.copy}</p>
    `;
    track.appendChild(item);
  });
}

function mountAchievements() {
  const timeline = document.getElementById("achievementsTimeline");
  siteContent.achievements.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "achievement-item reveal-up";
    item.innerHTML = `
      <span class="achievement-year">${entry.year}</span>
      <div>
        <h3 class="achievement-title">${entry.title}</h3>
        <p class="achievement-meta">${entry.meta}</p>
      </div>
    `;
    timeline.appendChild(item);
  });
}

function mountProjects() {
  const grid = document.getElementById("projectGrid");
  siteContent.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal-up";

    const content = document.createElement("div");
    content.className = "project-content";
    content.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;

    card.appendChild(content);
    grid.appendChild(card);
  });
}

function mountTeam() {
  const grid = document.getElementById("teamGrid");
  siteContent.members.forEach((member) => {
    const card = document.createElement("article");
    card.className = "team-card reveal-up";

    const content = document.createElement("div");
    content.className = "team-content";
    content.innerHTML = `<h3>${member.name}</h3><p><strong>${member.role}</strong></p><p>${member.description}</p>`;

    card.appendChild(content);
    grid.appendChild(card);
  });
}

function mountMedia() {
  const grid = document.getElementById("mediaGrid");
  siteContent.media.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "media-card reveal-up";

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Open ${item.title} in fullscreen`);

    const imageWrap = document.createElement("div");
    imageWrap.className = "media-image";
    const image = createCardImage(item.image, item.title, `Media ${idx + 1}`);
    image.dataset.caption = item.caption;
    imageWrap.appendChild(image);

    const content = document.createElement("div");
    content.className = "media-content";
    content.innerHTML = `<h3>${item.title}</h3><p>${item.caption}</p>`;

    button.append(imageWrap, content);
    button.addEventListener("click", () => openLightbox(image.src, item.caption));

    card.appendChild(button);
    grid.appendChild(card);
  });
}

function mountSocials() {
  const instagram = siteContent.socials.instagram;
  const youtube = siteContent.socials.youtube;

  document.getElementById("instagramCard").innerHTML = `
    <h3>Instagram</h3>
    <p>Handle: ${instagram.handle}</p>
    <a href="${safeHref(instagram.url)}" target="_blank" rel="noreferrer noopener" data-cursor="OPEN">${instagram.text}</a>
  `;

  document.getElementById("youtubeCard").innerHTML = `
    <h3>YouTube</h3>
    <p>Channel: ${youtube.handle}</p>
    <a href="${safeHref(youtube.url)}" target="_blank" rel="noreferrer noopener" data-cursor="OPEN">${youtube.text}</a>
  `;
}

function mountContact() {
  const wrap = document.getElementById("contactLinks");
  siteContent.contact.forEach((item) => {
    const a = document.createElement("a");
    a.href = safeHref(item.href);
    a.dataset.cursor = "OPEN";
    a.target = item.href.startsWith("mailto:") ? "_self" : "_blank";
    a.rel = "noreferrer noopener";
    a.innerHTML = `<strong>${item.label}</strong><br>${item.value}`;
    wrap.appendChild(a);
  });
}

function wireMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open", !expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
    });
  });
}

function wireLightbox() {
  const lightbox = document.getElementById("lightbox");
  const close = document.getElementById("lightboxClose");

  close.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightboxImage");
  const text = document.getElementById("lightboxCaption");
  image.src = src;
  text.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function wireCursorGlow() {
  if (reduceMotion || window.innerWidth < 1024) return;
  const glow = document.querySelector(".cursor-glow");
  glow.style.opacity = "1";

  window.addEventListener("mousemove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function initCustomCursor() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.querySelector(".custom-cursor");
  const interactive = document.querySelectorAll("[data-cursor]");
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let targetX = x;
  let targetY = y;

  cursor.classList.add("is-visible");
  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  interactive.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("is-open");
      cursor.querySelector(".cursor-label").textContent = element.dataset.cursor || "OPEN";
    });
    element.addEventListener("mouseleave", () => cursor.classList.remove("is-open"));
  });

  const render = () => {
    x += (targetX - x) * 0.16;
    y += (targetY - y) * 0.16;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    requestAnimationFrame(render);
  };

  render();
}

function initParticleRobot() {
  const stage = document.getElementById("particleStage");
  const canvas = document.getElementById("robotParticles");
  const hud = document.getElementById("mechanismHud");
  if (!stage || !canvas) return;

  const context = canvas.getContext("2d");
  const points = [];
  const pointer = { x: -1000, y: -1000, active: false };
  const robotWidth = 620;
  const robotHeight = 400;
  let width = 0;
  let height = 0;
  let scrollMix = 0;

  const random = (seed) => {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  };

  const addRect = (left, top, rectWidth, rectHeight, count, seed) => {
    for (let i = 0; i < count; i += 1) {
      const edge = i % 4;
      let x = left + random(seed + i * 2.7) * rectWidth;
      let y = top + random(seed + i * 4.1) * rectHeight;
      if (edge === 0) y = top;
      if (edge === 1) x = left + rectWidth;
      if (edge === 2) y = top + rectHeight;
      if (edge === 3) x = left;
      points.push({ x, y, seed: seed + i, size: 0.7 + random(seed + i) * 1.7 });
    }
  };

  const addLine = (x1, y1, x2, y2, count, seed) => {
    for (let i = 0; i < count; i += 1) {
      const t = i / count;
      points.push({
        x: x1 + (x2 - x1) * t,
        y: y1 + (y2 - y1) * t,
        seed: seed + i,
        size: 0.7 + random(seed + i) * 1.7,
      });
    }
  };

  const buildFallbackRobot = () => {
    points.length = 0;
    const offsetX = robotWidth * 0.16;
    const offsetY = robotHeight * 0.26;
    addRect(offsetX + 60, offsetY + 150, 330, 116, 470, 2);
    addRect(offsetX + 100, offsetY + 76, 220, 74, 250, 7);
    addRect(offsetX + 38, offsetY + 268, 92, 28, 120, 11);
    addRect(offsetX + 320, offsetY + 268, 92, 28, 120, 13);
    addRect(offsetX + 174, offsetY + 20, 90, 56, 100, 17);
    addLine(offsetX + 264, offsetY + 102, offsetX + 420, offsetY + 45, 145, 19);
    addRect(offsetX + 398, offsetY + 24, 90, 42, 95, 23);
    addLine(offsetX + 72, offsetY + 150, offsetX + 30, offsetY + 88, 80, 29);
    addLine(offsetX + 30, offsetY + 88, offsetX + 78, offsetY + 50, 65, 31);
    addLine(offsetX + 392, offsetY + 150, offsetX + 475, offsetY + 112, 95, 37);
    addLine(offsetX + 475, offsetY + 112, offsetX + 500, offsetY + 160, 55, 41);
  };

  const loadCadParticles = () => {
    const image = new Image();
    image.onload = () => {
      const sampleCanvas = document.createElement("canvas");
      const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
      const sampleWidth = 180;
      const sampleHeight = Math.max(1, Math.round((image.naturalHeight / image.naturalWidth) * sampleWidth));
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;
      sampleContext.drawImage(image, 0, 0, sampleWidth, sampleHeight);
      const pixels = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
      const scaleX = robotWidth / sampleWidth;
      const scaleY = robotHeight / sampleHeight;
      points.length = 0;

      for (let y = 0; y < sampleHeight; y += 1) {
        for (let x = 0; x < sampleWidth; x += 1) {
          const index = (y * sampleWidth + x) * 4;
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const alpha = pixels[index + 3];
          const isWhiteBackground = red > 242 && green > 242 && blue > 242;
          const luminance = (red * 299 + green * 587 + blue * 114) / 1000;

          if (alpha > 30 && !isWhiteBackground && luminance < 248 && (x * 7 + y * 11) % 5 === 0) {
            points.push({
              x: x * scaleX,
              y: y * scaleY,
              seed: x * 1000 + y,
              size: 0.34 + (255 - luminance) / 270,
              color: `rgba(0, ${108 + Math.round((255 - luminance) * 0.08)}, ${108 + Math.round((255 - luminance) * 0.08)}, 0.72)`,
            });
          }
        }
      }
    };
    image.onerror = () => buildFallbackRobot();
    image.src = CAD_PARTICLE_SOURCE;
  };

  const resize = () => {
    const scale = window.devicePixelRatio || 1;
    width = stage.clientWidth;
    height = stage.clientHeight;
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    buildFallbackRobot();
    loadCadParticles();
  };

  const updateScrollMix = () => {
    const rect = stage.getBoundingClientRect();
    const distanceScrolled = Math.max(0, -rect.top);
    scrollMix = Math.min(1, distanceScrolled / (rect.height * 0.72));
  };

  const draw = (time) => {
    context.clearRect(0, 0, width, height);
    const stageScale = Math.min(width / 760, height / 520);
    const centerX = width * 0.52;
    const centerY = height * 0.47;
    const spread = scrollMix * 88;
    const timeSeconds = time * 0.001;
    const rotation = timeSeconds * 0.16;
    const cosine = Math.cos(rotation);
    const sine = Math.sin(rotation);

    points.forEach((point) => {
      const localX = (point.x - robotWidth / 2) * stageScale;
      const localY = (point.y - robotHeight / 2) * stageScale;
      const rotatedX = localX * cosine - localY * sine;
      const rotatedY = localX * sine + localY * cosine;
      const orbit = Math.sin(timeSeconds * 1.4 + point.seed * 0.03) * (2.5 + stageScale * 2);
      const driftX = Math.sin(timeSeconds * 0.8 + point.seed) * spread * 0.22;
      const driftY = Math.cos(timeSeconds * 0.65 + point.seed * 0.8) * spread * 0.18;
      let particleX = centerX + rotatedX + Math.cos(timeSeconds + point.seed) * orbit + driftX;
      let particleY = centerY + rotatedY + Math.sin(timeSeconds + point.seed) * orbit + driftY;
      const dx = particleX - pointer.x;
      const dy = particleY - pointer.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (pointer.active && distance < 120) {
        const force = (120 - distance) / 120;
        particleX += (dx / Math.max(distance, 1)) * force * 38;
        particleY += (dy / Math.max(distance, 1)) * force * 38;
      }

      const alpha = Math.max(0.3, 0.94 - scrollMix * 0.3);
      context.fillStyle = point.color || `rgba(0, 128, 128, ${alpha})`;
      context.beginPath();
      context.arc(particleX, particleY, Math.max(0.65, point.size * stageScale * 1.45), 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(draw);
  };

  stage.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
    const normalizedX = pointer.x / rect.width;
    const normalizedY = pointer.y / rect.height;
    const active = Array.from(stage.querySelectorAll("[data-mechanism]")).sort((a, b) => {
      const ax = parseFloat(a.style.getPropertyValue("--x")) / 100;
      const ay = parseFloat(a.style.getPropertyValue("--y")) / 100;
      const bx = parseFloat(b.style.getPropertyValue("--x")) / 100;
      const by = parseFloat(b.style.getPropertyValue("--y")) / 100;
      return Math.hypot(normalizedX - ax, normalizedY - ay) - Math.hypot(normalizedX - bx, normalizedY - by);
    })[0];
    stage.querySelectorAll("[data-mechanism]").forEach((tag) => tag.classList.remove("is-active"));
    if (active && Math.hypot(normalizedX - parseFloat(active.style.getPropertyValue("--x")) / 100, normalizedY - parseFloat(active.style.getPropertyValue("--y")) / 100) < 0.12) {
      active.classList.add("is-active");
      hud.classList.add("is-active");
      hud.style.right = "auto";
      hud.style.left = `${Math.min(Math.max(pointer.x + 26, 18), width - 304)}px`;
      hud.style.top = `${Math.min(Math.max(pointer.y - 70, 24), height - 170)}px`;
      hud.querySelector(".hud-name").textContent = active.dataset.mechanism;
      hud.querySelector(".hud-detail").textContent = active.dataset.detail;
    } else {
      hud.classList.remove("is-active");
      hud.style.left = "";
      hud.style.right = "";
      hud.style.top = "";
      hud.querySelector(".hud-name").textContent = "HOVER A DETAIL";
      hud.querySelector(".hud-detail").textContent = "Explore the documented CAD decisions.";
    }
  });

  stage.addEventListener("pointerleave", () => {
    pointer.active = false;
    pointer.x = -1000;
    pointer.y = -1000;
    stage.querySelectorAll("[data-mechanism]").forEach((tag) => tag.classList.remove("is-active"));
    hud.classList.remove("is-active");
    hud.style.left = "";
    hud.style.right = "";
    hud.style.top = "";
    hud.querySelector(".hud-name").textContent = "HOVER A DETAIL";
    hud.querySelector(".hud-detail").textContent = "Explore the documented CAD decisions.";
  });
  window.addEventListener("resize", resize);
  window.addEventListener("scroll", updateScrollMix, { passive: true });
  resize();
  updateScrollMix();
  requestAnimationFrame(draw);
}

function splitHeadline() {
  const headline = document.querySelector("[data-split]");
  if (!headline) return;

  const lines = headline.innerHTML.trim().split(/<br\s*\/?>/i).map((line) => line.trim());
  headline.textContent = "";

  lines.forEach((line) => {
    const lineWrap = document.createElement("span");
    lineWrap.className = "split-line";
    for (const char of line) {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.className = "split-char";
      lineWrap.appendChild(span);
    }
    headline.appendChild(lineWrap);
  });
}

function splitAboutStatement() {
  const statement = document.querySelector("[data-about-statement]");
  if (!statement) return;

  const words = statement.textContent.trim().split(/\s+/);
  statement.textContent = "";
  words.forEach((word) => {
    const span = document.createElement("span");
    span.className = "statement-word";
    span.textContent = word;
    statement.appendChild(span);
  });
}

function mountHeroFallbacks() {
  const heroImage = document.querySelector('.hero-media img[data-fallback="hero"]');
  const robotImage = document.querySelector('.robot-media img[data-fallback="robot"]');
  const cadImage = document.querySelector('.robot-schematic');

  heroImage.addEventListener("error", () => {
    heroImage.src = placeholderImage("Aztec Robotics Hero");
  });

  robotImage.addEventListener("error", () => {
    robotImage.src = placeholderImage("Competition Robot");
  });

  cadImage.addEventListener("error", () => {
    cadImage.hidden = true;
  });
}

function animateStatsFallback() {
  const counters = document.querySelectorAll(".stat-value");
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    counter.textContent = `${target}${counter.dataset.suffix || ""}`;
  });
}

function initAnimations() {
  const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  if (reduceMotion) {
    document.querySelectorAll(".reveal-up").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll(".reveal-clip").forEach((el) => {
      el.style.clipPath = "none";
    });
    document.querySelectorAll(".statement-word").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
    });
    animateStatsFallback();
    return;
  }

  if (!hasGSAP) {
    document.querySelectorAll(".reveal-up").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    document.querySelectorAll(".reveal-clip").forEach((el) => {
      el.style.clipPath = "inset(0% 0 0% 0 round 22px)";
    });
    document.querySelectorAll(".statement-word").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
    });
    animateStatsFallback();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".reveal-up:not(.statement)", { opacity: 0, y: 28 });
  gsap.set(".reveal-clip", { clipPath: "inset(14% 0 14% 0 round 22px)" });

  gsap.utils.toArray(".reveal-up:not(.statement)").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
      },
    });
  });

  gsap.utils.toArray(".reveal-clip").forEach((el) => {
    gsap.to(el, {
      clipPath: "inset(0% 0 0% 0 round 22px)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  gsap.fromTo(
    ".split-char",
    { y: 80, opacity: 0, rotateX: -80 },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.025,
      delay: 0.1,
    }
  );

  gsap.set(".statement-word", { opacity: 0.12, y: 26, filter: "blur(8px)" });
  gsap.to(".statement-word", {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".statement",
      start: "top 82%",
      end: "bottom 44%",
      scrub: 0.8,
    },
  });

  gsap.utils.toArray("section.section-frame").forEach((section) => {
    const label = section.querySelector(".section-label");
    const heading = section.querySelector("h2:not(.statement)");
    if (label) {
      gsap.fromTo(label, { x: -18, opacity: 0.2 }, {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 88%", end: "top 55%", scrub: 0.7 },
      });
    }
    if (heading) {
      gsap.fromTo(heading, { y: 34, opacity: 0.3 }, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: heading, start: "top 88%", end: "top 58%", scrub: 0.8 },
      });
    }
  });


  gsap.to(".hero-media", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  const statCounters = document.querySelectorAll(".stat-value");
  statCounters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || "";

    gsap.fromTo(
      counter,
      { textContent: 0 },
      {
        textContent: target,
        duration: 1.6,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function () {
          counter.textContent = `${Math.round(Number(counter.textContent))}${suffix}`;
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
          once: true,
        },
      }
    );
  });
}

function init() {
  initIntro();
  splitHeadline();
  splitAboutStatement();
  mountTextContent();
  mountStats();
  mountRobotSpecs();
  mountProcess();
  mountAchievements();
  mountProjects();
  mountTeam();
  mountMedia();
  mountSocials();
  mountContact();
  wireMobileMenu();
  wireLightbox();
  wireCursorGlow();
  initCustomCursor();
  initParticleRobot3D();

  function initParticleRobot3D() {
    const stage = document.getElementById("particleStage");
    const canvas = document.getElementById("robotParticles");
    const hud = document.getElementById("mechanismHud");
    if (!stage || !canvas) return;
    if (typeof THREE === "undefined") {
      initParticleRobot();
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 6.2;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const pointer = { x: 0, y: 0, active: false };
    const group = new THREE.Group();
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const random = (seed) => Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;

    const createParticles = (image) => {
      const sampleCanvas = document.createElement("canvas");
      const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });
      const sampleWidth = 220;
      const sampleHeight = Math.max(1, Math.round((image.naturalHeight / image.naturalWidth) * sampleWidth));
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;
      sampleContext.drawImage(image, 0, 0, sampleWidth, sampleHeight);
      const pixels = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;

      for (let y = 0; y < sampleHeight; y += 1) {
        for (let x = 0; x < sampleWidth; x += 1) {
          const index = (y * sampleWidth + x) * 4;
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const luminance = (red * 299 + green * 587 + blue * 114) / 1000;
          if (pixels[index + 3] > 30 && luminance < 244 && (x * 7 + y * 11) % 4 === 0) {
            const seed = x * 1000 + y;
            positions.push(
              (x / sampleWidth - 0.5) * 5.4,
              (0.5 - y / sampleHeight) * 3.5,
              (random(seed) - 0.5) * 0.58 + (255 - luminance) / 850
            );
          }
        }
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0x008080,
        size: 0.035,
        transparent: true,
        opacity: 0.86,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      group.add(new THREE.Points(geometry, material));
    };

    const image = new Image();
    image.onload = () => createParticles(image);
    image.src = CAD_PARTICLE_SOURCE;
    scene.add(group);

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      pointer.active = true;
      const normalizedX = (event.clientX - rect.left) / rect.width;
      const normalizedY = (event.clientY - rect.top) / rect.height;
      const tags = Array.from(stage.querySelectorAll("[data-mechanism]"));
      const active = tags.sort((a, b) => {
        const distanceA = Math.hypot(normalizedX - parseFloat(a.style.getPropertyValue("--x")) / 100, normalizedY - parseFloat(a.style.getPropertyValue("--y")) / 100);
        const distanceB = Math.hypot(normalizedX - parseFloat(b.style.getPropertyValue("--x")) / 100, normalizedY - parseFloat(b.style.getPropertyValue("--y")) / 100);
        return distanceA - distanceB;
      })[0];
      tags.forEach((tag) => tag.classList.remove("is-active"));
      if (active && Math.hypot(normalizedX - parseFloat(active.style.getPropertyValue("--x")) / 100, normalizedY - parseFloat(active.style.getPropertyValue("--y")) / 100) < 0.12) {
        active.classList.add("is-active");
        hud.classList.add("is-active");
        hud.querySelector(".hud-name").textContent = active.dataset.mechanism;
        hud.querySelector(".hud-detail").textContent = active.dataset.detail;
      }
    });

    stage.addEventListener("pointerleave", () => {
      pointer.active = false;
      stage.querySelectorAll("[data-mechanism]").forEach((tag) => tag.classList.remove("is-active"));
      hud.classList.remove("is-active");
      hud.querySelector(".hud-name").textContent = "HOVER A DETAIL";
      hud.querySelector(".hud-detail").textContent = "Explore the documented CAD decisions.";
    });

    const animate = (time) => {
      const seconds = time * 0.001;
      group.rotation.y = seconds * 0.22 + pointer.x * 0.12;
      group.rotation.x = Math.sin(seconds * 0.7) * 0.08 - pointer.y * 0.08;
      group.position.x += ((pointer.x * 0.12) - group.position.x) * 0.04;
      group.position.y += ((pointer.y * 0.08) - group.position.y) * 0.04;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(animate);
  }
  mountHeroFallbacks();
  initAnimations();
}

document.addEventListener("DOMContentLoaded", init);
