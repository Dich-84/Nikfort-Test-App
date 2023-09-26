using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IRealtyobjectService
    {
        void Update(Realtyobject category);

        List<Realtyobject> GetAll();

        Realtyobject Get(string id);

    }
    public class RealtyobjectService: ServiceBase, IRealtyobjectService
    {
        private const string FilePath = @"\bin\Data\Realtyobjects.json";

        private List<Realtyobject> _realtyobjects;

        public RealtyobjectService()
        {
            var savedData = ReadData();

            _realtyobjects =
                savedData != null
                ? savedData
                : new List<Realtyobject>();
        }

        public Realtyobject Get(string id)
        {
            return _realtyobjects.FirstOrDefault(x => x.nf_realtyobjectid == id);
        }

        public List<Realtyobject> GetAll()
        {
            return _realtyobjects;
        }

        public void Update(Realtyobject category)
        {
            var oldCategory = Get(category.nf_realtyobjectid);

            oldCategory.nf_status = category.nf_status;

            SaveChanges();
        }

        private List<Realtyobject> ReadData()
        {
            var data = File.ReadAllText(GetStoragePath(FilePath));

            return JsonConvert.DeserializeObject<List<Realtyobject>>(data);
        }

        private void SaveChanges()
        {
            var data = JsonConvert.SerializeObject(_realtyobjects);
            File.WriteAllText(GetStoragePath(FilePath), data);
        }
    }
}