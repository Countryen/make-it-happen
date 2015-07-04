using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FirstAuthorSketch
{
    public static class DataBook
    {
        private static List<Page> pages = new List<Page>();
        public static void AddPage(Page page) 
        {
            pages.RemoveAll(bookPage => bookPage.Id == page.Id);
            pages.Add(page);
            OnChanged(null, null); 
        }
        public static void RemovePage(Page page) { pages.RemoveAll(bookPage => bookPage.Id == page.Id); OnChanged(null, null); }
        public static IEnumerable<Page> Pages { get { return new List<Page>(pages); } }
        public static event EventHandler<EventArgs> OnChanged;

        public static void SaveToFile(System.IO.FileInfo file)
        {
            var serializer = new System.Xml.Serialization.XmlSerializer(typeof(List<Page>));
            using (var fileStream = file.OpenWrite()) 
                serializer.Serialize(fileStream, pages);
        }

        public static void LoadFromFile(System.IO.FileInfo file)
        {
            var deserializer = new System.Xml.Serialization.XmlSerializer(typeof(List<Page>));
            using (var fileStream = file.OpenRead())
                pages = deserializer.Deserialize(fileStream) as List<Page>;
        }
    }
}
