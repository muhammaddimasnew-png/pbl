document.addEventListener('DOMContentLoaded', function() {
  // ambil elemen kalender
  var calendarEl = document.getElementById('calendar');

  // buat kalender
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'id',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
  });

  // render kalender
  calendar.render();

  // tambah event manual
  document.getElementById('calendar').addEventListener('dblclick', function() {
    const title = prompt('Judul Event:');
    const date = prompt('Tanggal (YYYY-MM-DD):');
    if (title && date) {
      calendar.addEvent({ title: title, start: date });
      alert('Event berhasil ditambahkan!');
    }
  });

  // filter mata kuliah
  const filter = document.getElementById('filterCourse');
  if (filter) {
    filter.addEventListener('change', function() {
      const selected = this.value;
      calendar.getEvents().forEach(event => {
        if (selected === 'all' || event.extendedProps.course === selected) {
          event.setProp('display', 'auto');
        } else {
          event.setProp('display', 'none');
        }
      });
    });
  }
});
