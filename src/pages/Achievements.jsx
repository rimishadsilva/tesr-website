import AchievementElement from "../components/AchievementElement";

const Events = () => {    
    const events = [
    {
      title: 'Season 2019 (ATVC-Gujarat)',
      image: 'https://lh6.googleusercontent.com/r2URLLNv0L60mohEhxDCOndYl0y6X3u6WNhuyV3uIMBEdg70XlIL7bMi1uyg7jKgr9oQ_zSKFVMBMsE3h3sojMLWKebMNBYdQUe3kM6xpdPQLvUjzelDsD72ctR5qQEizJs4QDW4hZhoQlu6sWFR37nssJtfQyfXOGYgiba3nnxwH0phXR94kNemKYYkhoGB=w1280',
      description: [
        'Acceleration AIR 5',
        'Sledge pull AIR 6',
        'Endurance AIR 5',
        'Overall Performance AIR 5'
      ],
      sides: 'left'
    },
    {
      title: 'Season 2020 (SAE Baja)',
      image: '',
      description: [
        'Overall Dynamic AIR 2',
        'All terrain performance AIR 1',
        'Maneuverability AIR 2',
        'Best Brake performance AIR 2',
        'Acceleration AIR 4',
        'Suspension & Traction AIR 4',
        'CAE Evaluation AIR 4',
        'Sales presentation AIR 5',
        'Overall ranking  AIR 8 '
      ],
      sides: 'right'
    }]
    return  <section>
            <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p class="ml-2 text-yellow-300 uppercase tracking-loose">Achievements</p>
                <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Achievements of Team eSJEC Racing</p>
                <a href="/events"
                class="bg-transparent mr-auto rounded shadow hover:shadow-lg py-2 px-4 border border-300">
                Explore Now</a>
              </div>
    
              <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div class="container mx-auto w-full h-full">
                  <div class="relative wrap overflow-hidden p-10 h-full">
                    
                      <div class="border-2-2 border-yellow-555 absolute h-full border"
                       style={{ right: '50%', border: '2px solid #FFC100', 'border-radius': '1%' }}>
                      </div>
    
                      <div class="border-2-2 border-yellow-555 absolute h-full border"
                       style={{ left: '50%', border: '2px solid #FFC100', 'border-radius': '1%' }}>
                      </div>
                      {
                        events.map(event => <AchievementElement {...event} />)
                      }
                  </div>
                </div>
              </div>
            </div>
        </section>
}

export default Events;