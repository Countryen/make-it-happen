using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FirstAuthorSketch
{
    public class Page
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public string Button1Text { get; set; }
        public string Button2Text { get; set; }
        public string Button1TargetId { get; set; }
        public string Button2TargetId { get; set; }

        public Page(string id, string text, string button1Text, string button2Text, string button1TargetId, string button2TargetId)
        {
            this.Id = id;
            this.Text = text;
            this.Button1Text = button1Text;
            this.Button2Text = button2Text;
            this.Button1TargetId = button1TargetId;
            this.Button2TargetId = button2TargetId;
        }

        internal Page()
        {

        }

    }
}
