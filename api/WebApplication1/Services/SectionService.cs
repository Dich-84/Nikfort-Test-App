using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;
using Newtonsoft.Json;
using System.IO;

namespace WebApplication1.Services
{
    public interface ISectionService
    {
        List<Section> GetAll();

        Section Get(string id);

    }
    public class SectionService: ServiceBase, ISectionService
    {
        private const string FilePath = @"\bin\Data\Sections.json";

        private List<Section> _sections;

        public SectionService()
        {
            var savedData = ReadData();

            _sections =
                savedData != null
                ? savedData
                : new List<Section>();
        }

        public Section Get(string id)
        {
            return _sections.FirstOrDefault(x => x.nf_sectionid == id);
        }

        public List<Section> GetAll()
        {
            return _sections;
        }

        private List<Section> ReadData()
        {
            var data = File.ReadAllText(GetStoragePath(FilePath));

            return JsonConvert.DeserializeObject<List<Section>>(data);
        }
    }
}